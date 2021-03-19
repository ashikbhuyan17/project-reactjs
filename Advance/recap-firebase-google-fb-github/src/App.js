import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
// firebase.initializeApp(firebaseConfig)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


function App() {
  const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useState(
    {
      isSignedIn: false,
      displayName: '',
      email: '',
      photoURL: '',
      name: '',
      password: '',
      confirm_password: '',
      error: '',
      success: false,
    }
  )
  console.log(user)


  const handleBlur = (event) => {
    let isFieldValid = true;
    if (event.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value)
    }
    if (event.target.name === "password") {
      isFieldValid = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,}$/.test(event.target.value)
    }
    if (event.target.name === "confirm_password") {
      isFieldValid = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,}$/.test(event.target.value)
    }
    if (isFieldValid) {
      const newUserInfo = { ...user }
      newUserInfo[event.target.name] = event.target.value
      setUser(newUserInfo)
    }
  }
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password === user.confirm_password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const errorMessage = '';
          const newUserInfo = { ...user }
          newUserInfo.error = errorMessage
          newUserInfo.success = true
          setUser(newUserInfo)
          console.log(errorMessage)
          updateUserName(user.name)
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
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          // Signed in
          const errorMessage = '';
          const newUserInfo = { ...user }
          newUserInfo.error = errorMessage
          newUserInfo.success = true
          console.log(newUserInfo);
          setUser(newUserInfo)
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
  // update user info   => name ke firebase patanu
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
    <div>

      <h1>our own authentication </h1>

      <Form onSubmit={handleSubmit} className="w-50 m-4">
        {/* {
          newUser && <input type="text" name="name" onBlur={handleBlur} onFocus={handleBlur} placeholder="your name" />
        } */}
        <Form.Group controlId="formBasicEmail">

          {
            newUser && <Form.Control type="name" name='name' onBlur={handleBlur} onFocus={handleBlur} placeholder="your name" required />
          }
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" name='email' onBlur={handleBlur} onFocus={handleBlur} placeholder="your email" required />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="password" name="password" onBlur={handleBlur} placeholder="your password" required />
        </Form.Group>
        {
          newUser && <Form.Group controlId="formBasicEmail">
            <Form.Control type="password" name="confirm_password" onBlur={handleBlur} placeholder="confirm_password" required />
          </Form.Group>
        }

        <Button type="submit" >{newUser ? "Sign up" : "Sign In"}</Button>

        {/* <input type="text" name="email" onBlur={handleBlur} onFocus={handleBlur} placeholder="your email" required /> <br /> <br /> */}
        {/* <input type="password" name="password" onBlur={handleBlur} placeholder="your password" required /> <br /> <br /> */}
        {/* <input type="submit" value={newUser ? "Sign up" : "Sign In"}></input> */}
      </Form> <br /><br />
      <label htmlFor="newUser">{newUser ? 'Have an Account ?' : "Don't Have an Account ?"} </label>
      <button onClick={() => setNewUser(!newUser)} name="newUser">{newUser ? 'signIn' : 'signUp'}</button>
      {/* <label htmlFor="newUser">New user {newUser ? 'signIn' : 'signUp'}</label> */}

      {
        user.success ? <h2 style={{ color: 'green' }}> user {newUser ? 'created' : 'logged In'} successfully</h2> :
          <h5 style={{ color: 'red' }}> {user.error}</h5>
      }


    </div>
  );
}

export default App;


