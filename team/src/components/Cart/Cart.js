import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props);
    const player = props.player
    let total = 0;
    let name = "";
    for (let i = 0; i < player.length; i++) {
        const element = player[i];
        // console.log("element", element)
        total = total + Number(element.salary)
        name = name + element.player_name


    }
    return (
        <div className="cart">
            {/* <ul>
                <li>name : {name} </li>
            </ul> */}
            <h5>name : {name}</h5>
            <br />
            <h3>salary : {total} </h3>
        </div >
    );
};

export default Cart;