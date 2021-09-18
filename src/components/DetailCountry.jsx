import React from 'react';
import { useState, useEffect } from 'react';
import{useParams} from 'react-router-dom'

const DetailCountry = () => {

    const {id} = useParams();
    const [countryData, setCountryData] = useState([]);

    const getCountryData = async () => {
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${id}`);
        const result = await response.json();
        setCountryData(result[0]);
        console.log(1)
      }

    useEffect(() => {
        getCountryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <div>
            <h3>Soy el datail country</h3>
            <h4>Muestro el id de Search: {id}</h4>
            <h4>EL dato es: {countryData.name}</h4>
        </div>
    )
}

export {DetailCountry};