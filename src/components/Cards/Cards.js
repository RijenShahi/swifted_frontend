import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import axios from "axios";
import { Row, Container, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { FaShoppingCart } from "react-icons/fa";

function Cards() {
  let [products, setProduct] = useState([]);
  let [sort,setSort] = useState("asc");
  let [search,setSearch] = useState("");
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

  let filtered = products.filter((val)=>{return val.productName.trim().toLowerCase().startsWith(search.trim().toLowerCase())});
  filtered = filtered.sort((a,b)=>{return a.productName.localeCompare(b.productName)});

  if(sort == "desc")
  {
    filtered.reverse();
  }

  return (
    <Container className="defaultMargin2">
      <h1 className="heading">Available Products:</h1>
      
        <Row>
          <Col lg={4} className="d-none d-md-block d-lg-block"></Col>
          <Col lg={4}>
              <form method = "post">
                <input type="text" className="form-control" name="search" onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search by name...."/>
              </form>
          </Col>
          <Col lg={2}>
          <form method = "post">
                <select className="form-control" name="sort" onChange={(e)=>{setSort(e.target.value)}}>
                  <option value="asc"> A-Z </option>
                  <option value="desc"> Z-A </option>
                </select>
              </form>
          </Col>
          <Col lg={2} className="d-none d-md-block d-lg-block"></Col>
        </Row>
      
      <Row>
      <div className="underline mx-auto"></div>
          {filtered.map((product) => {
            return (
              <Col lg={4}>
                <Card className="productCard">
                  <Card.Img
                    variant="top"
                    src={`http://localhost:90/${product.productImage}`}
                  />

                  <Card.Body className="card" >
                    <Card.Title className="text-center" >
                      <h2><b>{product.productName}</b></h2>
                    </Card.Title>
                    <p>
                      {" "}
                      <b>Price: </b> Rs {product.productPrice}
                    </p>
                
                      {" "}
                      
                      <StarRatings
                  rating={product.productRating}
                  starRatedColor="gold"
                  starDimension="30px"
                  starSpacing="3px"
                  numberOfStars={5}
                  name={product._id}
                  starHoverColor="gold"
                />
               
               
                    {/* <p>
                      {" "}
                      <b>Description: </b>
                      {product.productDescription}
                    </p> */}
                  </Card.Body>

                  <Link to={`/product/${product._id}`} className="cardBtn">
                    <Button
                    variant="outlined"
                    color="primary"
                    className="fieldsecReg"
                  >
                    <h5><b>More Details...
                    </b></h5>

                    
                  </Button>
                  </Link>
                </Card>
              </Col>
            );
          })}
          </Row>
          </Container>
  );
}

export default Cards;
  