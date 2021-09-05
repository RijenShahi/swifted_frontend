import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../App.css";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { MdAddCircle } from "react-icons/md";
import { AiFillMinusCircle } from "react-icons/ai";

export default function Cart(props) {
  let [bookings, setBookings] = useState([]);
  let [auth, setAuth] = useState({
    config: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });
  useEffect(() => {
    axios
      .get("http://localhost:90/swiftedAPI/cart/retrieve/cart", auth.config)
      .then((response) => {
        setBookings(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteBooking = (e, id) => {
    axios
      .post(
        "http://localhost:90/swiftedAPI/cart/deleteCart",
        { cid: id },
        auth.config
      )
      .then((response) => {
        if (response.data.success == true) {
          swal({
            title: "Success",
            text: response.data.message,
            icon: "success",
          });
          window.location.reload();
        } else {
          swal({
            title: "Error",
            text: response.data.message,
            icon: "error",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const minusClick = (event, val) => {
    var qty = document.querySelector(`.productQuantity${val._id}`);
    var price = document.querySelector(`.price${val._id}`);

    var myQuantity = parseInt(qty.innerHTML);
    var myPrice = parseInt(price.innerHTML);

    var singlePrice = myPrice / myQuantity;

    if (myQuantity > 1) {
      myQuantity -= 1;

      axios
        .put(
          "http://localhost:90/swiftedAPI/cart/updateCart",
          { productID: val._id, quantity: myQuantity },
          auth.config
        )
        .then((response) => {
          if (response.data.success == true) {
            qty.innerHTML = myQuantity;

            price.innerHTML = singlePrice * myQuantity;
            swal({
              title: "Success",
              text: response.data.message,
              icon: "success",
            });
            window.location.reload();
          } else {
            swal({
              title: "Error",
              text: response.data.message,
              icon: "error",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const plusClick = (event, val) => {
    var qty = document.querySelector(`.productQuantity${val._id}`);

    var price = document.querySelector(`.price${val._id}`);
    var myQuantity = parseInt(qty.innerHTML);

    var myPrice = parseInt(price.innerHTML);
    var singlePrice = myPrice / myQuantity;

    myQuantity += 1;

    axios
      .put(
        "http://localhost:90/swiftedAPI/cart/updateCart",
        { productID: val._id, quantity: myQuantity },
        auth.config
      )
      .then((response) => {
        if (response.data.success == true) {
          qty.innerHTML = myQuantity;
          price.innerHTML = singlePrice * myQuantity;

          swal({
            title: "Success",
            text: response.data.message,
            icon: "success",
          });
          window.location.reload();
        } else {
          swal({
            title: "Error",
            text: response.data.message,
            icon: "error",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  


  return (
    <Container>
      <Row className="defaultMargin">
        <Col lg={12}>
          <h1 className="cart">Cart</h1>
          <Link className="btn btn-primary w-0 btn-md"  name="checkoutBtn" to="/checkout" style={{float:"right"}}> Buy Products  </Link>
        </Col>

        {bookings.map((book) => {
          return (
            <Col lg={3} style={{clear:"both"}}>
              <Card className="gadgetCard">
                <Card.Img
                  variant="top"
                  src={`http://localhost:90/${book.productID.productImage}`}
                />

                <Card.Body>
                  <Card.Title>{book.productID.productName}</Card.Title>

                  <p className="text-center">
                    {" "}
                    <b>Quantity: </b>
                  </p>
                  <p className="text-center">
                    {" "}
                    <AiFillMinusCircle
                      style={{ fontSize: "21px", color: "blue" }}
                      onClick={(event) => {
                        minusClick(event, book);
                      }}
                    />{" "}
                    <span className={`productQuantity${book._id}`}>
                      {" "}
                      {book.quantity}{" "}
                    </span>{" "}
                    <MdAddCircle
                      style={{ fontSize: "21px", color: "blue" }}
                      onClick={(event) => {
                        plusClick(event, book);
                      }}
                    />{" "}
                  </p>

                  <p>
                    <strong>Price: </strong> Rs{" "}
                    <span className={`price${book._id}`}>
                      {book.totalPrice}
                    </span>{" "}
                  </p>
                </Card.Body>

                <p className="text-center">
                  {book.productID.productStocks == 0 ? (
                    <small> Out Of Stock </small>
                  ) : (
                    <small> In Stock : {book.productID.productStocks}</small>
                  )}
                </p>

                <div className="text-center">
                  <Link
                    className="btn btn-danger btn-lg w-50 mb-3"
                    name="addToCart"
                    onClick={(event) => {
                      deleteBooking(event, book._id);
                    }}
                  >
                    Delete
                  </Link>
                </div>
                
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
