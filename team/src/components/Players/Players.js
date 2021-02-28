import React from 'react';
import './Players.css'
// use font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Players = (props) => {
    // console.log(props.data);
    const { jersey_number, player_name, email, salary, img } = props.data
    // console.log(email, salary, player_name);
    const handleAddPlayer = props.handleAddPlayer
    return (
        <div className="player-profile">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h1>{player_name}</h1>
                <h3>{email}</h3>
                <h3>{jersey_number}</h3>
                <h3>{salary}</h3>
                <button onClick={() => handleAddPlayer(props.data)} className="main-button"><small><FontAwesomeIcon icon={faUserPlus} /></small> click me</button>
            </div>

        </div>
    );
};

export default Players;