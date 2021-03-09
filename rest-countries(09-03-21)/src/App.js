import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Users from './components/Users';
import CountryDetails from './components/CountryDetails/CountryDetails';



function App() {
  return (

    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/users">
          <Users></Users>
        </Route>
        <Route path="/country/:name">
          <CountryDetails />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
