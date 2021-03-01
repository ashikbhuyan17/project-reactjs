import React from 'react';
import './AddedPlayer.css'
const Cart = (props) => {
    console.log(props.player);
    const player = props.player
    let totalExpense = 0;
    let selected = player.length;
    for (let i = 0; i < player.length; i++) {
        const element = player[i];
        totalExpense = totalExpense + Number(element.salary)
    }
    return (
        <div >

            <div className="cart">

                <h4>Select Member: {selected} <br />
                    Total Expense : ${totalExpense}</h4>
            </div>
            <div className="cart">
                {player.map((player) => <div className="details-player">
                    Player Name : <span>{player.player_name}</span>  Salary : ${player.salary}
                </div>
                )}
            </div><br />
        </div >
    );
};

export default Cart;