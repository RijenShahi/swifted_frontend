import React,{useState,useEffect} from 'react'
import { TextField, Button, Divider } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Checkout(props) {
    const {} = props;

    //state change
    let [bill,setBill] = useState({});
    let [auth,setAuth] = useState({
        "config":{
            "headers":{
                "authorization":`Bearer ${localStorage.getItem('token')}`
            }
        }
    })
    let [checkout,setCheckout] = useState({
        "firstName":"",
        "lastName":"",
        "email":"",
        "address":'',
        "phone":"",
        "additionalInfo":"Fine."
    })

    useEffect(()=>{
        axios.get("http://localhost:90/swiftedAPI/myCartBill",auth.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                setBill(
                    response.data.data
                )
            }
            else
            {
                setBill(
                    {}
                )
            }  
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const changHandler = (e)=>{
      
        let {name,value} = e.target;
        setCheckout({
            ...checkout,
            [name]:value
        })
    }


    const checkoutItem = (e)=>{
        e.preventDefault();
     
        axios.post("http://localhost:90/swiftedAPI/order",checkout,auth.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                window.location.href="/"
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    return (
        <div>
            <div className="form">
            <form method ="post" onSubmit={checkoutItem}>
                <div className="row m-2">
                    <div className="col-8 p-2">
                        <h3>Billing Details</h3>
                    </div>
                    
                    <div className="col-6 p-2">
                        <div className="form-group">
                            <input type="text" className="form-control" name="firstName" value={checkout.firstName} placeholder="First Name" onChange={(e)=>{changHandler(e)}}/>
                        </div>
                      
                    
                    </div>

                    <div className="col-6 p-2">
                    <div className="form-group">
                            <input type="text" className="form-control" name="lastName" value={checkout.lastName} placeholder="Last Name" onChange={(e)=>{changHandler(e)}}/>
                        </div>
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-6 p-2">
                    <div className="form-group">
                            <input type="text" className="form-control" name="address" value={checkout.address} placeholder="Address" onChange={(e)=>{changHandler(e)}}/>
                        </div>
                    </div>

                    <div className="col-6 p-2">

                    <div className="form-group">
                            <input type="text" className="form-control" name="phone" value={checkout.phone} placeholder="Phone" onChange={(e)=>{changHandler(e)}}/>
                        </div>
                    </div>
                    <div className="form-group">
                            <input type="email" className="form-control" name="email" value={checkout.email} placeholder="Email" onChange={(e)=>{changHandler(e)}}/>
                        </div>
                </div>

                <Divider variant="middle" />

                <div className="row m-2">
                    <div className="col-8 p-2">
                        <h3>Additional Information</h3>
                    </div>
                    <div className="col-6 p-2">
                    <div className="form-group">
                            <input type="text" className="form-control" name="additionalInfo" value={checkout.additionalInfo} onChange={(e)=>{changHandler(e)}}/>
                        </div>
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
                            {
                                bill?
                                (
                                
                                        
                                            bill['products']&&
                                            (
                                                <>

                                                    <tr>
                                                        <td>{ bill['products']}</td>
                                                        <td>{ bill['totalQuantity']}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Subtotal</td>
                                                        <td>Rs { bill['price']}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Delivery</td>
                                                        <td>{ bill['delivery']}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total</td>
                                                        <td>Rs { bill['overall']}</td>
                                                    </tr>
                                                </>
                                            )
                                        
                            
                                ):
                                (
                                    <>

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
                                    </>
                                )
                            }
                            
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
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary btn-md w-50" name="checkout"> Buy  </button>
                                </div>    
                </form>
            </div>
        </div>
    )
}

export default Checkout
