import React from 'react'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import profile from "../../images/profile.png";
import emptycart from "../../images/empty.png";


const UserProfile = () => {
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

                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">Dashboard</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Account Details</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" id="address-tab" data-toggle="tab" href="#address" role="tab">Address</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" id="wishlist-tab" data-toggle="tab" href="#wishlist" role="tab">Wishlist</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <Link to="/editprofile" className="text-black-50"><Button variant="contained" color="primary">Edit Profile</Button></Link>
                            {/* <input type ="submit" className="profile-edit-btn" name="btnAddMore" values="Edit Profile"/> */}

                        </div>
                    </div>

                    {/* right side data toogle */}

                    <div className="col-md-8 pl-5 dashboard-info">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="coml-md-6">
                                        <label>Your cart is empty</label>
                                        <img src={emptycart} alt="emptycart" />
                                        {/* <Link to="/shop" className="text-black-50"></Link> */}
                                        <Button variant="contained" color="primary">Shop Now!</Button>
                                    </div>

                                </div>

                                <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="coml-md-6">
                                            <label>Account Details</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade show active" id="address" role="tabpanel" aria-labelledby="address-tab">
                                    <div className="row">
                                        <div className="coml-md-6">
                                            <label>Address</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade show active" id="wishlist" role="tabpanel" aria-labelledby="wishlist-tab">
                                    <div className="row">
                                        <div className="coml-md-6">
                                            <label>Wishlist</label>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <Button variant="contained" color="primary">Logout</Button>

                </form>
            </div>
        </>
    )
}

export default UserProfile

