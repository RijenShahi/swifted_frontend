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
  let [commentDetail,setCommentDetail] = useState({
    "comment":"",
    "productId":props.match.params.pid
    
  });

  let [comments,setComments] = useState([]);
  let [replies,setReplies]  = useState([]); 
  let [replyDetails,setDetails] = useState({
     "reply":"",
     "commentId":""
     
  })

  
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

  useEffect(()=>{
    axios.get("http://localhost:90/swiftedAPI/reply/fetchAllReplies/"+props.match.params.pid)
          .then((response)=>{
            
        if(response.data.success == true)
             {
                 setReplies(response.data.data)
             }
             else
             {
                setReplies([])
             }
          })
          .catch((err)=>{
        console.log(err);
          })
     },[])

  useEffect(()=>{
    axios.get("http://localhost:90/swiftedAPI/comment/fetchComments/"+props.match.params.pid)
    .then((response)=>{
      if(response.data.success == true)
      {
        setComments(
          response.data.data
        )
      }
      else
      {
        setComments([])
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

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

  const commentHandler = (e)=>{
    let {name,value} = e.target;
    setCommentDetail({
      ...commentDetail,
      [name]:value
    })
  }

  const addComment = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:90/swiftedAPI/comment/addComment",commentDetail,auth.config)
    .then((response)=>{
      if(response.data.success == true)
      {
        window.location.reload();
      }
      else
      {
        console.log(response.data.message)
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const replyHandler = (e,cid)=>{

    let {name,value} = e.target;
    setDetails({
        ...replyDetails,
        [name]:value,
        ["commentId"]:cid
    })
}

const postReply = (e)=>{
e.preventDefault();
  axios.post('http://localhost:90/swiftedAPI/reply/addReply',replyDetails,auth.config)
  .then((response)=>{
    if(response.data.success == true)
    {
      window.location.reload();
    }
    else
    {
      console.log(response.data.message)
    }
  })
  .catch((err)=>{
      console.log(err);
   })
}

  const loadReplies = (commentId) =>{
    let content = [];
    let repliesComment = replies.filter((val)=>{return val.commentId._id.toString() == commentId.toString()});
    
    for(var i of repliesComment)
    {
   content.push(
       <div className="replyHolder m-4 p-3" style={{ background:"#f0f0f0"}}>
        <p style={{float:"right"}}>  <small> {i.fancyDate}  </small> </p>
                          <h5 style={{clear:"both"}}>  {i.userId.username}  </h5>
                          <p className="text-justify"> {i.reply}   </p>
                      </div>	
                  )
            }

    return content;
}

const getLength = (cid) =>{
  let repliesComment = replies.filter((val)=>{return val.commentId._id.toString() == cid.toString()});
  return repliesComment.length
}

  const loadCommentAndReplies = ()=>{
    let content = [];

        if(comments.length > 0)
        {
	         for(var i of comments)
              {
                  content.push(
                      <div className="commentHolder p-4 m-3" style={{background:"#f0f0f0"}}>
                    <p style={{float:"right"}}>  <small> {i.fancyDate}  </small> </p>
                                      <h5 style={{clear:"both"}} style={{fontWeight:"bolder"}}>  {i.userId.username}  </h5>
                                      <p className="text-justify"> <strong> Comment: </strong> {i.comment}   </p>
                                      <button class="btn btn-primary" onFocus={(e)=>{e.target.style.boxShadow="none"}} style={{border:"none",background:"none",color:"black"}} type="button" data-toggle="collapse" data-target={`#replies${i._id}`} aria-expanded="false" aria-controls="collapseExample">
                          View {getLength(i._id)} replies.
                      </button>
                                      
                                      <div class="collapse" id={`replies${i._id}`}>
                        <div class="card card-body">
                          {
                                                loadReplies(i._id).map((val)=>{
                                                    
                                                  
                                                  return (val);
                                                })
                                              }
                                              <form method = "post" onSubmit={postReply}>
                          <div className="form-group">										
                                                      <input type="text" className="form-control" name="reply" value={replyDetails.reply} placeholder="Your Reply" onChange={(e)=>{replyHandler(e,i._id)}} required/>  	  
                                                  </div>     
                                                  <div className="text-center">
                                                      <button className="btn btn-primary btn-md w-50" type="submit" name="reply"> Reply </button> 
                                                  </div>           	
                                            </form>

                                        </div>
                                      </div>
                                </div>
                            )
                        }
        }      
        return content;
  }

  let token = localStorage.getItem("token");
  return (
    <div className="cards">
      <h1 className="cartheading">Product Details</h1>
      <Container>
        <Row>
          <Col lg={2} className="d-none d-md-block"></Col>
          <Col lg={8}>
            <Card className="prodictCard p-4">
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

              {
                loadCommentAndReplies().map((val)=>{
                  return (val)
                })
              }

              <form method="post" onSubmit={addComment}>
                <div className="form-group">
                    <label> Your Comment </label>
                    <textarea className="form-control" name="comment" onChange={(e)=>{commentHandler(e)}} required></textarea>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary btn-md w-50" type="submit" name="comment"> Comment </button>
                </div>

              </form>
            </Card>
          </Col>
          <Col lg={2} className="d-none d-md-block"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default withRouter(CardsForCart);
