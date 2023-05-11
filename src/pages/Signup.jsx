import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import "../Style/Signup.css";

function Signup() {
  return (
    <section class="signup-box">
      <div class="signup-card">
        <Card style={{ width: "25rem" }}>
          <Card.Body>
            <center>
              {" "}
              <Card.Header style={{ backgroundColor: "#eae1e1" }}>
                Sign Up
              </Card.Header>
            </center>
            <Card.Text>
              <br />
              <Container>
                <Row className="justify-content-md-center">
                  <Form>
                    {/* Name field */}
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter full name" />
                    </Form.Group>

                    {/* Gender select */}

                    <Form.Group className="mb-3">
                      <Form.Label>Gender </Form.Label>
                      <br></br>
                      <Form.Select>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        <option>Prefer not to say</option>
                      </Form.Select>
                    </Form.Group>

                    {/* Email address */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    {/* Password */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    {/* Buttons */}
                  </Form>
                </Row>
              </Container>
            </Card.Text>
            <Row className="justify-content-md-center">
              <div class="submit">
                <Button variant="primary" type="submit">
                  Sign Up
                </Button>
              </div>
            </Row>
            <Row className="justify-content-md-center">
              Already have an account? <br />
              <center>
                {" "}
                <Link to="/Login">Login here</Link>
              </center>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

export default Signup;
