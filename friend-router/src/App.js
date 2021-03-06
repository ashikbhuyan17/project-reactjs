import React, { useEffect, useState } from 'react';
import './App.css';
import Friend from '../src/Components/Friend/Friend';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [friends, setFriends] = useState([])
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then(res => res.json())
      .then(data => setFriends(data))

  }, [])
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        {
          friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
        }
      </div>

    </Router>

  );
}

export default App;
