import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase";

const firebaseApp = firebase.initializeApp(firebaseConfig);

class LoginGoogle extends Component {

    render() {

        const { user, signOut, signInWithGoogle } = this.props;
        console.log("signInWithGoogle:", signInWithGoogle)
        return(
            <div>
                {
                    user ? <button onClick={signOut}>Sign Out</button>
                        : <button onClick={signInWithGoogle}>Sign in with Google</button>
                }
            </div>
        )
    }
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(LoginGoogle);