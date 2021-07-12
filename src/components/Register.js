import React, { Component } from 'react'
import '../App.css';
import {TextField, Button, Divider} from '@material-ui/core';
import {Link} from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import PersonAddIcon from '@material-ui/icons/PersonAdd';
import loginimg from "../images/signup.png"
import axios from 'axios';
import swal from 'sweetalert';

class Register extends Component {
    state = {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        phone: "",
        address: "",
        password: "",
        userType: ""
    }
    Register=(e)=> {
        e.preventDefault();
        const userData = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            password: this.state.password,
            userType: this.state.userType
        }
        console.log(userData)
        axios.post("http://localhost:90/swiftedAPI/userProfile/register", userData)
            .then((response) => {
                if (response.data.success === true){
                    swal({
                        title: "Success",
                        text: "User Added",
                        icon: "Success"
                    })
                    window.location.href = "/login"
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="form">
                <div className="icon">
                <div className="icon_class">

                        <img src={loginimg} alt="login"/>
                        
                    </div>
                    {/* <div className="text">SIGN UP</div>
                    <p>Welcome</p> */}
                </div>

                <div className="row m-2">
                    <div className="col-6 p-2">
                        <TextField id="firstname" type="text" variant="outlined" label="First Name" fullWidth
                        value={this.state.firstname} onChange={(event) => {this.setState({ firstname:event.target.value }) } } 
                        />
                    </div>
                    <br/>

                    <div className="col-6 p-2">
                    <TextField id="lastname" type="text" variant="outlined" label="Last Name" fullWidth
                    value={this.state.lastname} onChange={(event) => {this.setState({ lastname:event.target.value }) } }
                    />
                    </div>
                    <br/>

                    <div className="col-6 p-2">
                    <TextField id="username" type="text" variant="outlined" label="Userame" fullWidth
                    value={this.state.username} onChange={(event) => {this.setState({ username:event.target.value }) } }
                    />
                    </div>
                </div>

                <br/>

                <div className="row m-2">
                <TextField id="email" className="p-2" type="text" variant="outlined" label="Email" fullWidth
                value={this.state.email} onChange={(event) => {this.setState({ email:event.target.value }) } }
                />
                <div className="col-6 p-2">
                <br/>

                    <TextField id="phone" type="text" variant="outlined" label="Phone" fullWidth
                    value={this.state.phone} onChange={(event) => {this.setState({ phone:event.target.value }) } }
                    />
                </div>
                <br/>

                <div className="col-6 p-2">
                    <TextField id="address" type="text" variant="outlined" label="Address" fullWidth
                    value={this.state.address} onChange={(event) => {this.setState({ address:event.target.value }) } }
                    />
                </div>
                <br/>

                <TextField id="password" className="p-2" type="text" variant="outlined" label="Password" fullWidth
                value={this.state.password} onChange={(event) => {this.setState({ password:event.target.value }) } }
                />
                
                
                <div className="col-6 p-2">
                <br/>
                    <TextField id="userType" type="text" variant="outlined" label="User Type" fullWidth
                    value={this.state.userType} onChange={(event) => {this.setState({ userType:event.target.value }) } }
                    />
                </div>
                <br/>

                <FormControlLabel
                    control={
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="samll"/>}
                            checkedIcon={<CheckBoxIcon fontSize="small"/>}
                            name="checkedI"
                        />
                    }
                    label="I agree with terms and agreement."/>
                
                
                </div>
                
                <Link to="/login" className="text-black-50"><Button variant="outline" color="primary">
                    Already have an account?</Button></Link>
                <Button variant="contained" color="primary" onClick= {this.Register}>Create Account</Button>

                <Divider variant ="middle"/>
                <div className="icon">
                        <div className="signwith"><br/>SIGN UP WITH...</div>
                        <div className="social">
                            <a href="www.facebook.com"><i className="fab fa-facebook-square"></i></a>
                            <a href="www.twitter.com"><i className="fab fa-twitter-square"></i></a>
                            <a href="www.instagram.com"><i className="fab fa-instagram-square"></i></a>
                            <a href="www.google.com"><i className="fab fa-google"></i></a>
                        </div>
                </div>
                {/* <p className="text-center">
                    <Link to="/login" className="text-black-50">
                        <h5>Already have an account?</h5>
                    </Link>
                </p> */}

            </div>
        )
    }
}
export default Register
