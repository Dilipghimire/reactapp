import React from "react";

const DropDown = (props) => {

  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {}
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" onClick={props.getDropDownValue}>
        {props.data.map((item) => (
          <a class="dropdown-item" href="#">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
