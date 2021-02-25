import React from 'react';
import props from '../Shop/Shop';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { img, name, seller, price, stoke } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by : {seller}</small></p>
                <p>$ {price}</p> <br />
                <p>only {stoke} left in a stoke -order soon</p>
            </div>
        </div>
    );
};

export default Product;