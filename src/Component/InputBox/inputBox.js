import React, { Fragment } from "react";

const InputBox = (props) => {
  return (
    <div>
      <input
        placeholder={props.placeholder}
        value={props.value}
        className ={props.className}
        onKeyDown={props.onKeyDown}
        onChange={props.onChange}
      ></input>
    </div>
  );
};

export default InputBox;
