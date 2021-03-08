import React from 'react';

const Comments = (props) => {
    const { name, email, body } = props.comment
    return (
        <div style={{ border: '2px solid black' }}>
            <p>{name}:{email} <br /> {body} </p>
        </div>
    );
};

export default Comments;