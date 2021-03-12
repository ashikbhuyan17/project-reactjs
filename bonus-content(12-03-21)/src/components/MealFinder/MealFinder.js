import React, { useEffect, useState } from 'react';

const MealFinder = () => {
    const [search, setSearch] = useState('')
    const [male, setMale] = useState([])
    const handleChange = event => {
        console.log(event.target.value);  
        setSearch(event.target.value)
    }

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMale(data.meals))
    }, [search])

    return (
        <div>
            <h1>meal finder</h1>
            <input type="text" placeholder="find food " onChange={handleChange} />
            <h5>search : {search}</h5>
            <h6>meal found : {male?.length || 0}</h6>

            <ul>
                {
                    male?.map(m => <li>{m?.strMeal}</li>)
                }
            </ul>
        </div>
    );
};

export default MealFinder;