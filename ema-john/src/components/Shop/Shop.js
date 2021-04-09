import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    document.title = "Shop"

    // console.log(fakeData);
    // const first10 = fakeData.slice(0, 10)
    // console.log(first10);
    // const first10 = fakeData.slice(0, 20)
    // const [product, setProducts] = useState(first10)
    const [product, setProducts] = useState([])
    const [searchFilter, setSearchFilter] = useState('')


    // using cart
    const [cart, setCart] = useState([])
    console.log(cart);

    useEffect(() => {
        fetch('http://localhost:5000/products?search=' + searchFilter)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [searchFilter])

    // reload hole jate cart value cole na jai or reload korle page er kono pblm hbe na jmn ace tmn takhbe
    useEffect(() => {
        const savedCart = getDatabaseCart()
        console.log(savedCart);
        const productKeys = Object.keys(savedCart)
        fetch('http://localhost:5000/productsByKeys', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productKeys)
        })
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])



    const handleSearch = (event) => {
        setSearchFilter(event.target.value)
    }


    const handleAddProduct = (product) => {
        const sameProduct = cart.find(pd => pd.key === product.key) //quantity set
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== product.key)
            newCart = [...others, sameProduct]
        } else {
            product.quantity = 1;
            newCart = [...cart, product]
        }

        setCart(newCart)
        addToDatabaseCart(product.key, count)

        // const newCart = [...cart, product]
        // const count = sameProduct.length
        // console.log(newCart);
        // setCart(newCart)

        // store data from the database
        // const sameProduct = newCart.filter(pd => pd.key === product.key)
        // const count = sameProduct.length
        // addToDatabaseCart(product.key, count)


    }
    return (
        <div className="twin-container">
            <div className="product-container">
                <input type="text" onBlur={handleSearch} className="product-search" />

                {/* spinner */}
                {
                    product.length == 0 && <p>loading....</p>
                }

                {
                    product.map((p, index) =>
                        <Product showAddToCart={true} product={p} key={index} handleAddProduct={handleAddProduct}> </Product>
                    )
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="main-button">Review Order</button>
                    </Link>
                </Cart>


            </div>


        </div>
    );
};

export default Shop;