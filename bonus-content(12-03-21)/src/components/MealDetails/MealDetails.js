import React, { useEffect, useState } from 'react';
import MealFinder from '../MealFinder/MealFinder';

const MealDetails = () => {
    // const [meal, setMeal] = useState([])   id=1
    const [meal, setMeal] = useState([])

    useEffect(() => {
        const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [])
    console.log(meal?.strMeal);
    return (
        <div>
            <h1>this is meal details </h1>

            {/* <h3>name :  {meal.meals?.[0].strMeal}</h3>   id=1 */}
            <h3>name :  {meal?.strMeal}</h3>
            <h3>name :  {meal.strMeal && meal.strMeal}</h3>
            <MealFinder></MealFinder>


        </div>
    );
};

export default MealDetails;