import React from "react";
import OrderDetailsDictionary from "./OrderDetailsDictionary";
import "../InvoiceApp/OrderDetails.css";

const OrderDetails = () => {
  return (
    <div>
      <p>Photo Size</p>
      {OrderDetailsDictionary.map((item) => (
        <div>
          <button className="sizeButtonhandle orderSize">{item.size}</button>
          <input type="text" id="fname" name="fname" />
        </div>
      ))}
    </div>
  );
};

export default OrderDetails;
