import React from 'react'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import profile from "../../images/profile.png";
import emptycart from "../../images/empty.png";

function MyCart() {
    return (
        <>
            <div className="container emp-profile defaultMargin">
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-head">
                                <h2>My Cart</h2>
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">Cart</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" id="wishlist-tab" data-toggle="tab" href="#wishlist" role="tab">Wishlist</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default MyCart
