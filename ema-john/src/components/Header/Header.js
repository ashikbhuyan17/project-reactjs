import React from 'react'; //rsc
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/will-not-match">not match</a>
            </nav>
        </div>
    );
};

export default Header;