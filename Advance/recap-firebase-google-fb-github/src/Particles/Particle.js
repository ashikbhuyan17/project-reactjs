import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config"
import { useState } from 'react';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



function App() {
  const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useState({
    success: false,
    error: '',
    name: '',
    email: '',
    password: '',
  })
  console.log(user);

  const handleBlur = (e) => {

    let isFieldValid = false
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
    }
    if (e.target.name === "password") {
      isFieldValid = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,}$/.test(e.target.value)

    }

    if (isFieldValid) {
      const newUserInfo = { ...user }
      newUserInfo[e.target.name] = e.target.value
      setUser(newUserInfo)
    }
  }
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const errorMessage = '';
          const newUserInfo = { ...user }
          newUserInfo.error = errorMessage
          newUserInfo.success = true
          setUser(newUserInfo)
          updateUserName(user.name)
        })
        .catch((error) => {
          const errorMessage = error.message;
          const newUserInfo = { ...user }
          newUserInfo.error = errorMessage
          newUserInfo.success = false
          setUser(newUserInfo)
        });

    }
    if (!newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const errorMessage = '';
          const newUserInfo = { ...user }
          newUserInfo.error = errorMessage
          newUserInfo.success = true
          setUser(newUserInfo)
          console.log(errorMessage)
        })
        .catch((error) => {
          const errorMessage = error.message;
          const newUserInfo = { ...user }
          newUserInfo.error = errorMessage
          newUserInfo.success = false
          setUser(newUserInfo)
          console.log(errorMessage)
        });

    }
    e.preventDefault()
  }

  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name,
    }).then(function () {
      console.log("Update successful.")
    }).catch(function (error) {
      console.log(error)
    });
  }

  return (
    <>
      <h1>our own authentication </h1>
      <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser"></input>
      <label htmlFor="newUser">New user signUp</label>
      <form onSubmit={handleSubmit}>
        {
          newUser && <input type="text" name="name" onBlur={handleBlur} onFocus={handleBlur} placeholder="your name" />
        }
        <br /> <br />

        <input type="email" placeholder="email" name="email" onBlur={handleBlur} />
        <input type="password" name="password" onBlur={handleBlur} />
        <input type="submit" value="signIn" onClick={handleSubmit} />
      </form>
      {
        user.success ? <h5>user {newUser ? 'create' : 'logged In'} successfully</h5> : <h5 style={{ color: 'red' }}> {user.error}</h5>
      }

    </>
  );
}

export default App;
