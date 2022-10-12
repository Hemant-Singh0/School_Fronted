import React from "react";
import "../../Assets/Styles/login.css";
import { Link } from "react-router-dom";

const Login = ({ formValues, handleChange, handleSubmit, error }) => {
  return (
    <>
      <div class="center">
        <h1>Teacher Login</h1>
        <form>
          <div class="txt_field">
            <input
              type="mail"
              // placeholder="Enter Your E-Mail"
              style={{ fontFamily: "Arial" }}
              name="mail"
              value={formValues.mail}
              onChange={handleChange}
            />
            <span></span>
            <label>E-Mail</label>
          </div>
          <p style={{ color: "red" }}>{error.mail}</p>
          <div class="txt_field">
            <input
              type="password"
              // placeholder="Enter Your Password"
              style={{ fontFamily: "Arial" }}
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <span></span>
            <label>Password</label>
          </div>
          <p style={{ color: "red" }}>{error.password}</p>
          <div class="pass">Forgot Password?</div>

          <div>
            <button
              className="btn btn-info btn-block"
              type="submit"
              onClick={handleSubmit}
            >
              SIGN IN
            </button>
            <div class="singup_link">
              {/* <input type="submit" value="Login" /> */}
              Not a member? <Link to="/register">Singup</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
