import React from 'react';


const County = (props) => {
    console.log("v", props.country)
    const { name, flag, population, capital } = props.country
    const handlerAddCountry = props.handlerAddCountry
    return (
        <div style={{ textAlign: 'center', border: '1px solid gray', margin: '20px', width: '400px', backgroundColor: '#5e1339', color: 'white' }}>
            <h4>this is a : {name}</h4>
            <h5>Capital : {capital}</h5>
            <img src={flag} alt="" width='100px' />
            <h4>Population : {population}</h4>
            <button onClick={() => handlerAddCountry(props.country)}>population</button>

        </div>
    );
};

export default County;