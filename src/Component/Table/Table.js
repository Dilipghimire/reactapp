import React from "react";
import { Table } from "reactstrap";

const TableComp = (props) => {
 console.log('test', props)


  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Studio Name</th>
          <th>Manager Name</th>
        </tr>
      </thead>
      <tbody>{}</tbody>
    </Table>
  );
};

export default TableComp;
