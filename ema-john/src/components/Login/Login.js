import React, { useContext } from 'react'
import { useState } from 'react';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';

function Login() {
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState(
        {
            isSignedIn: false,
            displayName: '',
            email: '',
            photoURL: '',
            name: '',
            password: '',
            error: '',
            success: false,
        }
    )

    initializeLoginFramework()

    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setUser(res)
                setLoggedInUser(res)
                history.replace(from);

            })
    }
    const FbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                setUser(res)
                setLoggedInUser(res)
                history.replace(from)
            })

    }
    const signOut = () => {
        handleSignOut()
            .then(res => {
                setUser(res)
                setLoggedInUser(res)
            })
    }
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
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    setUser(res)
                    setLoggedInUser(res)
                    history.replace(from)
                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    setUser(res)
                    setLoggedInUser(res)
                    history.replace(from)
                })
        }
        e.preventDefault()    // don't reload submit page
    }

    return (
        <div style={{ textAlign: 'center' }}>
            {
                user.isSignedIn ? <button onClick={signOut}>sign out</button> :
                    <button onClick={googleSignIn}>sign in</button>
            } <br /><br />

            {/* facebook sign in */}
            <button onClick={FbSignIn}>login using facebook</button>

            {
                user.isSignedIn && <div>
                    <h1>{user.displayName}</h1>
                    <h2>{user.email}</h2>
                    <img src={user.photoURL} alt="" width='100px' />
                </div>
            }

            <h1>our own authentication </h1>
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser"></input>
            <label htmlFor="newUser">New user signUp</label>
            {/* <p>email : {user.email}</p>
      <p>name : {user.name}</p> */}
            <form onSubmit={handleSubmit}>
                {
                    newUser && <input type="text" name="name" onBlur={handleBlur} onFocus={handleBlur} placeholder="your name" />
                }<br /> <br />
                <input type="text" name="email" onBlur={handleBlur} onFocus={handleBlur} placeholder="your email" required /> <br /> <br />
                <input type="password" name="password" onBlur={handleBlur} placeholder="your password" required /> <br /> <br />
                {/* <input type="submit" onSubmit={handleSubmit} value="submit"></input> */}
                <input type="submit" onSubmit={handleSubmit} value={newUser ? "Sign up" : "Sign In"}></input>
            </form>

            {
                user.success ? <h5 style={{ color: 'green' }}> user {newUser ? 'created' : 'logged In'} successfully</h5> :
                    <h5 style={{ color: 'red' }}> {user.error}</h5>
            }
        </div>
    );
}

export default Login;
