import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import  firebaseConfig  from './firebase.config'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }


const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory()
  const location = useLocation()
  const { from } = location.state || { from: { pathname: "/" } };
 
    const provider = new firebase.auth.GoogleAuthProvider();

      const handelGoogleSign =() =>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {

          var credential = result.credential;
         var token = credential.accessToken;
          var user = result.user;
          const {email,displayName} = user 
          setLoggedInUser({email, displayName});
          history.replace(from);

        }).catch((error) => {
         
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
        
          var credential = error.credential;
          // ...
        });
      }

    return (
        <div className="d-flex justify-content-center mt-5">
            <button onClick={handelGoogleSign}>Google Sign In</button>
        </div>
    );
};

export default Login;