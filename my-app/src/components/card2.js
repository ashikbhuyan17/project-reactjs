import React from 'react';
import ReactDOM from 'react-dom';

const title = "todoList"
const dateOf = new Date()
const dateName = dateOf.getDate()
const monthsName = dateOf.getMonth()
const yearName = dateOf.getFullYear()

// inline css
const headingStyle = {
    color: "white",
    backgroundColor: "purple",
    textAlign: "center",
    padding: "10px",

}

// card.js er modhe ekta functional component(Card) create kora holo 
function Card() {
    return (
        <div className="card">
            <h1 style={headingStyle}>Card !!</h1>   {/* inline css  */}
            <h3 className="workMan">It's working</h3>         {/* external css (src/index.css) */}
            <p className="title">{title}</p>                  {/* external css (public/style.css) */}
            <p>{dateName + "/" + monthsName + "/" + yearName}</p>
        </div>
    )
}



// jodi ey card take jekono jaiga takhe bebohar krte cay tobe ey card take export kore dite hbe 
// or jate onno keu eta use korthe pare 
export default Card   //export means patiye dewa 
