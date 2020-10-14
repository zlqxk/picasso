import React from 'react';
import Toast from '../index';
import Button from '../../Button'

const Demo = () => {
  const info = () => {
    Toast.info('系统错大神阿萨德阿萨德误', 2, () => {
      console.log(1)
    }, false)
  }
  return (
    <div>
      <Button onClick={info}>我是info</Button>
    </div>
  )
}

export default Demo