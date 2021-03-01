import React from 'react';
import './Players.css'
// use font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Players = (props) => {
    const { player_name, email, salary, img } = props.data
    const handleAddPlayer = props.handleAddPlayer
    return (
        <div className="player-profile">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="personal-info">
                <h1>Name : {player_name}</h1>
                <h3>Email : {email}</h3>
                <h3>Salary : ${salary}</h3>
                <button onClick={() => handleAddPlayer(props.data)} className="main-button"><small><FontAwesomeIcon icon={faUserPlus} /></small>Add Player</button>
            </div>

        </div>
    );
};

export default Players;