import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import { Success, Fail, Loading } from "../Icon/index";
const typeMap = {
  success: <Success />,
  fail: <Fail />,
  info: null,
  loading: <Loading />,
};

let toastList: Array<HTMLElement> = [];
let timeoutList: Array<any> = [];

const prefixCls = "picasso-toast";
const classes = classNames(prefixCls);
const body = document.getElementsByTagName("body")[0];

const Toast = (
  content: React.ReactNode,
  type: "success" | "fail" | "info" | "loading",
  duration = 3,
  mask = true,
  onClose?: () => void
) => {
  const container = createElement("div", classes);
  const masker = createElement("div", `${prefixCls}-mask`);

  // 声明挂载元素
  const App: React.FC = () => {
    return (
      <div className={`${prefixCls}-content`}>
        <div>{typeMap[type]}</div>
        <div>{content}</div>
      </div>
    );
  };

  if (mask) {
    toastList.push(masker);
    body.appendChild(masker);
  }
  toastList.push(container);
  body.appendChild(container);
  ReactDOM.render(<App />, container);
  setTimeout(() => {
    container.className = classNames(classes, "appear");
  });

  let timeoutId = setTimeout(() => {
    if (duration >= 0) {
      container.className = classes;
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(container);
        if (mask) {
          body.removeChild(masker);
          toastList = toastList.filter(item => item !== masker);
        }
        body.removeChild(container);
        toastList = toastList.filter(item => item !== container);
        onClose && onClose();
      }, 200);
    }
  }, duration * 1000);
  
  timeoutList.push(timeoutId);
  // TODO 暂时返回null
  return null;
};

const createElement = (type: string, className: string) => {
  const elementDom = document.createElement(type);
  elementDom.className = className;
  return elementDom;
};

const info = (
  content: React.ReactNode,
  duration?: number,
  onClose?: () => void,
  mask?: boolean
) => {
  return Toast(content, "info", duration, mask, onClose);
};

const success = (
  content: React.ReactNode,
  duration?: number,
  onClose?: () => void,
  mask?: boolean
) => {
  return Toast(content, "success", duration, mask, onClose);
};

const fail = (
  content: React.ReactNode,
  duration?: number,
  onClose?: () => void,
  mask?: boolean
) => {
  return Toast(content, "fail", duration, mask, onClose);
};

const loading = (
  content: React.ReactNode,
  duration?: number,
  onClose?: () => void,
  mask?: boolean
) => {
  return Toast(content, "loading", duration, mask, onClose);
};

const hide = () => {
  timeoutList.forEach(item => {
    clearTimeout(item);
  });
  toastList.forEach(item => {
    body.removeChild(item);
  });
  toastList = [];
  // TODO 通过hide关闭暂时不支持执行onclose参数
};

export default {
  info,
  success,
  fail,
  loading,
  hide,
};
