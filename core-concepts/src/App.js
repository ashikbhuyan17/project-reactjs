import logo from './logo.svg';
import './App.css';

const hello = {
  color: "white",
  backgroundColor: "purple",
  textAlign: "center",
  padding: "10px",
}
// object declaration
const productsStyle = {
  border: '1px solid red',
  borderRadius: '5px',
  width: '300px',
  float: 'right',
  backgroundColor: 'rgb(93, 155, 134)',
  height: '300px',
  margin: '10px'
}
// array declaration
const productsStyle2 = {
  border: '1px solid red',
  borderRadius: '5px',
  width: '300px',
  float: 'right',
  backgroundColor: 'green',
  height: '300px',
  margin: '10px'
}



function App() {
  const nameOf = ["kamal", "jamal"]

  const productList = [
    { pName: 'p1', pPrice: 100 },
    { pName: 'p2', pPrice: 300 },
    { pName: 'p3', pPrice: 4000 },
    { pName: 'p4', pPrice: 60 },
  ]
  const productsName = productList.map(product => product.pName)
  console.log(productsName);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* set attribute and data gulu ke props hisebe pataiye divo*/}
        <Person name={nameOf[0]} age="23" food="fuska"></Person>
        <Person name={nameOf[1]} age="55" food="fresh"></Person>

        {/* products in array */}
        <Products product={productList[0]} > </Products>
        <Products product={productList[1]} > </Products>
        <Products product={productList[2]} > </Products>
        <Products product={productList[3]} > </Products>
      </header>

    </div >
  );
}




function Products(props) {
  const { pName, pPrice } = props.product
  console.log(pName, pPrice);
  return (
    <div style={productsStyle}>
      <div>
        <h4>products Name : {pName}</h4>
        <h4>Price : {pPrice}</h4>
      </div>
    </div>
  )
}


function Person(props) {
  // console.log(props);
  return (
    <div style={{ border: ' 1px solid red', padding: '20px', backgroundColor: 'white', color: 'black', marginBottom: '20px' }}>
      <h1>Name : {props.name}</h1>
      <p>age : {props.age}</p>
    </div>
  )
}



export default App;
