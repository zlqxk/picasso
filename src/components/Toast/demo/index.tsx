import React from "react";
import Toast from "../index";
import Button from "../../Button";

const Demo = () => {
  const info = () => {
    const a = Toast.info("系统错大神阿萨德阿萨德误", 2, () => {
      console.log(1);
    });
    console.log(a, 'a')
  };
  const success = () => {
    Toast.success(
      "请求成功",
      2,
      () => {
        console.log(1);
      },
      false
    );
  };
  const fail = () => {
    Toast.fail(
      "因为网络错误，您的请求失败，请稍后再试",
      2,
      () => {
        console.log(1);
      },
      false
    );
  };

  const loading = () => {
    Toast.loading(
      "正在加载",
      -2,
      () => {
        console.log(1);
      },
      false
    );
  };
  return (
    <div>
      <Button onClick={info}>我是info</Button>
      <br />
      <Button onClick={success}>我是success</Button>
      <br />
      <Button onClick={fail}>我是fail</Button>
      <br />
      <Button onClick={loading}>我是Loading</Button>
      <br/>
      <Button onClick={Toast.hide}>list</Button>
    </div>
  );
};

export default Demo;
