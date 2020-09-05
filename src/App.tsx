import React from 'react';
import Button from './components/Button'
function App() {
  return (
    <div style={{padding: '20px'}} className="App">
      <Button>123</Button>
      <br/>
      <Button type={"ghost"}>123</Button>
      <br/>
      <Button type={"warning"}>123</Button>
      <br/>
      <Button>123</Button>
      <br/>
      <Button size={"small"} type={"ghost"}>123</Button>
      <br/>
      <Button size={"large"} type={"warning"}>123</Button>
    </div>
  );
}

export default App;
