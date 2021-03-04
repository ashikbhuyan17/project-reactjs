import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    // local storage takhe data gulu nibo
    const [cart, setCart] = useState([])
    useEffect(() => {
        const savedCart = getDatabaseCart()
        console.log("savedCart", savedCart);
        // for get keys
        const productKey = Object.keys(savedCart)
        console.log("productKey", productKey);

        // for get quantity
        const cartProducts = productKey.map(key => {
            // savedCart[key]
            // key er madhome fakeData takhe all data niye asbo
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = savedCart[key]
            return product

        })
        console.log("quantity", cartProducts);
        setCart(cartProducts)
        // or for get values
        // const productKey = Object.values(savedCart)
    }, [])
    return (
        <div>
            <h1>card items : {cart.length} </h1>
            {
                cart.map(pd => <ReviewItem key={pd.key} product={pd}></ReviewItem>)
            }

        </div>
    );
};

export default Review;