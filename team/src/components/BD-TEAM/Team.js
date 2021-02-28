import React, { useEffect, useState } from 'react';
import teamData from '../../data.json'
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Players from '../Players/Players';
import './Team.css'


const Team = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        setData(teamData)
    }, [])


    // handleAddPlayer
    const [player, setPlayer] = useState([])
    const handleAddPlayer = (teammate) => {
        const newPlayer = [...player, teammate]
        setPlayer(newPlayer)
    }
    // console.log("player", player);

    return (
        <div>
            <Header></Header>
            <div className="cricket-container">
                <div className="player-container">
                    {
                        data.map(data => <Players data={data} handleAddPlayer={handleAddPlayer} key={data.jersey_number}></Players>)
                    }
                </div>
                <div className="players-cart">
                    <Cart player={player}></Cart>
                    <h1>this is cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Team;