import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

//import component
import TableComp from "../Table/Table";

const ToggleComp = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <a href="#" onClick={toggle} style={{ marginBottom: "1rem" }}>
        List of Studio
      </a>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <TableComp />
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default ToggleComp;
