import React, { useContext, useState } from 'react';
import { categoryContext } from '../../App';

const Header = () => {
    const [category, setCount] = useContext(categoryContext)
    return (
        <div>
            <h1>this is header {category}</h1>
            <button onClick={() => setCount(category + 1)}>increase</button>
        </div>
    );
};

export default Header;