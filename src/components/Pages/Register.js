import React, { Component } from "react";
import "../../App.css";
import { TextField, Button, Divider, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
//import PersonAddIcon from '@material-ui/icons/PersonAdd';
import loginimg from "../../images/signup.png";
import axios from "axios";
import swal from "sweetalert";

class Register extends Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    userType: "Customer",
  };
  Register = (e) => {
    e.preventDefault();
    const userData = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      password: this.state.password,
      userType: this.state.userType,
    };
    console.log(userData);
    axios
      .post("http://localhost:90/swiftedAPI/userProfile/register", userData)
      .then((response) => {
        if (response.data.success === true) {
          swal({
            title: "Success",
            text: "User Added",
            icon: "Success",
          });
          window.location.href = "/login";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
      <div>
        <div className="row m-1 registerMain">
          <div className="col-6 form formManual">
            <div className="img">
              <div className="icon_class">
                <img src={loginimg} alt="register" height="100%" width="100%" />
              </div>
            </div>

            <div className="form-group registerForm">
              <div>
                <TextField
                  id="firstname"
                  className="p-2 fieldsReg"
                  type="text"
                  variant="outlined"
                  label="First Name"
                  value={this.state.firstname}
                  onChange={(event) => {
                    this.setState({ firstname: event.target.value });
                  }}
                />
                <TextField
                  id="lastname"
                  className="p-2 fieldsReg"
                  type="text"
                  variant="outlined"
                  label="Last Name"
                  value={this.state.lastname}
                  onChange={(event) => {
                    this.setState({ lastname: event.target.value });
                  }}
                />
                <TextField
                  id="username"
                  className="p-2 fieldsReg"
                  type="text"
                  variant="outlined"
                  label="Username"
                  value={this.state.username}
                  onChange={(event) => {
                    this.setState({ username: event.target.value });
                  }}
                />
                <TextField
                  id="email"
                  className="p-2 fieldsReg"
                  type="text"
                  variant="outlined"
                  label="Email"
                  value={this.state.email}
                  onChange={(event) => {
                    this.setState({ email: event.target.value });
                  }}
                />

                <TextField
                  id="phone"
                  className="p-2 fieldsReg"
                  type="text"
                  variant="outlined"
                  label="Phone"
                  value={this.state.phone}
                  onChange={(event) => {
                    this.setState({ phone: event.target.value });
                  }}
                />
                <TextField
                  id="address"
                  className="p-2 fieldsReg"
                  type="text"
                  variant="outlined"
                  label="Address"
                  value={this.state.address}
                  onChange={(event) => {
                    this.setState({ address: event.target.value });
                  }}
                />

                <TextField
                  id="password"
                  className="p-2 fieldsReg"
                  type="password"
                  variant="outlined"
                  label="Password"
                  value={this.state.password}
                  onChange={(event) => {
                    this.setState({ password: event.target.value });
                  }}
                />
              </div>
              <div>
                <Link to="/login" className="text-black-50">
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="fieldsecReg m-2"
                  >
                    Already have an account?
                  </Button>
                </Link>
              </div>
              <div>
                <Button
                  id="register"
                  className="fieldsecReg m-2"
                  variant="contained"
                  color="secondary"
                  onClick={this.Register}
                >
                  Create Account
                </Button>
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
          {/* 
                    <div className="col-6 p-2">
                        <TextField id="userType" type="text" variant="outlined" label="User Type" fullWidth
                            value={this.state.userType} onChange={(event) => { this.setState({ userType: event.target.value }) }}
                        />
                    </div> */}
        </div>
        </div>
      </>
    );
  }
}
export default Register;
