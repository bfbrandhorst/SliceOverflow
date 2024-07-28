import React from "react";
import LoginForm from "../Component/LoginForm";
import SignupForm from "../Component/SignUpForm";

const LoginSignup = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
      <h1>Signup</h1>
      <SignupForm />
    </div>
  );
};

export default LoginSignup;
