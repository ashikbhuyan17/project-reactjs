import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // console.log(fakeData);
    // const first10 = fakeData.slice(0, 10)
    // console.log(first10);
    const first10 = fakeData.slice(0, 10)
    const [product, setProducts] = useState(first10)
    // using cart
    const [cart, setCart] = useState([])
    console.log(cart);
    const handleAddProduct = (product) => {
        const newCart = [...cart, product]
        console.log(newCart);
        setCart(newCart)
    }
    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    product.map((p, index) =>
                        <Product showAddToCart={true} product={p} key={index} handleAddProduct={handleAddProduct}> </Product>
                    )
                }

            </div>
            <div className="cart-container">
                {/* <h4>this is cart</h4>
                <h6>order summary {cart.length} </h6> */}
                <Cart cart={cart}></Cart>
            </div>


        </div>
    );
};

export default Shop;