import React from "react";
import { Button, Form } from "react-bootstrap";

class Body extends React.Component {
  login() {
    this.props.history.push("/wochen");
  }
  path() {
    this.props.history.push("/singUp");
  }
  render() {
    return (
      <>
        <Form
          type="submit"
          name="signUpForm"
          // action="http://localhost:3001/login"
          action="http://localhost:3000/azubi"
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Benutzername</Form.Label>
            <Form.Control
              name="benutzername"
              type="text"
              placeholder="z.B. Mohammad-younus.jaba"
            />
            {/* <Form.Text className="text-muted">Test</Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Passwort</Form.Label>
            <Form.Control
              name="Password"
              type="password"
              placeholder="z.B. ***********"
            />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Login
          </Button>
        </Form>
      </>
    );
  }
}

export default Body;

/* <Button onClick={() => this.path()} variant="contained">
  Konto erstellen
</Button>; */

// <form
// name="signUpForm"
// action="http://localhost:3001/login"
// method="post"
// type="submit"
// >
