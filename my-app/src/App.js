import React from 'react'
import Card from './components/Card'
import Data from './data.json'
function App() {
    console.log(Data);
    // let items = []
    // for (let i = 0; i < Data.length; i++) {
    //     console.log("hi ", items.push(<Card key = {i} titleText={Data[i].title} dec={Data[i].dec} />));

    // }
    return <div>
        {/* <Card titleText="call Mother" dec="this the dec 01" />
        <Card titleText="call Mother02" dec="this the dec 02" /> */}

        {/* use for
            {items} 
        */}

        {
            // map function 
            Data.map((data, index) => {    //index.js:1 Warning: Each child in a list should have a unique "key" prop.
                console.log(data)
                return <Card key={index} titleText={data.title} dec={data.dec} />
            })

        }

    </div>

}
export default App