import React from 'react';
import Toast from '../index';

const Demo = () => {
  const success = () => {
    Toast.success('123', 2)
  }
  return (
    <div>
      <button onClick={success}>success</button>
    </div>
  )
}

export default Demo