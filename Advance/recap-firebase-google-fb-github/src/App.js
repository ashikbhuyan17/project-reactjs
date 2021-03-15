import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config"
import { useState } from 'react';
import Particles from './Particles/Particles';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



function App() {
  const [user, setUser] = useState([])
  console.log(user);
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const githubProvider = new firebase.auth.GithubAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();

  const handleGoogle = () => {
    firebase.auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user)

      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });

  }
  const handleFacebook = () => {
    firebase.auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        const user = result.user;
        console.log("fbuser", user);
        setUser(user)
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        console.log(errorMessage);
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;

        // ...
      });
  }

  const handleGithub = () => {
    firebase.auth()
      .signInWithPopup(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user)
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);

      });
  }
  return (
    <div>
      {/* <Particles></Particles> */}
      <button onClick={handleGoogle}>signIn with google</button> <br /> <br />
      <button onClick={handleFacebook}>signIn with Facebook</button> <br /> <br />

      <button onClick={handleGithub}>signIn with Github</button>

      {
        <p>Name : {user.displayName}</p>
      }

    </div>
  );
}

export default App;
