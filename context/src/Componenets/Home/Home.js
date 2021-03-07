import React from 'react';
import Category from '../Category/Category';


const Home = (props) => {
    const { count } = props
    return (
        <div style={{ border: '1px solid red', margin: '10px' }}>
            <h1>this is home page : {count}</h1>
            <Category></Category>
        </div>
    );
};

export default Home;