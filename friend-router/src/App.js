import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Router exact path="/">
          <Home></Home>
        </Router>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
