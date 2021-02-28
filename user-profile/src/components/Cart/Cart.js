import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart
    // console.log('cart', cart);
    // const a = cart.map(cart => cart)
    // console.log(a.id);
    let income = 0;
    let id = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        console.log(element);
        console.log("element", element.income);
        income = Number(element.income)
        id = element.id

    }

    return (
        <div className="cart">
            <h4>this is card : {id}</h4>
            <h1>income : {income}</h1>
            {/* <h1>income : {props.cart.length}</h1>
            <h3>FullName : {fullName} </h3>
            <h3>Income : {income}</h3> */}
        </div>
    );
};

export default Cart;