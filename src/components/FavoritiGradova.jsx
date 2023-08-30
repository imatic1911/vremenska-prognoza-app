import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBInput,
  MDBBtnGroup
} from "mdb-react-ui-kit";

import podaciGradova from "../server/gradovi.json";
import { setBackgroundImage } from "../helpers/pozadina.js";
import { fetchData } from "../helpers/pozivApi.js";
import PrognozaTrenutniDan from "./PrognozaTrenutniDan";
import axios from 'axios';
import odabraniGrad from "../helpers/odabraniGrad.js"

const FavoritiGradova = () => {
  const [gradovi, postaviGradove] = useState(podaciGradova);
  const [noviGrad, postaviNoviGrad] = useState("");
  const [weatherData, setWeatherData] = useState(null); // Primer stanja za vremenske podatke
  const [bgGif, setBGGif] = useState(undefined);
  const [gradKojiSeSalje, setGradKojiSeSalje] = useState("");
  let city = "Zagreb"; // Zamijenite sa odgovarajućim gradom

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
        type="text"
        value={noviGrad}
        onChange={e => postaviNoviGrad(e.target.value)}
        placeholder="Unesite novi grad"
      />
      <MDBBtn onClick={dodajGrad} color="success">Dodaj Grad</MDBBtn>
      <br />
      <br />
      <div id="odabraniFavoriti" style={{marginBottom: '2%', marginLeft: '22%'}}>
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
      <PrognozaTrenutniDan grad={gradKojiSeSalje} />
    </div>
  );
};

export default FavoritiGradova;
