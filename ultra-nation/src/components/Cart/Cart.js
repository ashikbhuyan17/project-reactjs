import React from 'react';

const Cart = (props) => {
    // console.log(props.cart)
    const cart = props.cart
    console.log("cart ", cart)
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     console.log("population ", country.population)

    //     totalPopulation = totalPopulation + country.population
    // }

    // const totalPopulation = ()
    const total = cart.reduce((sum, country) => sum + country.population, 0)
    return (
        <div>
            <h4>cart added : {cart.length} </h4>
            <h4>population : {total}</h4>

        </div>
    );
};

export default Cart;