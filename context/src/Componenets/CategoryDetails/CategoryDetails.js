import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const CategoryDetails = () => {
    const category = useContext(categoryContext)
    return (
        <div>
            <h1>this is category details</h1>
            <p>selected category {category}</p>
        </div>
    );
};

export default CategoryDetails;