import React from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo-container">
          <img
            src={process.env.PUBLIC_URL + "/GCWLogo.jpg"}
            alt="Logo"
            className="carbon-logo"
          />
        </div>

        {/* <div className="home-button">
            <Link to="/">Home</Link>
          </div> */}
        <h2>
          <strong>Welcome Back</strong>
        </h2>
        <h4>
            &nbsp;&nbsp; Thank you for getting back. Please login to your &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;account by signing
            in.
        </h4>
        <div className="username-container">
          <TextField
            required
            htmlFor="username"
            id="outlined-basic"
            label="Username"
            variant="outlined"
            className="login-input"
          />
        </div>
        <div className="password-container">
          <TextField
            required
            htmlFor="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            className="login-input"
          />
        </div>
        <div className="remember-forgot-container">
          <div className="remember-me">
            <input className="check" type="checkbox" id="remember-me" />
            <label className="remember-me">Remember me</label>
          </div>
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <div className="button">
          <Button
            sx={{ color: "black", backgroundColor: "yellow" }}
            className="login-button"
          >
            <strong>Login</strong>
          </Button>
        </div>
        <div className="some-h5">
          <h5>
            <strong>Not Signed Up Yet?</strong>
          </h5>
        </div>
        {/* <div className="s-media">
          <BsLinkedin className="linkedin" />
          <FaFacebook className="facebook" />
          <MdEmail className="email" />
        </div> */}
        <div className="tribe-button-div">
          <button className="tribe-button">Join the Tribe</button>
        </div>
        <div className="foot">
          <h5>
            &nbsp;&nbsp;&nbsp; By Continuing You Agree To Our
            <br />
            <small>Terms Of Services Privacy Policy Content Policy</small>
          </h5>
        </div>
      </div>
      <div className="login-image">
        <img
          src={process.env.PUBLIC_URL + "/loginpage.jpg"}
          alt="Logo"
          className="logo"
        />
      </div>
    </div>
  );
};

export default Login;
