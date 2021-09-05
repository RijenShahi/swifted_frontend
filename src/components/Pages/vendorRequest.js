import React,{useState,useEffect} from 'react'
import {Container,Col,Row,Card} from 'react-bootstrap'
import axios from 'axios';
import {GiSandsOfTime} from 'react-icons/gi'

import swal from 'sweetalert'

const ViewRequests = (props) => {
    let [requests,setRequests] = useState([]);
    let [auth,setAuth] = useState({
        "config":{
            "headers":{
                "authorization":`Bearer ${localStorage.getItem("token")}`
            }
        }
    })
    useEffect(()=>{
        axios.get("http://localhost:90/swiftedAPI/request/show/request",auth.config)
        .then((response)=>{
            console.log(response)
            setRequests(
                response.data.data
            )
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    const requestReview = (command,id)=>{
        var dataHolder = {"req_id":id,"answer":command};
        axios.post('http://localhost:90/swiftedAPI/request/update/request',dataHolder,auth.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                window.location.reload()
            }
            else
            {
                swal({
                    "title":"Error",
                    "text":response.data.message,
                    "icon":"error"
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <React.Fragment>
            <Container fluid>
                <Row className="defaultMargin">
                    <Col lg={12}>
                    <p style={{float:"right",fontWeight:"bolder"}} className="mt-2 mr-1"> {requests.length} requests on pending. </p>
                    </Col>
                    <Col lg={12}>
                        <Row>
                      
                        {
                            requests.map((userr)=>{
                                return (
                                    <Col lg={3}>
                                    <Card className="userRequests">
                                    <div className="reqImg">
                                <Card.Img variant="top" src={`http://localhost:90/${userr.citizenShip}`} />
                                </div>
                                <Card.Body>
                                   <p> {userr.storeName} </p>
                                    <div>
                                        <p><strong>Address: </strong>{userr.address}</p>
                                      
                                    </div>

                                    <div>
                                        <p><strong>Contact: </strong>{userr.contact}</p>
                                      
                                    </div>

                                    <div>
                                        <p style={{float:"right"}}><strong>Selected:</strong> <GiSandsOfTime style={{color:"black",fontSize:"12px"}}/> </p>
                                        <p><strong>Request At: </strong>{userr.requestDate}</p>
                                    </div>

                                    
                                    <div className="acceptance">
                                        
                                    <Row>
                                        <Col lg={6}>
                                            <button className="btn btn-outline-success btn-block" type="button" name="accept__data" onClick={()=>{requestReview("Accept",userr._id)}}> Accept </button>
                                        </Col>
                                        <Col lg={6}>
                                        <button className="btn btn-outline-danger btn-block" type="button" name="decline__data" onClick={()=>{requestReview("Decline",userr._id)}}> Decline </button>
                                        </Col>
                                    </Row>
                                    
                                    </div>
                                   
                                </Card.Body>
                                </Card>
                                </Col>
                                
                                )
                            })
                        }
                        </Row>
                   
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default ViewRequests
