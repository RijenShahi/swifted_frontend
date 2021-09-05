import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import profile from "../../images/profile.png";
import emptycart from "../../images/empty.png";
import axios from "axios";
import swal from "sweetalert";
import { render } from "@testing-library/react";

class EditProfile extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    id: this.props.match.params.id,
    config: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  };

  EditProfile = (e) => {
    e.preventDefault();
    axios
      .put(
        "http://localhost:90/swiftedAPI/userProfile/updateProfile",
        this.state,
        this.state.config
      )
      .then((response) => {
        if (response.data.success === true) {
            swal({
              title: "Profile Edited Successfully.",
              test: "Profile edited successfully.",
              icon: "Success",
            });
        this.props.history.push("/userprofile");
        this.componentDidMount();
        }  
    })
      .catch((err) => {
        console.log(err.response);
      });
      swal({
        title: "Profile Edit Failed!",
        text: "Fill all the empty fields.",
        icon: "Failure",
      });
  };
  render() {
    return (
      <>
        <div className="container emp-profile text-center defaultMargin">
          <form method="">
            <div className="row ">
                <div className="col-3"></div> 
              <div className="col-6 formManual">
                <img src={profile} alt="profile" />
              
                  <h2>
                    <u>Edit-Profile:</u>
                  </h2>
                    <TextField
                      id="firstname"
                      className="p-2"
                      type="text"
                      variant="outlined"
                      label="First Name"
                      fullWidth
                      value={this.state.firstname}
                      onChange={(event) => {
                        this.setState({ firstname: event.target.value });
                      }}
                    />

                    <TextField
                      id="lastname"
                      className="p-2"
                      type="text"
                      variant="outlined"
                      label="Last Name"
                      fullWidth
                      value={this.state.lastname}
                      onChange={(event) => {
                        this.setState({ lastname: event.target.value });
                      }}
                    />

                  <TextField
                    id="email"
                    className="p-2"
                    type="text"
                    variant="outlined"
                    label="Email"
                    fullWidth
                    value={this.state.email}
                    onChange={(event) => {
                      this.setState({ email: event.target.value });
                    }}
                  />

                    <TextField
                      id="phone"
                      className="p-2"
                      type="text"
                      variant="outlined"
                      label="Phone"
                      halfWidth
                      value={this.state.phone}
                      onChange={(event) => {
                        this.setState({ phone: event.target.value });
                      }}
                    />
                    <TextField
                      id="address"
                      className="p-2"
                      type="text"
                      variant="outlined"
                      label="Address"
                      halfWidth
                      value={this.state.address}
                      onChange={(event) => {
                        this.setState({ address: event.target.value });
                      }}
                    />
                    <div>
                  <Button
                  className="m-2 p-2"
                    variant="contained"
                    color="primary"
                    onClick={this.EditProfile}
                  >
                    Save
                  </Button>
                </div>
            </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default EditProfile;
