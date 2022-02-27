import React, {useState} from "react";
import {Link} from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

const Login = () => {
//   return (
//     <Form className="login-form">
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Enter Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Login
//       </Button>
//     </Form>
//   );
const [email, setEmail] = useState("");

const [password, setPassword] = useState("");

function validateForm() {

  return email.length > 9  && password.length > 5;

}

function handleSubmit(event) {

  event.preventDefault();

}

return (

  <div className="Login">

    <Form onSubmit={handleSubmit}>

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

    </Form>

  </div>

);


};

export default Login;