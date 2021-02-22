import logo from './logo.svg';
import './App.css';

const hello = {
  color: "white",
  backgroundColor: "purple",
  textAlign: "center",
  padding: "10px",
}

const nameOf = ["kamal", "jamal"]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p >
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p style={{
          color: "white",
          backgroundColor: "purple",
          textAlign: "center",
          padding: "10px",

        }}>my p = {2 + 5}</p>
        <h4 style={hello}>hello world</h4>
        {/* set attribute and data gulu ke props hisebe pataiye divo*/}
        <Person name={nameOf[0]} age="23" food="fuska"></Person>
        <Person name={nameOf[1]} age="55" food="fresh"></Person>

      </header>

    </div>
  );
}


function Person(props) {
  console.log(props);
  return (
    <div style={{ border: ' 1px solid red', padding: '20px', backgroundColor: 'white', color: 'black', marginBottom: '20px' }}>
      <h1>Name : {props.name}</h1>
      <p>age : {props.age}</p>
    </div>
  )
}

export default App;
