import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import profile from "../../images/profile.png";
import { Col, Container, Form, Row } from "react-bootstrap";

const UserProfile = (props) => {
  let {} = props;
  let token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Container>
        <Row>
          <Col
            className=""
            style={{
              margin: "0 20%",
            }}
          >
            <div
              className="emp-profile profile-head d-block"
              style={{
                margin: "0 35%",
              }}
            >
              <img src={profile} alt="profile center" />
              <h3><u>User-Profile:</u></h3>
              <h4>{user.userType}</h4>
            </div>
            <Form
              className="px-3 py-5 mb-4"
              style={{
                border: "1px solid #f0f0c0",
                boxShadow: "3px 3px #f0f0f1",
              }}
            >
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Firstname:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={user.firstname}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Lastname:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={user.lastname}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email::</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={user.email}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Phone:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Password"
                  value={user.phone}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Address:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Password"
                  value={user.address}
                  disabled
                />
              </Form.Group>
              <div className="text-center">
                <Link
                  className="mt-3 px-5 py-2 btn-md bg-success text-white"
                  to="/editprofile"
                  style={{ textDecoration: "none" }}
                >
                  Edit
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserProfile;
