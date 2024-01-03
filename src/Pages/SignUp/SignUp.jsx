import axios from "axios";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./SignUp.scss";

const SignUp = () => {
  const navigation = useNavigate();
  const email_rf = useRef();
  const userName_rf = useRef();
  const password_rf = useRef();
  const firstName_rf = useRef();
  const lastName_rf = useRef();

  const handleAddUser = async () => {
    try {
      let newUser = {
        email: email_rf.current.value,
        password: password_rf.current.value,
        userName: userName_rf.current.value,
        name: {
          lastName: lastName_rf.current.value,
          firstName: firstName_rf.current.value,
        },
      };
      await axios.post("https://fakestoreapi.com/users", newUser);
      toast.success("Registered!");
      navigation("/log-in");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div className="sign-up">
        <form>
          <h3 className="text-info">Sign Up</h3>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <label htmlFor="email">Email:</label>
            <input
              ref={email_rf}
              type="email"
              id="email"
              className="form-control w-75"
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <label htmlFor="username">Username:</label>
            <input
              ref={userName_rf}
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
          <div className="d-flex justify-content-between align-items-center mb-3">
            <label htmlFor="firstName">First Name:</label>
            <input
              ref={firstName_rf}
              type="text"
              id="firstName"
              className="form-control w-75"
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <label htmlFor="lastName">Last Name:</label>
            <input
              ref={lastName_rf}
              type="text"
              id="lastName"
              className="form-control w-75"
            />
          </div>
          <button
            type="button"
            onClick={handleAddUser}
            className="btn btn-info text-white"
          >
            Register
          </button>
          <Link to="/log-in" className="text-info">
            Already have account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
