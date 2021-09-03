import React, { useState, useEffect } from "react";
import { TextField, Button, Divider, Container } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { Label } from "@material-ui/icons";

function Checkout(props) {
  const {} = props;

  //state change
  let [bill, setBill] = useState({});
  let [auth, setAuth] = useState({
    config: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });
  let [checkout, setCheckout] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    additionalInfo: "Fine.",
  });

  useEffect(() => {
    axios
      .get("http://localhost:90/swiftedAPI/myCartBill", auth.config)
      .then((response) => {
        if (response.data.success == true) {
          setBill(response.data.data);
        } else {
          setBill({});
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changHandler = (e) => {
    let { name, value } = e.target;
    setCheckout({
      ...checkout,
      [name]: value,
    });
  };

  const checkoutItem = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:90/swiftedAPI/order", checkout, auth.config)
      .then((response) => {
        if (response.data.success == true) {
                swal({
                  title: "Checkout succeed.",
                  text:"Your cart has been emptyed. What about refilling?",
                  icon: "Success",
                });
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
        swal({
            title: "Checkout failure.",
            text:"Please, fill the user details above!",
            icon: "Failure",
          });
      });
  };

  let {} = props;
  let token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Container>
    <div className="row">
        <div className="col-1"></div>
      <div className="col-10 form formManual text-center">
        <form method="post" onSubmit={checkoutItem}>
        <h3>Billing Details</h3>
          <div className="row m-1 text-center">
              <div className="col-2"></div>
            <div className="col-4 p-2">
              <div>
                
              </div>
              <div>
                <div className="form-group">
                    <label><b>Firstname:</b>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={checkout.firstname}
                    placeholder={user.firstname}
                    onChange={(e) => {
                      changHandler(e);
                    }}
                    
                  />
                  </label>
                </div>

                <div className="form-group">
                <label><b>Lastname:</b>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={checkout.lastname}
                    placeholder={user.lastname}
                    onChange={(e) => {
                      changHandler(e);
                    }}
                    
                  />
                  </label>
                </div>
              </div>

              <div className="form-group">
              <label><b>Address:</b>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={checkout.address}
                  placeholder={user.address}
                  onChange={(e) => {
                    changHandler(e);
                  }}
                  
                />
                </label>
              </div>
              </div>

<div className="col-4 p-2">
              <div className="form-group">
              <label><b>Phone:</b>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={checkout.phone}
                  placeholder={user.phone}
                  onChange={(e) => {
                    changHandler(e);
                  }}
                  
                />
                </label>
              </div>
              <div className="form-group">
              <label><b>Email:</b>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={checkout.email}
                  placeholder={user.email}
                  onChange={(e) => {
                    changHandler(e);
                  }}
                  
                />
                </label>
              </div>
           
                
  <label><b>Additional Information</b></label>

              <div className="form-group">
                <textarea
                  type="textarea"
                  className="form-control"
                  name="additionalInfo"
                  value={checkout.additionalInfo}
                  onChange={(e) => {
                    changHandler(e);
                  }}
                />
              </div>
            </div>
          </div>
          <h6>Please consider refilling the form for verification.</h6>

          <Divider variant="middle" />

          <div className="row m-1">
              <div className="col-2"></div>
            <div className="col-8 p-2">
              <h3>Your Order</h3>
            
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Total</th>
                </tr>
                {bill ? (
                  bill["products"] && (
                    <>
                      <tr>
                        <td>{bill["products"]}</td>
                        <td>{bill["totalQuantity"]}</td>
                      </tr>
                      <tr>
                        <td>Subtotal</td>
                        <td>Rs {bill["price"]}</td>
                      </tr>
                      <tr>
                        <td>Delivery</td>
                        <td>{bill["delivery"]}</td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td>Rs {bill["overall"]}</td>
                      </tr>
                    </>
                  )
                ) : (
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
                )}
              </tbody>
            </table>
            </div>
          </div>

          <Divider variant="middle" />
          <div className="row m-1">
              <div className="col-3"></div>
          <div className="col-6 text-center">
            <div className="profile-head">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                  >
                    CASH ON DELIVERY
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                  >
                    CREDIT/DEBIT
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="address-tab"
                    data-toggle="tab"
                    href="#address"
                    role="tab"
                  >
                    WALLET
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </div>


          <div className="text-center">
            <h4>
              We only have COD for now. The online payment is comming soon.
            </h4>
            <button
              type="submit"
              className="btn btn-primary btn-md w-50"
              name="checkout"
            >
              {" "}
              Buy{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  </Container>
  );
}

export default Checkout;
