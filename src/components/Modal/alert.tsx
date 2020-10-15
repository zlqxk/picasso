import React from "react";
import ReactDOM from "react-dom";
import Modal from "./modal";
import { Action } from "./PropsType";

let div: HTMLDivElement;

const onClose = (
  title: React.ReactNode,
  message: React.ReactNode,
  footer: Array<Action>
) => {
  ReactDOM.render(
    <Modal visible={false} title={title} footer={footer}>
      {message}
    </Modal>,
    div
  );
  setTimeout(() => {
    document.body.removeChild(div);
  }, 200);
};

export default function alert(
  title: React.ReactNode,
  message: React.ReactNode,
  footer = [
    { text: "确定", onClick: () => {} },
    { text: "取消", onClick: () => {} },
  ]
) {
  div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(
    <Modal visible={true} title={title} footer={footer} onClose={onClose}>
      {message}
    </Modal>,
    div
  );
}
