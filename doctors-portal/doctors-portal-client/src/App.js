import React from "react"
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AllPatients from "./components/AllPatients/AllPatients";
import AddDoctor from "./components/Dashboard/AddDoctor/AddDoctor";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/appointment">
          <Appointment />
        </Route>
        <Route path="/dashboard/appointment">
          <Dashboard />
        </Route>
        <Route path="/dashboard/allpatients">
          <AllPatients />
        </Route>
        <Route path="/addDoctor">
          <AddDoctor />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
