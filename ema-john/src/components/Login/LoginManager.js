import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'

export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}


// for google signIn

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
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
            return (signedInUser)

        })
}


// for facebook  signIn
export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider)
        .then(result => {

            const credential = result.credential;
            debugger
            const user = result.user;
            console.log("fb user ", user)
            return user
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;

            // ...
        });
}

// signOut
export const handleSignOut = () => {
    return firebase.auth().signOut()
        .then((res) => {
            const signOutUser = {
                isSignedIn: false,
                displayName: '',
                email: '',
                name: '',
                photoURL: '',
            }
            return (signOutUser)
        })
        .catch((error) => {
            // An error hLoginened.
        });
}


// export const createUserWithEmailAndPassword = () => {
//     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//         .then((res) => {
//             const errorMessage = '';
//             const newUserInfo = { ...user }
//             newUserInfo.error = errorMessage
//             newUserInfo.success = true
//             setUser(newUserInfo)
//             console.log(errorMessage)
//             updateUserName(user.name)
//         })
//         .catch((error) => {
//             const errorMessage = error.message;
//             const newUserInfo = { ...user }
//             newUserInfo.error = errorMessage
//             newUserInfo.success = false
//             setUser(newUserInfo)
//             console.log(errorMessage)
//         });
// }


// export const signInWithEmailAndPassword = () => {
//     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//         .then((res) => {
//             // Signed in
//             const errorMessage = '';
//             const newUserInfo = { ...user }
//             newUserInfo.error = errorMessage
//             newUserInfo.success = true
//             setUser(newUserInfo)
//             console.log("sign in user info ", res.user)

//             // context api 
//             setLoggedInUser(newUserInfo)

//             // Redirect to the initial page and use Router Link
//             console.log(history.replace(from));
//             history.replace(from);
//         })
//         .catch((error) => {
//             const errorMessage = error.message;
//             const newUserInfo = { ...user }
//             newUserInfo.error = errorMessage
//             newUserInfo.success = false
//             setUser(newUserInfo)
//             console.log(errorMessage)
//         });
// }

// // update user info   => name ke firebase patanu
// const updateUserName = (name) => {
//     const user = firebase.auth().currentUser;
//     user.updateProfile({
//         displayName: name,
//     }).then(function () {
//         console.log("Update successful.")
//     }).catch(function (error) {
//         console.log(error)
//     });
// }