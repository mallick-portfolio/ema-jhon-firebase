import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../img/google.svg";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const initialValue = {
  email: "",
  password: "",
};

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [userData, setUserData] = useState(initialValue);
  const { email, password } = userData;
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if(user){
    navigate(from, { replace: true });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h1 className="form-title">Login</h1>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <br />
          <input
            value={email}
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <br />
          <input
            value={password}
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <input type="submit" value="Login" />
        {error && <h5 className="error">Your password or email not correct</h5>}
        <h4>
          New to Ema-john? <Link to={"/signup"}>Create New Account</Link>
        </h4>
        <p>or</p>
        <button className="socialLogin">
          <img src={logo} alt="" /> Continue with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
