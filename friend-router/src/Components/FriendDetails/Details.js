
import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';

const Details = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriends(data))

    }, [])
    console.log(friends)

    const { friendId } = useParams()
    console.log(friendId)
    const { name, email, phone, username, website } = friends


    return (
        <div>
            <h1>hi friend {friendId}</h1>
            <p>Name : {name} ({username})</p>
            <p>email : {email}</p>
            <p>phone : {phone}</p>
            <p>website : {website}</p>

        </div>
    );
};

export default Details;