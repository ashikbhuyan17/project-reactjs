import React from 'react';
import { useState, useEffect } from 'react';

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts"
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h3>this is home page</h3>
        </div>
    );
};

export default Home;