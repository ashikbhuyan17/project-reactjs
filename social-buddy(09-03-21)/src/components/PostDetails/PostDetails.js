import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {
    const { id } = useParams()

    const [post, setPost] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    //for show comment
    const [comments, setComments] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <div>
            <h4> {id} : <small>{post.title}</small></h4>
            <p>{post.body}</p>

        </div>
    );
};

export default PostDetails;