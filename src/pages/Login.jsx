import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../Style/Login.css";
import Footer from "../Layout/Footer";

function Login() {
  return (
    <section class="login-box">
      <div class="login-card mb-5">
        <Card style={{ width: "25rem" }}>
          <Card.Body>
            <center>
              {" "}
              <Card.Header style={{ backgroundColor: "#eae1e1" }}>
                LogIn
              </Card.Header>
            </center>
            <Card.Text>
              <br />
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
                  </Form>
                </Row>
              </Container>
            </Card.Text>
          </Card.Body>
          <Row className="justify-content-md-center">
            <div class="submit">
              <Button variant="primary" type="submit">
                Log In
              </Button>
            </div>
          </Row>
          <Row className="justify-content-md-center">
            New User? {"   "}
            <center>
              <Link to="/Signup"> {"  "} Register here</Link>
            </center>
          </Row>
        </Card>
      </div>
      <div class="mt-5">
              {/* <Footer/> */}
      </div>
    </section>
  );
}

export default Login;
