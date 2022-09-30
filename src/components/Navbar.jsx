import React from "react";
import { auth } from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import { AiFillMessage } from "react-icons/ai";
import LogOut from "./LogOut";

const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className={style.nav}>
      <h1
        style={{ display: "flex", alignItems: "center" }}
        className={style.heading}
      >
        <AiFillMessage />
        <h1 style={{ marginLeft: "8px" }}>Chat App</h1>
      </h1>

      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
