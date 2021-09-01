import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import profile from "../../images/profile.png";
import { Col, Container, Form, Row } from "react-bootstrap";

const UserProfile = (props) => {
  let { }= props;
  let token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <>
  <Container>
    <Row className="mx-auto">
      <Col sm={12} className="emp-profile profile-head me-auto">
      <img src={profile} alt="profile" />
              <h2>User Profile</h2>
              <h4>{user.userType}</h4>
      </Col>
      <Col sm={12}>
      <Form>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Firstname:</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={user.firstname} disabled/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Lastname:</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={user.lastname} disabled/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email::</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={user.email} disabled/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Phone:</Form.Label>
    <Form.Control type="text" placeholder="Password" value={user.phone} disabled/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Address:</Form.Label>
    <Form.Control type="text" placeholder="Password" value={user.address} disabled/>
  </Form.Group>
  
</Form>
      </Col>
    </Row>
  </Container>

    </>
  );
};

export default UserProfile;
