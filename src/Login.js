import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { Button } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://i.pinimg.com/originals/30/99/af/3099aff4115ee20f43e3cdad04f59c48.png"
          alt="facebook"
        />
        <h1>FACEBOOK</h1>
      </div>
      <Button type="submit" onClick={signIn}>
        SignIn
      </Button>
    </div>
  );
};

export default Login;
