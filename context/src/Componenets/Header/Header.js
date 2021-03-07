import React, { useState } from 'react';

const Header = (props) => {
    const { count, setCount } = props
    return (
        <div>
            <h1>this is header {count}</h1>
            <button onClick={() => setCount(count + 1)}>increase</button>
        </div>
    );
};

export default Header;