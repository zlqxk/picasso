import React from 'react';
import Toast from '../index';

const Demo = () => {
  const success = () => {
    Toast.success('系统错误', 200)
  }
  const success2 = () => {
    Toast.success('大家好，我是渣渣辉，大家好，我是渣渣辉，大家好，我是渣渣辉', 200)
  }
  return (
    <div>
      <button onClick={success}>success</button>
      <button onClick={success2}>success</button>
    </div>
  )
}

export default Demo