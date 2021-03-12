import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
firebase.initializeApp(firebaseConfig)


function App() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
      .then(res => {
        console.log(res)
        console.log(res.user)
        const { displayName, email, photoURL } = res.user
        console.log(displayName, email, photoURL)

      })
  }
  return (
    <div className="App">
      <button onClick={handleSignIn}>sign in</button>
    </div>
  );
}

export default App;
