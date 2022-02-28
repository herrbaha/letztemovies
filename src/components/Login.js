import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/login.css";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 9 && password.length > 6;
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);
    // setPassword("");
    // setEmail("");
   
  }

  return (
    <div className="Login">

      <Form onSubmit={handleSubmit} className="Login">
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        
        <Link to="/search" ><Button
          type="submit"
          className="login-btn"
          disabled={!validateForm()}
        >Login</Button></Link>
      </Form>
    </div>
  );
};

export default Login;
