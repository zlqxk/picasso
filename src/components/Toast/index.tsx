import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
interface ToastType {

}

const prefixCls = "picasso-toast";
const classes = classNames(prefixCls)
const Toast = (
  content: React.ReactNode,
  type: string,
  duration = 3,
  onClose?: () => void,
  mask = true
) => {
  const container = document.createElement("div");
  container.className = classes
  const body = document.getElementsByTagName("body")[0];
  // 声明挂载元素
  const App: React.FC<ToastType> = (props) => {
    return <div className={`${classes}-content`}>{content}</div>;
  }
  body.appendChild(container);
  ReactDOM.render(transformClass(App), container);
  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(container);
    body.removeChild(container);
  }, duration * 1000);
};

const transformClass = (Node: React.FC<ToastType>) => {
  return (
    <div className="123">
      <Node />
    </div>
  )
}

const success = (
  content: React.ReactNode,
  duration?: number,
  onClose?: () => void,
  mask?: boolean
) => {
  Toast(content, "success", duration, onClose, mask);
};

export default {
  success,
};
