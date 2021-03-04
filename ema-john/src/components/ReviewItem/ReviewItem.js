import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const { name, quantity } = props.product
    return (
        <div className="review">
            <h4 className="p-name">{name}</h4>
            <p>Quantity : {quantity}</p>
            <br />
            <button className="main-button">Remove item</button>
        </div>
    );
};

export default ReviewItem;