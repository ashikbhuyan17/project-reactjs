import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([])
  // console.log(countries)
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(d => {
        const data = d.slice(0, 20)
        setCountries(data)
      })
      .catch(error => console.log(error))
  }, [])


  const [addCountry, setAddCountry] = useState([])

  const handlerAddCountry = (country) => {
    // ager value copy korar jonno ...c diyechi
    const newCountry = [...addCountry, country]
    setAddCountry(newCountry)
  }


  return (
    <div>
      <Cart cart={addCountry}></Cart>
      {/* state  */}
      <h4>country added :{addCountry.length} </h4>
      {
        countries.map(c => <Country country={c} handlerAddCountry={handlerAddCountry} key={c.alpha3Code}></Country>)

      }

    </div>
  );
}

export default App;

