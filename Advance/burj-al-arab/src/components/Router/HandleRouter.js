import React, { useState } from 'react';
import Book from '../Book/Book';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
export const UserContext = React.createContext();

const HandleRouter = () => {
    const [loggedInUser, setLoggedInUser] = useState({})
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            name : {loggedInUser.displayName}
            <Router>
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    {/* <Home />
                    </Route> */}
                    <Route path="/login">
                        <Login />
                    </Route>
                    <PrivateRoute path="/book/:bedType">
                        <Book />
                    </PrivateRoute>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
};

export default HandleRouter;