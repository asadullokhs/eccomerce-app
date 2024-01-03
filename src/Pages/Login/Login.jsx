import axios from "axios";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.scss";

const Login = () => {
  const navigation = useNavigate();
  const username_rf = useRef();
  const password_rf = useRef();

  const handleLog = async () => {
    try {
      let response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: username_rf.current.value,
        password: password_rf.current.value,
      });
      localStorage.setItem("token", response?.data?.token);
      navigation("/home");
      toast.success("Log in Succesfully !", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      window.location.reload();
    } catch (error) {
      console.log(error.message);
      toast.error("Password or Name is Incorrect!");
    }
  };
  return (
    <div>
      <div className="login">
        <form>
          <h3 className="text-info"> Log In</h3>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <label htmlFor="username">Username:</label>
            <input
              ref={username_rf}
              type="text"
              id="username"
              className="form-control w-75"
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <label htmlFor="pass">Password:</label>
            <input
              ref={password_rf}
              type="password"
              id="pass"
              className="form-control w-75"
            />
          </div>
          <button
            onClick={handleLog}
            type="button"
            className="btn btn-info text-white"
          >
            Log In
          </button>
          <Link to="/sign-up" className="text-info">
            Don't have an account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
