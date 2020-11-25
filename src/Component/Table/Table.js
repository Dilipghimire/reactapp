import React from "react";
import { Table } from "reactstrap";

const TableComp = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Studio Name</th>
          <th>Manager Name</th>
        </tr>
      </thead>
      <tbody>{props.tableBody()}</tbody>
    </Table>
  );
};

export default TableComp;
