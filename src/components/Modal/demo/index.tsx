import React, { useState } from "react";
import Modal from "../modal";
import Button from '../../Button'

const Demo = () => {
  const [visible, setvisible] = useState(false)
  // useEffect(() => {
  //   setvisible(true)
  // }, [])
  return (
    <>
      <Modal 
        visible={visible}
        title="提示"
        footer={[
          {text: '确定', onClick: () => {console.log('确定')}},
          {text: '取消', onClick: () => {
            setvisible(false)
            console.log('取消')
          }}
        ]}
      >
        确定要这样吗
      </Modal>
      <Button onClick={() => {setvisible(true)}}>点击</Button>
    </>
  )
};

export default Demo;
