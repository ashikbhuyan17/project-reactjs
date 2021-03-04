import React from 'react';
// use font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import { Link } from 'react-router-dom';
// import Shop from '../Shop/Shop';

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stoke, key } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                
                <h4 className="product-name"> <Link to={"/product/" + key}>{name}</Link> </h4>  {/* Dynamic path */}
                <p><small>by : {seller}</small></p>
                <p>$ {price}</p>
                <p>only {stoke} left in a stoke -order soon</p>
                {/* ()=>props.handleAddProduct(name => automatic execute na howar jonno */}
                <button className="main-button" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;