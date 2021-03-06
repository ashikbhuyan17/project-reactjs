import React from 'react';
import { Link } from 'react-router-dom';
import Details from '../FriendDetails/Details';

const Friend = (props) => {
    console.log(props.friend)
    const { name, email, id } = props.friend
    const friendStyle = {
        border: '1px solid red',
        borderRadius: '10px',
        margin: '10px',
        padding: '15px'
    }
    return (
        <div style={friendStyle}>
            <h4>Name : {name}</h4>
            <p>email : {email}</p>

            <Link to={`/details/${id}`}> Details {id}  </Link>
            <br />
            {/* <button>show details</button> */}


        </div>
    );
};

export default Friend;