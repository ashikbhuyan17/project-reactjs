import React from 'react';


const County = (props) => {
    console.log("v", props.country)
    const { name, flag, population, capital } = props.country
    return (
        <div>
            <h4>this is a : {name}</h4>

        </div>
    );
};

export default County;