import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
interface ToastType {}

const prefixCls = "picasso-toast";
const classes = classNames(prefixCls);
const Toast = (
  content: React.ReactNode,
  type: string,
  duration = 3,
  onClose?: () => void,
  mask = true
) => {
  const container = document.createElement("div");
  const masker = document.createElement("div");
  container.className = classes;
  masker.className = `${prefixCls}-mask`;
  const body = document.getElementsByTagName("body")[0];
  // 声明挂载元素
  const App: React.FC<ToastType> = () => {
    return <div className={`${prefixCls}-content`}>{content}</div>;
  };
  mask && body.appendChild(masker);
  body.appendChild(container);
  ReactDOM.render(<App />, container);
  setTimeout(() => {
    container.className = classNames(classes, "appear");
  });
  if (duration < 0) return;
  setTimeout(() => {
    container.className = classes;
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(container);
      mask && body.removeChild(masker);
      body.removeChild(container);
      onClose && onClose();
    }, 200);
  }, duration * 1000);
};

const info = (
  content: React.ReactNode,
  duration?: number,
  onClose?: () => void,
  mask?: boolean
) => {
  Toast(content, "info", duration, onClose, mask);
};

const success = (
  content: React.ReactNode,
  duration?: number,
  onClose?: () => void,
  mask?: boolean
) => {
  Toast(content, "success", duration, onClose, mask);
};


export default {
  info,
  success
};
