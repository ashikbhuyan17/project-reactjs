import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountry] = useState([])
    useEffect(() => {
        const url = "https://restcountries.eu/rest/v2/all"
        fetch(url)
            .then(res => res.json())
            .then(d => {
                const data = d.slice(0, 100)
                setCountry(data)
            })
    }, [])
    console.log(countries);
    return (
        <div>
            <h4>length : {countries.length}</h4>
            {
                countries.map(cn => <Country country={cn} ></Country>)
            }
        </div>
    );
};

export default Home;