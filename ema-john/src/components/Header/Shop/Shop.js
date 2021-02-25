import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // console.log(fakeData);
    // const first10 = fakeData.slice(0, 10)
    // console.log(first10);
    const first10 = fakeData.slice(0, 10)
    const [product, setProducts] = useState(first10)
    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    product.map(p => <Product cat={p.category} i={p.img}> </Product>)
                }

            </div>
            <div className="card-container">
                <h4>this is card</h4>
            </div>


        </div>
    );
};

export default Shop;