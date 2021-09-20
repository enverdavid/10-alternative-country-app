import React from "react";
import "../styles/CountryCard.style.css";
import { Link } from "react-router-dom";

const CountryCard = ({ name, capital, flag }) => {
  return (
    <div className="CountryCard-container">
      <img src={flag} alt="" />
      <h3 className="card-title">{name}</h3>
      <h6 className="card-subtitle">capital: {capital}</h6>
      <div className="link-container">
        <Link to={`/detail/${name}`}>ver más</Link>
      </div>
    </div>
  );
};

export { CountryCard };
