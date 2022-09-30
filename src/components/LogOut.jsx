import React from "react";
import { auth } from "../Firebase";

const style = {
  button: `bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded`,
};

const LogOut = () => {
  const signOut = (auth) => {
    signOut(auth);
  };
  return (
    <button onClick={() => auth.signOut()} className={style.button}>
      Çıkış Yap
    </button>
  );
};

export default LogOut;
