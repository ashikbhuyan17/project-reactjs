import React from 'react'
import Card from './components/Card'
import Data from './data.json'
function App() {
    console.log(Data);
    let items = []
    for (let i = 0; i < Data.length; i++) {
        console.log("hi ", items.push(<Card titleText={Data[i].title} dec={Data[i].dec} />));

    }
    return <div>
        {/* <Card titleText="call Mother" dec="this the dec 01" />
        <Card titleText="call Mother02" dec="this the dec 02" /> */}
       

        {items}

        {/* {
            // map function 
            Data.map(data => {
                console.log(data)
                return <Card titleText={data.title} dec={data.dec} />
            })

        } */}

    </div>

}
export default App