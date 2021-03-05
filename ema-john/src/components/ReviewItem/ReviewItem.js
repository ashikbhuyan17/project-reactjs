import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const { name, quantity,key } = props.product
    const removeProduct = props.removeProduct
    return (
        <div className="review">
            <h4 className="p-name">{name}</h4>
            <p>Quantity : {quantity}</p>
            <br />
            <button
                onClick={() => removeProduct(key)}
                className="main-button">Remove item
             </button>
        </div>
    );
};

export default ReviewItem;