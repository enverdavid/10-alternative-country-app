import React from 'react';
import { CountryCard } from './CountryCard';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "../styles/ContinentGrid.style.css";

const ContinentsGrid = () => {

    const [continentData, setContinentData] = useState([]);
    const { id } = useParams();

    // Traer la data por continentes:
    const getContinetData = async() => {
        const response = await fetch(`https://restcountries.eu/rest/v2/region/${id}`);
        const result = await response.json();        
        setContinentData(result);
        console.log(result)
    }

    useEffect(() => {
        getContinetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <div className="ContinentsGrid-container">
            {continentData.map(({alpha2Code, name, capital, flag}) => {
                return(
                    // <p key={alpha2Code} >País: {name}</p>
                    <CountryCard key={alpha2Code} name={name} capital={capital} flag={flag} />
                )
            })}
        </div>
    )
}
 
export {ContinentsGrid};