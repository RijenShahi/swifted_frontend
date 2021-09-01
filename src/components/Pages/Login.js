import React, { Component } from "react";
import "../../App.css";
import { TextField, Button, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import loginimg from "../../images/login1.PNG";
// import PersonIcon from '@material-ui/icons/Person';
import axios from "axios";
import swal from "sweetalert";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  Login = (e) => {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(userData);
    axios
      .post("http://localhost:90/swiftedAPI/userProfile/login", userData)
      .then((response) => {
        if (response.data.success === true) {
          swal({
            title: "Sucess",
            test: "User Logined",
            icon: "Success",
          });
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.data));
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <div className="row m-1 loginMain">
          <div className="form formManual">
            <div className="img">
              <div className="icon_class">
                <img src={loginimg} alt="login" height="100%" width="100%" />
              </div>
            </div>

            <div className="col-6 form-group loginForm">
              <div>
                <TextField
                  id="username"
                  className="p-2 fields"
                  type="text"
                  variant="outlined"
                label="Username"
                  value={this.state.username}
                  onChange={(event) => {
                    this.setState({ username: event.target.value });
                  }}
                />
                <TextField
                  id="password"
                  className="p-2 fields"
                  type="text"
                  variant="outlined"
                  label="Password"
                  value={this.state.password}
                  onChange={(event) => {
                    this.setState({ password: event.target.value });
                  }}
                />
              </div>

              <div>
                <Button
                  className="fieldsec m-2"
                  variant="outlined"
                  color="secondary"
                >
                  Forget Password?
                </Button>
              </div>

              <div>
                <Button
                  id="login"
                  className="fieldsec m-2"
                  variant="contained"
                  color="secondary"
                  onClick={this.Login}
                >
                  Log In
                </Button>
              </div>

              <div className="fieldsec m-2">
                <p className="text-center">
                  <Link to="/register" className="text-black-50">
                    <h5>Don't Have An Account? REGISTER NOW!</h5>
                  </Link>
                </p>
              </div>
            </div>

            <div className="icon">
                <Divider variant="middle" />
                <div className="signwith">
                  <br />
                  Know about us at...
                </div>
                <div className="social">
                  <a href="www.facebook.com">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="www.twitter.com">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                  <a href="www.instagram.com">
                    <i className="fab fa-instagram-square"></i>
                  </a>
                  <a href="www.google.com">
                    <i className="fab fa-google"></i>
                  </a>
                </div>
              </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
