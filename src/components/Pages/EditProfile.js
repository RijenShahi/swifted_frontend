import React, { Component }from 'react'
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import profile from "../../images/profile.png";
import emptycart from "../../images/empty.png";
import axios from 'axios';
import swal from 'sweetalert';
import { render } from '@testing-library/react';


class EditProfile extends Component {
    
    state = {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        id: this.props.match.params.id,
        config:{
            "headers":{
                "authorization":`Bearer ${localStorage.getItem("token")}`
            }
        }
    }

    EditProfile = (e) => {
        e.preventDefault();
        axios.put("http://localhost:90/swiftedAPI/userProfile/updateProfile" ,this.state,this.state.config)
        .then((response) => {
            
            this.props.history.push("/userprofile")
            this.componentDidMount()

        })
        .catch((err) => {
            console.log(err.response)
        })
    }
    render(){
        return (
            <>
                <div className="container emp-profile text-center">
                    <form method="">
                        <div className="row">
                            <div className="col-md-1">
                                <img src={profile} alt="profile" />
                            </div>

                            <div className="col-md-6">
                                <div className="profile-head">
                                    <h2>User Profile</h2>
                                    <h4>Customer</h4>
                                </div>
                            </div>
                            <div className="form formManual">
                                <div className="row m-2">
                                    <div className="col-6 p-2">
                                        <TextField id="firstname" type="text" variant="outlined" label="First Name" fullWidth 
                                         value={this.state.firstname} onChange={(event) => {this.setState({ firstname:event.target.value }) } }
                                        />
                                    </div>

                                    <div className="col-6 p-2">
                                        <TextField id="lastname" type="text" variant="outlined" label="Last Name" fullWidth 
                                        value={this.state.lastname} onChange={(event) => {this.setState({ lastname:event.target.value }) } }
                                        />
                                    </div>
                                    <br />
                                </div>

                                <div className="row m-2">
                                    <TextField id="email" className="p-2" type="text" variant="outlined" label="Email" fullWidth 
                                    value={this.state.email} onChange={(event) => {this.setState({ email:event.target.value }) } }
                                    />
                                </div>

                                <div className="row m-2">
                                    <div className="col-6 p-2">

                                        <TextField id="phone" type="text" variant="outlined" label="Phone" fullWidth 
                                        value={this.state.phone} onChange={(event) => {this.setState({ phone:event.target.value }) } }
                                        />
                                        </div>
                                        <div className="col-6 p-2">
                                        <TextField id="address" type="text" variant="outlined" label="Address" fullWidth 
                                        value={this.state.address} onChange={(event) => {this.setState({ address:event.target.value }) } }
                                        />
                                    </div>
                                    <br />
                                </div>
                                <div className="col-2 m-4" className="center">
                                    <Button variant="contained" color="primary" onClick= {this.EditProfile}>Save</Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
export default EditProfile

