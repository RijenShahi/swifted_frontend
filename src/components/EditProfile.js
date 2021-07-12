import React from 'react'
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import profile from "../images/profile.png";
import emptycart from "../images/empty.png";


const EditProfile = () => {
    return (
        <>
            <div className="container emp-profile">
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={profile} alt="profile" />
                        </div>

                        <div className="col-md-6">
                            <div className="profile-head">
                                <h2>User Profile</h2>
                                <h4>Customer</h4>
                            </div>
                        </div>
                        <div className="form">
                            <div className="row m-2">
                                <div className="col-6 p-2">
                                    <TextField id="firstname" type="text" variant="outlined" label="First Name" fullWidth />
                                </div>
                                <br />

                                <div className="col-6 p-2">
                                    <TextField id="lastname" type="text" variant="outlined" label="Last Name" fullWidth />
                                </div>
                                <br />
                            </div>

                            <br />

                            <div className="row m-2">
                                <TextField id="email" className="p-2" type="text" variant="outlined" label="Email" fullWidth />
                                <div className="col-6 p-2">
                                    <br />

                                    <TextField id="phone" type="text" variant="outlined" label="Phone" fullWidth />
                                </div>
                                <br />

                                <div className="col-6 p-2">
                                    <TextField id="address" type="text" variant="outlined" label="Address" fullWidth />
                                </div>
                                <br />

                                <TextField id="password" className="p-2" type="text" variant="outlined" label="Password" fullWidth />
                            </div>
                            <br />
                            <div className="col-md-2">
                                <Button variant="contained" color="primary">Save</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default EditProfile

