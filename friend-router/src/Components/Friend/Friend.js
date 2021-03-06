import React from 'react';

const Friend = (props) => {
    console.log(props.friend)
    const { name, email } = props.friend
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
        </div>
    );
};

export default Friend;