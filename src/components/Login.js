import React, { Component} from 'react'
import '../App.css';
import {TextField, Button, Divider} from '@material-ui/core';
import {Link} from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import loginimg from "../images/login1.PNG"
// import PersonIcon from '@material-ui/icons/Person';
import axios from 'axios';
import swal from 'sweetalert';


class Login extends Component {
    state = {
        username:"",
        password:""
    }


    Login=(e)=> {
        e.preventDefault();
        const userData = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(userData)
        axios.post("http://localhost:90/swiftedAPI/userProfile/login", userData)
            .then((response)=>{
              
                if (response.data.success === true) {
                    swal({
                        title: "Sucess",
                        test: "User Logined",
                        icon: "Success"
                    })
                    localStorage.setItem('token',response.data.token);
                    localStorage.setItem('user',JSON.stringify(response.data.data));
                    window.location.href = "/userprofile"
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {

        return (
            <div>
                <div className="icon">
                    <div className="icon_class">
                        <img src={loginimg} alt="login"/>
                        {/* <PersonIcon fonsize="large"/> */}
                    </div>
                </div>

                

                <div className="row m-2">
                <TextField id="username" className="p-2" type="text" variant="outlined" label="Username" fullWidth
                value={this.state.username} onChange={(event) => {this.setState({ username:event.target.value }) } } 
                />
                <br/> <br/> 
                <TextField id="password" className="p-2" type="text" variant="outlined" label="Password" fullWidth
                value={this.state.password} onChange={(event) => {this.setState({ password: event.target.value }) } } 
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="samll"/>}
                            checkedIcon={<CheckBoxIcon fontSize="small"/>}
                            name="checkedI"
                        />
                    }
                    label="Remeber Me"/>
                
                
                </div>
                
            <Button variant="outline" color="primary">
                    Forget Password?</Button>
                <Button id="login" variant="contained" color="primary" onClick= {this.Login}>Log In</Button>
                <p className="text-center">
                    <Link to="/register" className="text-black-50">
                        <h5>Don't Have An Account?</h5>
                    </Link>
                </p>
                <Divider variant ="middle"/>
                <div className="icon">
                        <div className="signwith">LOGIN WITH</div>
                        <div className="social">
                        <a href="www.facebook.com"><i className="fab fa-facebook-square"></i></a>
                            <a href="www.twitter.com"><i className="fab fa-twitter-square"></i></a>
                            <a href="www.instagram.com"><i className="fab fa-instagram-square"></i></a>
                            <a href="www.google.com"><i className="fab fa-google"></i></a>
                        </div>
                </div>

            </div>
        )
    }
}

export default Login
