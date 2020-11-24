import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import PersonalWebSite from '../src/Pages/PerosnalWebSite';
import InvoiceApp from '../src/Pages/InvoiceApp/InvoiceApp'


//css
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Component/Pages
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link className="dropdown-item" to="/InvoiceApp">
          InvoiceApp
          </Link>
          
        </div>
      </div>

      <Switch>
        <Route exact path="/InvoiceApp">
          <InvoiceApp />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
