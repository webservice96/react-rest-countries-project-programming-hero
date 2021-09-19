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
            <h3 className="mb-3">All Countries</h3>
            <div className="row">
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;