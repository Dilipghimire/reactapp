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
    checkStudio: false,
    inputValue: false,
    namePut: "",
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

  renderTableBody = () => {
    let data = this.state.dataObj;
    for (let item in data) {
      let i = 1;
      return (
        <tr>
          <th scope="row">{i++}</th>
          <td>{item}</td>
          <td>{Object.values(data[item])}</td>
        </tr>
      );
    }
  };

  render() {
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
        <div>
          {this.state.checkVendorExistence && (
            <CreateNewVendor addButton={this.addButton} />
          )}
        </div>
        <ToggleComp
          data={this.state.dataObj}
          tableBody={this.renderTableBody()}
        />
      </div>
    );
  }
}

export default InvoiceApp;
