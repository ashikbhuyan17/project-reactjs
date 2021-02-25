import React from 'react';
import props from '../Shop/Shop';

const Product = (props) => {

    return (
        <div>
            <h4> product category : {props.cat}</h4>
            <img src={props.i} alt="" width="30px" />
        </div>
    );
};

export default Product;