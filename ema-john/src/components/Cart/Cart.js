import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const cart = props.cart
    console.log("cart", cart);
    // const total = cart.reduce((total, prd) => total + prd.price, 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        console.log("p ", product);
        total = total + product.price * product.quantity
        // debugger;

    }
    let shipping = 0;
    if (total > 35) {
        shipping = 0
    }
    else if (total > 15) {
        shipping = 4.99
    } else if (total > 0) {
        shipping = 12.99
    }
    const tax = (total * 0.1).toFixed(2)

    const grandTotal = total + shipping + Number(tax)

    return (
        <div>
            <h4>this is card</h4>
            <h6>Items Ordered : {cart.length}  </h6>
            <p>product price : {total}</p>
            <p><small>shipping cost : {shipping}</small></p>
            <p>tax : {tax}</p>
            <p>total price : {grandTotal}</p>
            <br />
            <Link to="/review">
                <button className="main-button">Review Order</button>
            </Link>

        </div >
    );
};

export default Card;