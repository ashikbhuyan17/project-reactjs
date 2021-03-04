import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';




function App() {
  return (
    <div >
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Router path="/inventory">
            <Inventory />
          </Router>
          {/* main path */}
          <Route path="/">
            <Shop></Shop>
          </Route>
          {/* not matching (404) */}
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
