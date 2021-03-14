import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config"
import { useState } from 'react';
firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState([])
  const googleProvider = new firebase.auth.GoogleAuthProvider();

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
  return (
    <div>
      <button onClick={handleGoogle}>signIn with google</button>
      {
        <p>email : {user.email}</p>
      }
    </div>
  );
}

export default App;
