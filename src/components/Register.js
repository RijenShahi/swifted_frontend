import React from 'react'
import '../App.css';
import {TextField, Button, Divider} from '@material-ui/core';
import {Link} from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import loginimg from "../images/signup.png"


const Register=()=> {
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
                    <TextField id="firstname" type="text" variant="outlined" label="First Name" fullWidth/>
                </div>
                <br/>

                <div className="col-6 p-2">
                <TextField id="lastname" type="text" variant="outlined" label="Last Name" fullWidth/>
                </div>
                <br/>

                <div className="col-6 p-2">
                <TextField id="username" type="text" variant="outlined" label="Userame" fullWidth/>
                </div>
            </div>

            <br/>

            <div className="row m-2">
            <TextField id="email" className="p-2" type="text" variant="outlined" label="Email" fullWidth/>
            <div className="col-6 p-2">
            <br/>

                <TextField id="phone" type="text" variant="outlined" label="Phone" fullWidth/>
            </div>
            <br/>

            <div className="col-6 p-2">
                <TextField id="address" type="text" variant="outlined" label="Address" fullWidth/>
            </div>
            <br/>

            <TextField id="password" className="p-2" type="text" variant="outlined" label="Password" fullWidth/>
            
            
            <div className="col-6 p-2">
            <br/>
                <TextField id="userType" type="text" variant="outlined" label="User Type" fullWidth/>
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
            <Button variant="contained" color="primary">Create Account</Button>

            <Divider variant ="middle"/>
            <div className="icon">
                    <div className="signwith"><br/>SIGN UP WITH</div>
                    <div className="social">
                        <a href="#"><i className="fab fa-facebook-square"></i></a>
                        <a href="#"><i className="fab fa-twitter-square"></i></a>
                        <a href="#"><i className="fab fa-instagram-square"></i></a>
                        <a href="#"><i className="fab fa-google"></i></a>
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

export default Register
