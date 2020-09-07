import React from 'react';
import Button from './components/Button'
function App() {
  return (
    <div style={{padding: '20px'}} className="App">
      <Button inline onClick={() => {console.log(123)}} disabled>123sdsd</Button>
      <br/>
      <Button inline disabled type={"ghost"}>123</Button>
      <br/>
      <Button inline onClick={() => {console.log(123)}} type={"warning"}>123</Button>
      <br/>
      <Button inline>123</Button>
      <br/>
      <Button inline size={"small"} type={"ghost"}>123</Button>
      <br/>
      <Button inline disabled size={"large"} type={"warning"}>123</Button>
    </div>
  );
}

export default App;
