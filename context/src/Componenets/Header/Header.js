import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Header = () => {
    const [category, setCount] = useContext(categoryContext)
    return (
        <div>
            <h1>this is header : {category}</h1>
            <button onClick={() => setCount("laptop")}>laptop</button>
            <button onClick={() => setCount("mobile")}>mobile</button>
            <button onClick={() => setCount("camera")}>camera</button>
        </div>
    );
};

export default Header;