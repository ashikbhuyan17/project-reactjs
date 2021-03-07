import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Componenets/Header/Header';
import Home from './Componenets/Home/Home';
import Shipment from './Componenets/Shipment/Shipment';


export const categoryContext = createContext()

function App() {
  const [category, setCategory] = useState(0)
  console.log(category);
  return (
    <categoryContext.Provider value={[category, setCategory]}>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </ categoryContext.Provider>
  );
}

export default App;
