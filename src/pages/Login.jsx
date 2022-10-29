import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Style/Login.css";

function Login() {
  return (
    <section class="login-box">
      <Container>
        <Row className="justify-content-md-center">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Row className="justify-content-md-center">
              <div class="submit">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
              <div class="signup">
                <Link to="/Signup">
                  <Button variant="primary" type="submit">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </Row>
          </Form>
        </Row>
      </Container>
    </section>
  );
}

export default Login;
