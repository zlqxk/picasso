import React from 'react';
import Button from '../index'
function ButtonDemo() {
  return (
    <div style={{padding: '20px'}} className="ButtonDemo">
      <Button onClick={() => {console.log(123)}} disabled>123sdsd</Button>
      <br/>
      <Button disabled type={"ghost"}>123</Button>
      <br/>
      <Button onClick={() => {console.log(123)}} type={"warning"}>123</Button>
      <br/>
      <Button>123</Button>
      <br/>
      <Button size={"small"} type={"ghost"}>123</Button>
      <br/>
      <Button disabled size={"large"} type={"warning"}>123</Button>
    </div>
  );
}

export default ButtonDemo;
