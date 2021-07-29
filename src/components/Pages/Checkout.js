import React from 'react'
import { TextField, Button, Divider } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Link } from 'react-router-dom';

function Checkout() {
    return (
        <div>
            <div className="form">
                <div className="row m-2">
                    <div className="col-8 p-2">
                        <h3>Billing Details</h3>
                    </div>
                    <div className="col-6 p-2">
                        <TextField id="firstname" type="text" variant="outlined" label="First Name" fullWidth
                        />
                    </div>

                    <div className="col-6 p-2">
                        <TextField id="lastname" type="text" variant="outlined" label="Last Name" fullWidth
                        />
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-6 p-2">
                        <TextField id="address" type="text" variant="outlined" label="Address" fullWidth
                        />
                    </div>

                    <div className="col-6 p-2">

                        <TextField id="phone" type="text" variant="outlined" label="Phone" fullWidth
                        />
                    </div>
                    <TextField id="email" className="p-2" type="text" variant="outlined" label="Email" fullWidth
                    />
                </div>

                <Divider variant="middle" />

                <div className="row m-2">
                    <div className="col-8 p-2">
                        <h3>Additional Information</h3>
                    </div>
                    <div className="col-6 p-2">
                        <TextField id="firstname" type="text" variant="outlined" label="Special notes for delivery" fullWidth
                        />
                    </div>
                </div>

                <Divider variant="middle" />

                <div className="row m-2">
                    <div className="col-8 p-2">
                        <h3>Your Order</h3>
                    </div>
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Total</th>

                            </tr>
                            <tr>
                                <td>Product name x 1</td>
                                <td>00$</td>
                            </tr>
                            <tr>
                                <td>Subtotal</td>
                                <td>00$</td>
                            </tr>
                            <tr>
                                <td>Delivery</td>
                                <td>00$</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>00$</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Divider variant="middle" />

                <div className="col-md-12">
                    <div className="profile-head">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">CASH ON DELIVERY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">CREDIT/DEBIT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" id="address-tab" data-toggle="tab" href="#address" role="tab">WALLET</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
