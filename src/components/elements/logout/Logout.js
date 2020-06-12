import React from "react";
import { Button } from "react-bootstrap";

function Logout() {
  return (
    <form
      className="form-inline my-2 my-lg-0"
      // action="http://localhost:3001/logout"
      // method="post"
      action="http://localhost:3000/"
      type="submit"
    >
      <Button
        variant="secondary"
        className="btn btn-outline-light my-2 my-sm-0"
        type="submit"
      >
        Logout
      </Button>
    </form>
  );
}

export default Logout;
