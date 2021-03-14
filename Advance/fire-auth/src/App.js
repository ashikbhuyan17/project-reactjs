import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { useState } from 'react';
// firebase.initializeApp(firebaseConfig)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


function App() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const [user, setUser] = useState(
    {
      isSignedIn: false,
      displayName: '',
      email: '',
      name: '',
      error: '',
      password: '',
      photoURL: '',
    }
  )
  console.log(user)
  const handleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
      .then(res => {
        console.log(res)
        console.log(res.user)
        const { displayName, email, photoURL } = res.user
        console.log(displayName, email, photoURL)

        const signedInUser = {
          isSignedIn: true,
          displayName: displayName,
          email: email,
          photoURL: photoURL,
        }
        setUser(signedInUser)

      })
  }
  const handleSignOut = () => {
    firebase.auth().signOut()
      .then((res) => {
        const signOutUser = {
          isSignedIn: false,
          displayName: '',
          email: '',
          name: '',
          photoURL: '',
        }
        setUser(signOutUser)
      })
      .catch((error) => {
        // An error happened.
      });
  }
  console.log(user)

  const handleBlur = (event) => {
    // console.log(event.target.value, event.target.name)
    // validation 
    let isFieldValid = true;
    if (event.target.name === "email") {
      // const isEmailValidation = /\S+@\S+\.\S+/.test(event.target.value)
      // console.log(isEmailValidation)
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value)    // return the truthy or falsy value
      console.log(isFieldValid)

    }
    if (event.target.name === "password") {
      // const isPasswordValid = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,}$/.test(event.target.value)
      // console.log(isPasswordValid)
      isFieldValid = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,}$/.test(event.target.value)
      console.log(isFieldValid)

    }
    if (isFieldValid) {
      const newUserInfo = { ...user }
      newUserInfo[event.target.name] = event.target.value
      setUser(newUserInfo)
    }
  }
  const handleSubmit = (e) => {
    if (user.email && user.password) {
      // console.log("submitting done")
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const errorMessage = '';
          const newUserInfo = { ...user }
          newUserInfo.error = errorMessage
          setUser(newUserInfo)
          console.log(errorMessage)
        })
        .catch((error) => {
          const errorMessage = error.message;
          const newUserInfo = { ...user }
          newUserInfo.error = errorMessage
          setUser(newUserInfo)
          console.log(errorMessage)
        });

    }
    e.preventDefault()    // don't reload submit page
  }
  return (
    <div className="App">
      {
        user.isSignedIn ? <button onClick={handleSignOut}>sign out</button> :
          <button onClick={handleSignIn}>sign in</button>
      }

      {
        user.isSignedIn && <div>
          <h1>{user.displayName}</h1>
          <h2>{user.email}</h2>
          <img src={user.photoURL} alt="" width='100px' />
        </div>
      }

      <h1>our own authentication </h1>
      {/* <p>email : {user.email}</p>
      <p>name : {user.name}</p> */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onBlur={handleBlur} onFocus={handleBlur} placeholder="your name" /> <br /> <br />
        <input type="text" name="email" onBlur={handleBlur} onFocus={handleBlur} placeholder="your email" required /> <br /> <br />
        <input type="password" name="password" onBlur={handleBlur} placeholder="your password" required /> <br /> <br />
        <input type="submit" onSubmit={handleSubmit} value="submit"></input>
      </form>
      <h5 style={{ color: 'red' }}> {user.error}</h5>
    </div>
  );
}

export default App;
