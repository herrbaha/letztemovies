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
      {/* <Form onSubmit={handleSubmit}>

      <Form.Group size="lg" controlId="email">

        <Form.Label>Email</Form.Label>

        <Form.Control

          autoFocus

          type="email"

          value={email}

          onChange={(e) => setEmail(e.target.value)}

        />

      </Form.Group>

      <Form.Group size="lg" controlId="password">

        <Form.Label>Password</Form.Label>

        <Form.Control

          type="password"

          value={password}

          onChange={(e) => setPassword(e.target.value)}

        />

      </Form.Group>

      <Button block size="lg" type="submit" className="login-btn" disabled={!validateForm()}>

      <Link to="/search">Login</Link>

      </Button>

    </Form> */}

      <Form onSubmit={handleSubmit}>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        
        <Link to="/search"><Button
          variant="primary"
          type="submit"
          className="login-btn"
          disabled={!validateForm()}
        >Login</Button></Link>
      </Form>
    </div>
  );
};

export default Login;
