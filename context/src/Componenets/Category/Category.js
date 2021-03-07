import React, { useContext, useEffect, useState } from 'react';
import { categoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
const allProduct = [
    { name: "nokia", category: "mobile" }, { name: "iphone", category: "mobile" },
    { name: "dcl", category: "laptop" }, { name: "Hp", category: "laptop" },
    { name: "nokia", category: "camera" }, { name: "canon", category: "camera" },
]

const Category = () => {
    const [category] = useContext(categoryContext)
    const [product, setProduct] = useState([])
    useEffect(() => {
        const matchedProduct = allProduct.filter(mp => mp.category.toString().toLowerCase() === category.toString().toLowerCase())
        setProduct(matchedProduct)
    }, [category])   //[category] => dependency dewa hoice and jkn category change hbe tkn eta call dewa hbe
    console.log(product);
    return (
        <div>
            <h1>this is category</h1>
            {
                product.map(product => <CategoryDetails product={product}></CategoryDetails>)
            }
        </div>
    );
};

export default Category;