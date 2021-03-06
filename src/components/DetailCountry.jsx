import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/DetailCountry.style.css";

const DetailCountry = () => {
  const kye = "6cac439ea9d472303cf8e496e588d2ae";

  const { id } = useParams();
  const [countryData, setCountryData] = useState();
  const [weatherData, setWeatherData] = useState();

  const getCountryData = async () => {
    // const response = await fetch(`https://restcountries.eu/rest/v2/name/${id}`);
    const response = await fetch(`https://restcountries.com/v3/name/${id}`);
    const result = await response.json();
    
    if (result.status !== 404) {
      setCountryData(result[0]);
      if (result[0].capital) {
        getWeatherData(result[0].capital[0])
      }
    }
  };

  const getWeatherData = async (capital) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${kye}&units=metric`
    );
    const result = await response.json();
    setWeatherData(result);
    
  };

  useEffect(() => {
    getCountryData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="DetailCountry-container">
      {!countryData && <h2>Cargando...</h2>}
      {countryData && countryData.status === 404 && <h2>El país no existe</h2>}

      {countryData && countryData.status !== 404 && (
        <>
          <img src={countryData.flags[0]} alt="" />
          <h4 className="DetailCountry-container--country-title">
            {countryData.name.common}
          </h4>
          <h4 className="DetailCountry-container--capital-title">
            Capital: {countryData.capital? countryData.capital[0] : "No se encontró capital"}
          </h4>
        </>
      )}
      
      {countryData && countryData.capital && (
        <div className="weather-cantainer">
          {weatherData && (
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="un icono"
            />
          )}
          {weatherData && (
            <h4 className="DetailCountry-container--temp">
              {weatherData.main.temp}ºC
            </h4>
          )}
        </div>
      )}

    </div>
  );
};

export { DetailCountry };
