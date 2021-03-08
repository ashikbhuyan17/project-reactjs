import React from 'react';
import { useState, useEffect } from 'react';
import Post from '../Posts/Post';

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts"
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    console.log(posts)
    return (
        <div>
            <h3>this is home page</h3>
            {
                posts.map(p => <Post post={p}></Post>)
            }
        </div>
    );
};

export default Home;