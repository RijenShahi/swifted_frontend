import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import axios from "axios";
import { Row, Container, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Cards() {
  let [products, setProduct] = useState([]);
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
        "http://localhost:90/swiftedAPI/products/displayProducts",
        auth.config
      )
      .then((response) => {
        console.log(response);
        setProduct(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="cards">
      <h1 className="heading">New Arrivals</h1>
      <div className="underline mx-auto"></div>
      <Container>
        <Row>
          {products.map((product) => {
            return (
              <Col lg={4}>
                <Card className="productCard">
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

                  <Link to={`/product/${product._id}`}>
                    {" "}
                    <FaShoppingCart />{" "}
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
