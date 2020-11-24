import React, { Fragment } from "react";

//const
import summary from "../Pages/summaryText";

//style
import "./PersonalWebSite.css";

class PerosnalWebSite extends React.Component {
  render() {
    return (
      //Heading
      <div>
        <div className="header">
          <p className="description">
            Hey It's me Dilip <br />
            FullStack Web Developer
          </p>
        </div>

        <div className="textCenter textStyle">-Summary About Me-</div>
        <div className="allignCard">
          {summary.map((item) => (
            <div className="summaryDetails commonColor">{item.CompanyName}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default PerosnalWebSite;
