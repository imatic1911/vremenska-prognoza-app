import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBBtn,
    MDBInput
  } from "mdb-react-ui-kit";
  import { setBackgroundImage } from '../helpers/pozadina.js'
  import { fetchData } from '../helpers/pozivApi.js';

const PrognozaTrenutniDan = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [bgGif, setBGGif] = useState(undefined);
 // const API_KEY = 'aa6ceb23fdb262039c170ab24b33fd67';
 const API_KEY = '895284fb2d2c50a520ea537456963d9c'


  

  useEffect(() => {
    console.log("GRAD je:" + city);
    fetchData(city, setWeatherData, setBackgroundImage, setBGGif);
  }, []);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(city, setWeatherData, setBackgroundImage, setBGGif);
  };

  return (
    <div> 
      <MDBContainer> 
      <form onSubmit={handleSubmit}>
        <MDBInput
          type="text"
          placeholder="Unesite grad koji zelite"
          value={city}
          onChange={handleInputChange}
        />
        <MDBBtn style={{marginTop: '2%'}} type="submit">Dohvati Prognozu</MDBBtn>
      </form>
      <br></br>
      </MDBContainer>  
      {weatherData ? (
        <>
        {/** 
          <h2>{weatherData.name}</h2>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Opis: {weatherData.weather[0].description}</p>
          <p>Čini se kao: {weatherData.main.feels_like}°C</p>
          <p>Vlaga : {weatherData.main.humidity}%</p>
          <p>Tlak : {weatherData.main.pressure}</p>
          <p>Brzina vijetra : {weatherData.wind.speed}m/s</p>
        */}
          
        <MDBContainer className="h-250">
        <MDBRow className="justify-content-center align-items-center h-250">
        <MDBCard
              className="text-white bg-image shadow-4-strong"
              style={{
                backgroundImage: bgGif ?? "url(https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif)"
              }}
            >
          <MDBCardHeader className="p-4 border-0">
                <div className="text-center mb-3">
                  <p className="h2 mb-1">{weatherData.name}</p>
                  <p className="mb-1">{weatherData.weather[0].description}</p>
                  <p className="display-1 mb-1">{weatherData.main.temp}°C</p>
                  <span className="">Tlak: {weatherData.main.pressure}</span>
                  <span className="mx-2">|</span>
                  <span className="">Vlaga: {weatherData.main.humidity}%</span>
                  <br></br>
                  <span className="">Čini se kao: {weatherData.main.feels_like}°C</span>
                  <br></br>
                  <span className="">Brzina vijetra: {weatherData.wind.speed}m/s</span>
                </div>
              </MDBCardHeader>
              </MDBCard>
              </MDBRow>
              </MDBContainer>
        </>
      ) : (
        <p>Ucitavanje podataka o vremenu...</p>
      )}
    </div>
  );
};

export default PrognozaTrenutniDan;