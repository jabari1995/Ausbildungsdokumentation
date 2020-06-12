import React from "react";
import { Form } from "react-bootstrap";

function TextArea(props) {
  return (
    <Form>
      <Form.Group>
        <Form.Label>{props.Text} </Form.Label>
        <Form.Control
          onChange={(value) => {
            props.callback(value.target.value);
          }}
          value={props.value}
          as={props.as ? props.as : "textarea"}
          rows={props.size ? props.size : "3"}
          disabled={props.disabled}
          required
        />
      </Form.Group>
    </Form>
  );
}

export default TextArea;
