import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import { auth } from "../Firebase";
import GoogleButton from "react-google-button";
const style = {
  wrapper: `flex justify-center`,
};

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const SignIn = () => {
  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={googleSignIn} />
    </div>
  );
};

export default SignIn;
