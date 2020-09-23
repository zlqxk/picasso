import React from "react";
import Input from "../index";
import "./index.scss";
const InputDemo = () => {
  return (
    <div>
      <Input addonBefore={<p style={{marginLeft: '12px'}}>短信：</p>} addonAfter={<p>获取验证码</p>} placeholder="123" />
      <br />
      <Input size="middle" placeholder="123" />
      <br />
      <Input size="large" placeholder="123" />
      <br />
      <Input fashion="stick" />
      <br />
      <Input fashion="stick" size="small" />
      <br />
      <Input fashion="stick" size="large" className="xx" />
    </div>
  );
};

export default InputDemo;
