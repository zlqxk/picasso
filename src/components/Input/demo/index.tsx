import React from "react";
import Input from "../index";
import "./index.scss";
const InputDemo = () => {
  return (
    <div>
      <Input onChange={(value) => {console.log(value)}} placeholder="123" />
      <br />
      <Input onBlur={(value) => {console.log(value)}} size="middle" placeholder="123" />
      <br />
      <Input size="large" placeholder="123" />
      <br />
      <Input fashion="stick" placeholder="123" />
      <br />
      <Input fashion="stick" size="small" placeholder="123" />
      <br />
      <Input fashion="stick" size="large" placeholder="123" className="zl" />
    </div>
  );
};

export default InputDemo;
