import React, { useContext, useState } from 'react';

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './fire';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';



const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const [user, setUser] = useState({
        displayName: '',
        email: '',
        photo: '',
    })
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    // auth-redirect
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };   // jey components theke asci oi components e pataiya dive 

    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                console.log(user);
                const { displayName, email, photoURL } = user
                const signedInUser = {
                    displayName: displayName,
                    email: email,
                    photo: photoURL,
                }
                setUser(signedInUser)
                setLoggedInUser(signedInUser)
                history.replace(from);
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={googleSignIn}>sign in with google </button>
            <div style={{ margin: "100px" }}>
                Name : {user.displayName} <br />
                Email : {user.email}<br />
                <img src={user.photo} alt="" width="200px" />
            </div>
        </div >
    );
};

export default Login;