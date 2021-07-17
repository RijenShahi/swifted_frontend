import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { Row, Container, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import StarRatings from 'react-star-ratings'

function CardInfo(props) {
  let [product, setProduct] = useState({});
  let [ratings, setRating] = useState({
    "rating": 0,
    "product_id": props.match.params.pid,
    "auth": {
      "config": {
        "headers": { "authorizaion": `Bearer ${localStorage.getItem("token")}` }
      }
    }
  })
  let [auth, setAuth] = useState({
    "config": {
      "headers": {
        "authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }
  })

  useEffect(() => {
    axios.get("http://localhost:90/product/single/" + props.match.params.pid)
      .then((response) => {
        setProduct(response.data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [product])

  const addProduct = (e, id) => {
    axios.post("http://localhost:90/book/product", { product_id: id, quantity: 1 }, auth.config)
      .then((response) => {
        if (response.data.success == true) {
          swal({
            title: "Success",
            text: response.data.message,
            icon: "success"
          })
          window.location.href = "/cart"
        }
        else {
          swal({
            title: "Error",
            text: response.data.message,
            icon: "error"
          })
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    axios.post("http://localhost:90/retrieveRating", { csId: props.match.params.pid }, auth.config)
      .then((response) => {
        console.log(response)
        if (response.data.success == true) {
          setRating(
            {
              ...ratings,
              ['rating']: response.data.data.rating
            }

          )
        }

      })
  }, [ratings.rating]);

  const rateProduct = (newRating, name) => {
    setRating(
      {
        ...ratings,
        ['rating']: newRating
      }
    )
    axios.post("http://localhost:90/rate/cs", { csId: props.match.params.pid, "rating": newRating }, auth.config)
      .then((response) => {

      })
      .catch((err) => {
        console.log(err);
      })
  }


  let token = localStorage.getItem("token")
  return (
    <div className='cards'>
      <h1 className="cartheading">Optical Details</h1>
      <Container>
        <Row>
          <Col lg={4} className="d-none d-md-block"></Col>
          <Col lg={4}>
            <Card className="prodictCard">
              <Card.Img variant="top" src={`http://localhost:90/${product.pImage}`} />

              <Card.Body>
                <Card.Title className="text-center">{product.pName}</Card.Title>
                <p> <b>Price: </b> Rs {product.pPrice}</p>
                <p> <b>Rating: </b>{product.pRating}</p>
                <p> <b>Description: </b>{product.pDesc}</p>
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
                token ?
                  (
                    <div className="text-center">
                      <Link className="btn btn-info btn-lg w-50 mb-3" name="addToCart" onClick={(event) => { addProduct(event, product._id) }}>Add to Cart</Link>
                    </div>
                  ) :
                  (
                    <div className="text-center">
                      <Link className="btn btn-info btn-lg w-50 mb-3" name="addToCart" to="/login">Add to Cart</Link>
                    </div>
                  )
              }
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default withRouter(CardInfo);
