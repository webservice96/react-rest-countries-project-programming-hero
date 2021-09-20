import React from 'react';
import { useEffect, useState } from "react";
import Country from '../Country/Country';
const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, []);
    return (
        <div className="container my-4">
            <h2 className="mb-3">All Countries {countries.length}</h2>
            <div className="row">
                {
                    countries.map(country => <Country key={country.capital} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;