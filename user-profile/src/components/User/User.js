import React, { useState, useEffect } from 'react';
import Information from '../../userData.json';
import Profile from '../Profile/Profile';
import './User.css'

const User = () => {
    const [info, setInfo] = useState([])
    useEffect(() => {
        setInfo(Information)
    }, [])
    // console.log(info[0]);
    return (
        <div className="user-info">
            <div className="profile-container">

                {
                    info.map(pInfo => <Profile pInfo={pInfo} key={pInfo.id} ></Profile>)
                }


            </div>
            <div className="cart-container">
                <h5>hi all</h5>
            </div>
        </div>
    );
};

export default User;