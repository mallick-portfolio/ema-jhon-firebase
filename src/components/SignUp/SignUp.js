import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/google.svg";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const initialValue = {
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [userData, setUserData] = useState(initialValue);
  const { email, password, confirmPassword } = userData;
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate()

  if(user){
    navigate('/shop');
  }

  

  const handleSumit = (e) => {
    e.preventDefault();
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regEmail.test(email)){
      alert("your email is not correct")
      return
    }
    if(!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)){
      alert('length 8 carac, at least a symbol, upper and lower case letters and a number')
      return;
    }
    if(password !== confirmPassword){
      alert("your password dosen't match")
      return
    }


    createUserWithEmailAndPassword(email, password)
  };

  return (
    <form onSubmit={handleSumit} className="login-form">
      <div>
        <h1 className="form-title">Sign Up</h1>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <br />
          <input
            value={confirmPassword}
            onChange={handleChange}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
          />
        </div>
        <input type="submit" value="SignUp" />
        {error && <p>{error}</p>}
        {loading && <p>...Loading</p>}
        <h4>
          Already have an account? <Link to={"/login"}>Login</Link>
        </h4>
        <p>or</p>
        <button className="socialLogin">
          <img src={logo} alt="" /> Continue with Google
        </button>
      </div>
    </form>
  );
};

export default SignUp;
