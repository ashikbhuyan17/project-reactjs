import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart'
import happyImage from '../../images/giphy.gif'

const Review = () => {
    // local storage takhe data gulu nibo
    const [cart, setCart] = useState([])

    // show image
    const [orderPlaced, setOrderPlaced] = useState(false)

    // reset 
    const handlePlaceOrder = () => {
        setCart([])
        setOrderPlaced(true)
        processOrder()
    }

    // remove item
    const removeProduct = (productKey) => {
        console.log('remove', productKey);
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }

    // store key,quantity from database
    // reload hole jate cart value cole na jai or reload korle page er kono pblm hbe na jmn ace tmn takhbe

    useEffect(() => {
        const savedCart = getDatabaseCart()
        // console.log("savedCart", savedCart);
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

    // show image
    let thankYou;
    if (orderPlaced) {
        thankYou = <img src={happyImage} alt="" />
    }

    return (
        <div className="twin-container">

            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem key={pd.key} removeProduct={removeProduct} product={pd}></ReviewItem>)
                }

                {/*// show image  */}
                {thankYou}

            </div>
            <div className="cart-container">
                <Cart cart={cart} >
                    <button onClick={handlePlaceOrder} className="main-button">
                        place order
                    </button>
                </Cart>

            </div>
        </div>
    );
};

export default Review;