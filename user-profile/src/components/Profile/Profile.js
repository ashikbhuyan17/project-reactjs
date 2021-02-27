import React from 'react';
import './Profile.css'

const Profile = (props) => {
    console.log(props.pInfo);
    const { fullName, email, phone, income, img } = props.pInfo

    return (
        <div className="user-profile">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="profile-info">
                <h3>FullName : {fullName}</h3>
                <h5>Number : {phone}</h5>
                <h5>Income : {income}</h5>
                <h5>Email : {email}</h5>
                <button className="main-button">view Profile</button>
            </div>

        </div>
    );
};

export default Profile;