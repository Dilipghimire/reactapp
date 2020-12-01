import React, { useState } from "react";
import OrderDetailsDictionary from "./OrderDetailsDictionary";
import "../InvoiceApp/OrderDetails.css";
import { Table } from "reactstrap";

class OrderDetails extends React.Component {
  state = {
    amount: [],
    qty: 0,
  };

  mapping = {
    "4R": 10,
    "5R": 15,
    "6R": 20,
    "8R": 25,
    "10R": 30,
    "12R": 35,
  };

  totalCalculation = (e) => {
    const ID = e.target.id;
    const getPerSizeAmount = this.mapping[ID];
    const getQuantity = e.target.value;
    document.getElementById("total-value" + ID).value =
      getPerSizeAmount * getQuantity;
  };

  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>Photo Size</th>
            <th>Quantity</th>
            <th>X</th>
            <th>Unit Price</th>
            <th>=</th>
            <th>Totals</th>
          </tr>
        </thead>
        <tbody>
          {OrderDetailsDictionary.map((item) => (
            <tr>
              <th scope="row">{item.size}</th>
              <td>
                <input
                  type="test"
                  className="quantity-box"
                  id={item.size}
                  onKeyUp={this.totalCalculation}
                ></input>
              </td>
              <td>X</td>
              <td>{item.cost}</td>
              <td>=</td>
              <td>
                <input id={"total-value" + item.size}></input>
              </td>
            </tr>
          ))}
          <tr className="subTotal">
            <td>
              product Subtotal <input></input>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default OrderDetails;
