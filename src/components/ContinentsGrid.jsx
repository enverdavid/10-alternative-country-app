import React from "react";
import { CountryCard } from "./CountryCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ContinentGrid.style.css";

const ContinentsGrid = () => {
  const [continentData, setContinentData] = useState();
  const { id } = useParams();

  // Traer la data por continentes:
  const getContinetData = async () => {
    const response = await fetch(`https://restcountries.com/v3/region/${id}`);
    const result = await response.json();
    setContinentData(result);
  };

  useEffect(() => {
    getContinetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="ContinentsGrid-container">
      {continentData &&
        continentData.map(({ name, capital, flags }, index) => {
          return (
              <CountryCard
                key={index}
                name={name.common}
                capital={capital ? capital[0] : "No hay capital"}
                flag={flags[0]}
              />
          );
        })}
    </div>
  );
};

export { ContinentsGrid };
