import React from "react";
import { Dropdown, ButtonGroup, DropdownButton } from "react-bootstrap";

function Team() {
  return (
    <>
      <DropdownButton
        as={ButtonGroup}
        key="Primary"
        id={`dropdown-variants-Primary`}
        variant="Primary"
        title="Team"
      >
        <Dropdown.Item eventKey="1">Java</Dropdown.Item>
        <Dropdown.Item eventKey="2">C#</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          SQL
        </Dropdown.Item>
        {/* <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}
      </DropdownButton>{" "}
    </>
  );
}

export default Team;
