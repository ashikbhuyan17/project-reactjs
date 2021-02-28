import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart
    // console.log('cart', cart);
    // const a = cart.map(cart => cart)
    // console.log(a.id);
    let income = 0;
    let id;
    let img;
    let name;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        console.log(element);
        console.log("element", element.income);
        income = Number(element.income)
        id = element.id
        img = element.img
        name = element.fullName

    }

    return (
        <div className="dynamic-cart">
            <div className="cart">
                <h4>this is card : {id}</h4>
                <h1>income : {income}</h1>
            </div>
            <div className="cart">
                <h4>Name: {name}</h4>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Cart;