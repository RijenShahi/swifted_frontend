import React from 'react'
import '../App.css';
import {TextField, Button, Divider} from '@material-ui/core';
import {Link} from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import loginimg from "../images/login1.PNG"
// import PersonIcon from '@material-ui/icons/Person';

const Login=()=> {
    return (
        <div>
            <div className="icon">
                <div className="icon_class">
                    <img src={loginimg} alt="login"/>
                    {/* <PersonIcon fonsize="large"/> */}
                </div>
            </div>

            

            <div className="row m-2">
            <TextField id="email" className="p-2" type="text" variant="outlined" label="Username / Email" fullWidth/>
            <br/> <br/> 
            <TextField id="password" className="p-2" type="text" variant="outlined" label="Password" fullWidth/>
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
            <Button variant="contained" color="primary">Log In</Button>
            <p className="text-center">
                <Link to="/register" className="text-black-50">
                    <h5>Don't Have An Account?</h5>
                </Link>
            </p>
            <Divider variant ="middle"/>
            <div className="icon">
                    <div className="signwith">LOGIN WITH</div>
                    <div className="social">
                        <a href="#"><i className="fab fa-facebook-square"></i></a>
                        <a href="#"><i className="fab fa-twitter-square"></i></a>
                        <a href="#"><i className="fab fa-instagram-square"></i></a>
                        <a href="#"><i className="fab fa-google"></i></a>
                                    </div>
            </div>

        </div>
    )
}

export default Login
