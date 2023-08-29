import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Favoriti from './Favoriti';
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCol,
    MDBContainer,
    MDBRow,
  } from "mdb-react-ui-kit";
import gradovi from '../listaGradova.json';

const PrognozaTrenutniDan = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [selectedCity, setSelectedCity] = useState(['Split']); // Dodano stanje za odabrani grad
  const [favoriteCities, setFavoriteCities] = useState([]);
  const API_KEY = 'aa6ceb23fdb262039c170ab24b33fd67';


  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=hr&exclude=hourly,daily&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      console.log(response.data); // U console.log se može viditi cijela prognoza
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const handleCitySelect = (e) => {
    setSelectedCity(e.target.value);
  };

  // Funkcije za dodavanje i brisanje favorita grada
  const addFavoriteCity = () => {
    if (selectedCity && !favoriteCities.includes(selectedCity)) {
      setFavoriteCities([...favoriteCities, selectedCity]);
    }
  };

  const removeFavoriteCity = (cityToRemove) => {
    const updatedFavorites = favoriteCities.filter((city) => city !== cityToRemove);
    setFavoriteCities(updatedFavorites);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Unesite grad koji zelite"
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit">Dohvati Prognozu</button>
      </form>
      {weatherData ? (
        <>
          <h2>{weatherData.name}</h2>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Opis: {weatherData.weather[0].description}</p>
          <p>Čini se kao: {weatherData.main.feels_like}°C</p>
          <p>Vlaga : {weatherData.main.humidity}%</p>
          <p>Tlak : {weatherData.main.pressure}</p>
          <p>Brzina vijetra : {weatherData.wind.speed}m/s</p>
          <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-200">
          <MDBCardHeader className="p-4 border-0">
                <div className="text-center mb-3">
                  <p className="h2 mb-1">{weatherData.name}</p>
                  <p className="mb-1">{weatherData.weather[0].description}</p>
                  <p className="display-1 mb-1">{weatherData.main.temp}°C</p>
                  <span className="">Pressure: {weatherData.main.pressure}</span>
                  <span className="mx-2">|</span>
                  <span className="">Humidity: {weatherData.main.humidity}%</span>
                </div>
              </MDBCardHeader>
              </MDBRow>
              </MDBContainer>
        </>
      ) : (
        <p>Ucitavanje podataka o vremenu...</p>
      )}
       <Favoriti favoriteCities={favoriteCities} onRemoveFavorite={removeFavoriteCity} />
    </div>
  );
};

export default PrognozaTrenutniDan;