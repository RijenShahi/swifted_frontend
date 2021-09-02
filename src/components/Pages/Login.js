import React, { Component } from "react";
import "../../App.css";
import { TextField, Button, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import loginimg from "../../images/login1.PNG";
// import PersonIcon from '@material-ui/icons/Person';
import axios from "axios";
import swal from "sweetalert";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
  state = {
    username: "",
    password: "",
    email:""
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

  verifyAddress = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:90/swiftedAPI/userProfile/verifyEmail", this.state)
        .then((response) => {
            if (response.data.success == true) {
                localStorage.setItem('email', this.state.email)
                toast.success(response.data.message)
            }
            else {
                toast.error(response.data.message)
            }
        })
        .catch((err) => {
            console.log(err)
        })
  }

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
                  type="password"
                  variant="outlined"
                  label="Password"
                  value={this.state.password}
                  onChange={(event) => {
                    this.setState({ password: event.target.value });
                  }}
                />
              </div>

              

              <div class="modal fade" id="forgotPassword" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Enter Email Address</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form method="post" onSubmit={this.verifyAddress}>
                                <div className="form-group">
                                    <label>  Enter your email address </label>
                                    <input type="email" className="form-control" name="email" value={this.state.email} required onChange={(e) => { this.setState({"email":e.target.value}) }} />
 
                                </div>
 
                                <div className="text-center">
                                    <button className="btn btn-primary w-50" type="submit" name="forgot"> Verify </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
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

              <div>
               
                <Button
                  className="fieldsec m-2"
                  variant="outlined"
                  color="secondary"
                  data-target="#forgotPassword"
                   data-toggle="modal"
                >
                  Forget Password?
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
