import React from 'react';
import { Link, useHistory } from 'react-router-dom';
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

    // for button
    let history = useHistory();
    const handleClick = (friendId) => {
        const url = `/details/${friendId}`
        history.push(url);
    }

    return (
        <div style={friendStyle}>
            <h4>Name : {name}</h4>
            <p>email : {email}</p>

            <Link to={`/details/${id}`}> Details {id}  </Link>
            <br /> <br />
            {/* for button */}
            <button type="button" onClick={() => handleClick(id)}>
                Go home
            </button>


        </div>
    );
};

export default Friend;