import React from 'react';
import { useEffect, useState } from 'react';

const ContinentsGrid = () => {

    const [continentData, setContinentData] = useState([]);

    // Traer la data por continentes:
    const getContinetData = async() => {
        const response = await fetch("https://restcountries.eu/rest/v2/region/Africa");
        const result = await response.json();        
        setContinentData(result);
        console.log(result)
    }

    useEffect(() => {
        getContinetData();
    }, []);

    return (
        <div>
            <h3>Soy un Continent Grid</h3>
            {continentData.map(({alpha2Code, name}) => {
                return(
                    <p key={alpha2Code} >País: {name}</p>
                )
            })}
        </div>
    )
}
 
export {ContinentsGrid};