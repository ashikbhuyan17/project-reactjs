import React, { createContext, useState } from 'react';
import './App.css';


import HandleRouter from '../src/components/Router/HandleRouter'

function App() {
  // const [loggedInUser, setLoggedInUser] = useState({})

  return (
    // <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    //   name : {loggedInUser.displayName}
    //   <Router>
    //     <Header />
    //     <Switch>
    //       <Route path="/home">
    //         <Home />
    //       </Route>
    //       <Route path="/login">
    //         <Login />
    //       </Route>
    //       <PrivateRoute path="/book/:bedType">
    //         <Book />
    //       </PrivateRoute>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </Router>
    // </UserContext.Provider>

    <HandleRouter />
  );
}

export default App;
