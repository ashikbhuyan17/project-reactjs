import React, { useState, useEffect } from 'react';
import Information from '../../userData.json';
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile';
import './User.css'

const User = () => {
    const [info, setInfo] = useState([])
    useEffect(() => {
        setInfo(Information)
    }, [])
    // console.log(info[0]);


    // cart state 
    const [income, setIncome] = useState([])
    const handle = (userIncome) => {
        const newUser = [...income, userIncome]
        setIncome(newUser)
    }
    console.log("income ", income);
    return (
        <div className="user-info">

            <div className="profile-container">
                {
                    info.map(pInfo => <Profile pInfo={pInfo} key={pInfo.id} handle={handle} ></Profile>)
                }


            </div>
            <div className="cart-container">
                {/* <h1>income : {income.length}</h1> */}

                <Cart cart={income}></Cart>

            </div>
        </div>
    );
};

export default User;