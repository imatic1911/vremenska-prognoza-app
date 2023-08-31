import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBInput,
  MDBBtnGroup
} from "mdb-react-ui-kit";

import podaciGradova from "../server/gradovi.json";
import PrognozaTrenutniDan from "./PrognozaTrenutniDan";
import axios from 'axios';
import odabraniGrad from "../helpers/odabraniGrad.js"

const FavoritiGradova = () => {
  const [gradovi, postaviGradove] = useState(podaciGradova);
  const [noviGrad, postaviNoviGrad] = useState("");
  const [gradKojiSeSalje, setGradKojiSeSalje] = useState("");

  //zustannd
  const { setDGrad } = odabraniGrad(); // Dohvaćanje setDGrad funkcije iz zustand stanja


  useEffect(() => {
    async function fetchGradovi() {
      try {
        const response = await axios.get('/api/gradovi');
        postaviGradove(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchGradovi();
  }, []);

  const dodajGrad = async () => {
    if (noviGrad.trim() === '') return;

    try {
      await axios.post('/api/gradovi', { grad: noviGrad });
      postaviGradove([...gradovi, noviGrad]);
      postaviNoviGrad('');
    } catch (error) {
      console.error(error);
    }
  };

  const obrisiGrad = async (gradZaBrisanje) => {
    try {
      await axios.delete(`/api/gradovi/${gradZaBrisanje}`);
      const azuriraniGradovi = gradovi.filter(grad => grad !== gradZaBrisanje);
      postaviGradove(azuriraniGradovi);
    } catch (error) {
      console.error(error);
    }
  };

  const prenesiGrad = (grad) => {
    setDGrad(grad); // Postavljanje odabraniGrad u zustand
  };

  return (
    <div>
     <div id="favoriti" style={{border: '1px solid', marginBottom: '2%', marginLeft: '22%' , marginRight: '22%'}}>
      <MDBInput
        style={{margin: '1em 1em 1em 1em'}}
        type="text"
        value={noviGrad}
        onChange={e => postaviNoviGrad(e.target.value)}
        label='Unesite novi favorizirani grad'
        placeholder="Unesite novi favorizirani grad"
      />
      <MDBBtn onClick={dodajGrad} color="success">Dodaj Grad</MDBBtn>
      <br />
      <br />
      <div id="odabraniFavoriti" style={{marginBottom: '2%', marginLeft: '22%'}}>
      <div className="badge bg-primary text-wrap text-uppercase"  style={{width: "15rem"}}>Favoriti:</div><br />
      <MDBBtnGroup aria-label="Grad buttons">
        {gradovi.map((grad, index) =>
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <MDBBtn color="dark" onClick={() => prenesiGrad(grad)}>
              {grad}
            </MDBBtn>
            <MDBBtn color="danger" size="sm" onClick={() => obrisiGrad(grad)}>
              X
            </MDBBtn>
          </div>
        )}
      </MDBBtnGroup>
      </div>
      </div>
      <PrognozaTrenutniDan />
    </div>
  );
};

export default FavoritiGradova;
