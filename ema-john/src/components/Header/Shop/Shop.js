import React, { useState } from 'react';
import fakeData from '../../../fakeData';
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
                <ul>
                    {
                        product.map(p => <li>{p.category} {p.img}</li>)
                    }
                </ul>
            </div>
            <div className="card-container">
                <h4>this is card</h4>
            </div>


        </div>
    );
};

export default Shop;