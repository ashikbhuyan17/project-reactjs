import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    console.log(props)
    const { id, title, body } = props.post
    return (
        <div>
            <h1>this is post page</h1>
            <h1>this is post : {id}</h1>
            <p>{title}</p>
            <p>{body}</p>
            <button><Link to={`/post/${id}`}>show comment</Link></button>
        </div>
    );
};

export default Post;