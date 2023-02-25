import {GoogleAuthProvider} from 'firebase/auth'
import {auth} from '../services/firebase/firebase'
import {StyledFirebaseAuth} from "../components/firebase/StyledFirebaseAuth.jsx";
import {useEffect, useState} from "react";
import {redirect, useNavigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
}

export const LoginPageLoader = async () => {
  return null;
}

export const LoginPage = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if(user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Login
      </h1>
      { !user ? <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/> : <></> }
    </div>
  )
}
