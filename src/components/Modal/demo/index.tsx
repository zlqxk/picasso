import React, { useState } from "react";
import Modal from "../index";
import Button from "../../Button";
const alert = Modal.alert;
const Dialog = Modal.Dialog

const Demo = () => {
  const [visible, setvisible] = useState(false);
  const renderAlert = () => {
    alert('title', 'content', [
      {text: '确定', onClick: () => {console.log('确定')}}
    ])
  }
  return (
    <>
      <Dialog
        visible={visible}
        title="提示"
        footer={[
          {
            text: "确定",
            onClick: () => {
              console.log("确定");
            },
          },
          {
            text: "取消",
            onClick: () => {
              setvisible(false);
              console.log("取消");
            },
          },
        ]}
      >
        确定要这样吗
      </Dialog>
      <Button
        onClick={() => {
          setvisible(true);
        }}
      >
        Modal
      </Button>
      <br />
      <Button
        onClick={renderAlert}
      >
        Alert
      </Button>
    </>
  );
};

export default Demo;
