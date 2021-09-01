import axios from "axios";
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Row, Container, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import StarRatings from "react-star-ratings";
import { FaShoppingCart } from "react-icons/fa";

function CardsForCart(props) {
  let [product, setProduct] = useState({});
  let [ratings, setRating] = useState({
    rating: 0,
    product_id: props.match.params.pid,
    auth: {
      config: {
        headers: { authorizaion: `Bearer ${localStorage.getItem("token")}` },
      },
    },
  });
  let [auth, setAuth] = useState({
    config: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  useEffect(() => {
    axios
      .get(
        "http://localhost:90/swiftedAPI/products/selectedProduct/" +
          props.match.params.pid
      )
      .then((response) => {
        setProduct(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [product]);

  const addProduct = (e, id) => {
    axios
      .post(
        "http://localhost:90/swiftedAPI/cart/addToCart",
        { productID: id, quantity: 1 },
        auth.config
      )
      .then((response) => {
        if (response.data.success == true) {
          swal({
            title: "Success",
            text: response.data.message,
            icon: "success",
          });
          window.location.href = "/myCart";
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

  useEffect(() => {
    axios
      .get(
        "http://localhost:90/swiftedAPI/rating/getMyRating/"+ratings.product_id,auth.config
    
      )
      .then((response) => {
        console.log(response)
        if (response.data.success == true) {
          setRating({
            ...ratings,
            ["rating"]: response.data.data.rating,
          });
        }
        else{
          setRating({
            ...ratings,
            ['rating']:0
          })
        }
      })
  }, [ratings.rating]);

  const rateProduct = (newRating, name) => {
    setRating({
      ...ratings,
      ["rating"]: newRating,
    });
    axios
      .post(
        "http://localhost:90/swiftedAPI/rating/rateAProduct",
        { productId: props.match.params.pid, rating: newRating },
        auth.config
      )
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const removeRating = (e)=>{
    axios.delete("http://localhost:90/swiftedAPI/rating/removeRating/"+ratings.product_id,auth.config)
    .then((response)=>{
      if(response.data.success == true)
      {
        window.location.reload()
      }
      else
      {

      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  let token = localStorage.getItem("token");
  return (
    <div className="cards">
      <h1 className="cartheading">Product Details</h1>
      <Container>
        <Row>
          <Col lg={4} className="d-none d-md-block"></Col>
          <Col lg={4}>
            <Card className="prodictCard">
              <Card.Img
                variant="top"
                src={`http://localhost:90/${product.productImage}`}
              />

              <Card.Body>
                <Card.Title className="text-center">
                  {product.productName}
                </Card.Title>
                <p>
                  {" "}
                  <b>Price: </b> Rs {product.productPrice}
                </p>
                <p>
                  {" "}
                  <b>Rating: </b>
                  {product.productRating}
                </p>
                <p>
                  {" "}
                  <b>Description: </b>
                  {product.productDescription}
                </p>
              </Card.Body>

              <div className="text-center">
                <StarRatings
                  rating={ratings.rating}
                  starRatedColor="gold"
                  starDimension="30px"
                  starSpacing="3px"
                  numberOfStars={5}
                  changeRating={rateProduct}
                  name={props.match.params.pid}
                  starHoverColor="gold"
                />
              </div>
              {
                ratings.rating >0 &&
                (
                  <button className="btn" type="button" style={{border:"none",background:"none",textDecoration:"underline"}} name="remove" onClick={(e)=>{removeRating(e)}}> Remove Rating  </button>
                )
              }

              {token ? (
                <div className="text-center">
                  <Link
                    className="btn btn-info btn-lg w-50 mb-3"
                    name="addToCart"
                    onClick={(event) => {
                      addProduct(event, product._id);
                    }}
                  >
                    Add to Cart
                    
                  </Link>
                </div>
              ) : (
                <div className="text-center">
                  <Link
                    className="btn btn-info btn-lg w-50 mb-3"
                    name="addToCart"
                    to="/login"
                  >
                    Add to Cart
                    
                  {" "}
                    <FaShoppingCart />{" "}
                  </Link>
                </div>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default withRouter(CardsForCart);
