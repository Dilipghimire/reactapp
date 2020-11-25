import React, { Fragment } from "react";
import firebase from "../../fireBase";

//import login
import InitialPage from "../InvoiceApp/logIn";
import CreateNewVendor from "./CreateNewVendor";
import PopUpModal from "../../Component/Modals/PopUpModals";
import ToggleComp from "../../Component/Toggle/Toggle";

//css

import "../InvoiceApp/InvoiceApp.css";

class InvoiceApp extends React.Component {
  state = {
    dataObj: [],
    vendorInfo: {
      studioName: null,
      managerName: null,
    },
    inputValue: false,
    namePut: "",
    renderNewForm: false,
  };

  //component Did Mount

  componentDidMount = () => {
    this.isVendorAvailable();
  };

  // checking in Database
  isVendorAvailable = () => {
    const ref = firebase.database().ref("vendor");
    ref.on("value", (snap) => {
      this.setState({
        dataObj: snap.val(),
      });
    });
  };

  //return true or false
  checkIfVendorExists = () => {
    const inputName = document.getElementById("searchText").value;
    this.setState({
      checkVendorExistence: this.state.dataObj.hasOwnProperty(inputName),
    });
  };

  //Add Vendor in FireBase DataBase
  addVendor = () => {
    let studioName =
      this.state.vendorInfo && this.state.vendorInfo["studioName"];
    let managerName =
      this.state.vendorInfo && this.state.vendorInfo["managerName"];
    firebase
      .database()
      .ref("vendor")
      .child(studioName)
      .child("Manager")
      .set(managerName);
  };

  //when click add button
  addButton = () => {
    this.getStudioAndManagerName();
  };

  //get Studio Name and Managername and set it to state
  getStudioAndManagerName = () => {
    const studioName = document.getElementById("StudioName").value;
    const managerName = document.getElementById("ManagerName").value;
    this.setState(
      {
        vendorInfo: {
          studioName,
          managerName,
        },
      },
      () => this.addVendor()
    );
  };

  inputValue = () => {
    const namePut = document.getElementById("searchText").value;
    const inputValue = this.state.dataObj.hasOwnProperty(namePut);
    this.setState({
      inputValue,
      namePut,
    });
  };

  studioNameWithLink = () => {
    return (
      this.state.inputValue &&
      this.state.namePut && (
        <a href="#" className="underline">
          {this.state.namePut}
        </a>
      )
    );
  };

  //toggle table body
  renderTableBody = () => {
    let data = this.state.dataObj;
    let tbodyItem = [];

    for (let item in data) {
      let i = 0;
      tbodyItem.push(
        <tr>
          <th scope="row">{i++}</th>
          <td>{item}</td>
          <td>{Object.values(data[item])}</td>
        </tr>
      );
      i++;
    }
    return tbodyItem;
  };

  // get value from child functional component

  getvalueFromChildComponent = (value) => {
    const x = value === "Yes" ? true : false;
    let renderNewForm = x;
    this.setState({
      renderNewForm,
    });
  };

  //add new vendor
  addNewvendor = () => {
    return (
      <div>
        <CreateNewVendor addButton={this.addButton} />
      </div>
    );
  };

  render() {
    console.log("tes", this.state.renderNewForm);
    return (
      <div>
        <div>
          <div className="mainTitle">
            <p className="titleContext">Vendor Billing System</p>
          </div>
          <div className="margin-top titleJustify">
            <span className="searchText">Search Vendor</span>
            <input
              className="searchBox"
              type="text"
              placeholder="Type Vendor.."
              id="searchText"
            />

            <PopUpModal
              dataObj={this.state.dataObj}
              searchValue={this.inputValue}
              checkforValue={this.state.inputValue}
              getvalueFromChildComponent={this.getvalueFromChildComponent}
              buttonText="Search"
              modalTitle="Confirm"
              modalBodyText={
                this.state.inputValue
                  ? "Found in system"
                  : "Vendor does not exist in System. Are you sure you want to add new vendor?"
              }
            />
          </div>
        </div>
        {this.studioNameWithLink()}
        <div className="tableAndNewVendor">
          <div className="tableWidth">
            <ToggleComp tableBody={this.renderTableBody} />
          </div>
          <div className="tableWidth">
            {this.state.renderNewForm && (
              <CreateNewVendor addButton={this.addButton} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default InvoiceApp;
