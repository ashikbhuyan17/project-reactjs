import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Componenets/Header/Header';
import Home from './Componenets/Home/Home';
import Shipment from './Componenets/Shipment/Shipment';

function App() {
  const categoryContext = createContext()

  const [count, setCount] = useState(0)
  console.log(count);
  return (
    <categoryContext.Provider value="laptop">
      <Header count={count} setCount={setCount}></Header>
      <Home count={count}></Home>
      <Shipment></Shipment>
    </ categoryContext.Provider>
  );
}

export default App;
