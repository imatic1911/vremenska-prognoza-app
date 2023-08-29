import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBInput, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

import podaciGradova from '../gradovi.json';
import { setBackgroundImage } from '../helpers/pozadina.js'
import { fetchData } from '../helpers/pozivApi.js';

const FavoritiGradova = () => {
  const [gradovi, postaviGradove] = useState(podaciGradova);
  const [noviGrad, postaviNoviGrad] = useState('');
  const [weatherData, setWeatherData] = useState(null); // Primer stanja za vremenske podatke
  const [bgGif, setBGGif] = useState(undefined);
  const city = 'Zagreb'; // Zamijenite sa odgovarajućim gradom

  useEffect(() => {
    console.log("GRAD je:" + city);
    fetchData(city, setWeatherData, setBackgroundImage, setBGGif);
  }, []);

  const dodajGrad = () => {
    if (noviGrad.trim() === '') return;

    postaviGradove([...gradovi, noviGrad]);
    postaviNoviGrad('');
  };

  const obrisiGrad = (gradZaBrisanje) => {
    const azuriraniGradovi = gradovi.filter(grad => grad !== gradZaBrisanje);
    postaviGradove(azuriraniGradovi);
  };

  return (
    <div>
      <MDBInput
        type="text"
        value={noviGrad}
        onChange={e => postaviNoviGrad(e.target.value)}
        placeholder="Unesite novi grad"
      />
      <MDBBtn onClick={dodajGrad}>Dodaj Grad</MDBBtn>

      <MDBListGroup>
        {gradovi.map(grad => (
          <MDBListGroupItem key={grad}>
            <a href='#' onClick={() => fetchData(grad, setWeatherData, setBackgroundImage, setBGGif)}>{grad}</a>
            <a href="#" onClick={() => obrisiGrad(grad)}>Izbriši</a>
          </MDBListGroupItem>
        ))}
      </MDBListGroup>
    </div>
  );
};

export default FavoritiGradova;