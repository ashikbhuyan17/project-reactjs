import React, { useContext } from 'react';

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './fire';
import { useHistory, useLocation } from 'react-router';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                console.log(user);
                history.replace(from);
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={googleSignIn}>sign in with google </button>
        </div >
    );
};

export default Login;