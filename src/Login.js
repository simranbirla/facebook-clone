import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
const Login = () => {
  const signIn = () => {
    return true;
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
