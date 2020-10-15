import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { ModalProps } from "./PropsType";
import TouchFeedback from "rmc-feedback";

const prefixCls = "picasso-modal";
let firstRender = true;

const Modal: React.FC<ModalProps> = props => {
  const { visible, title, children, footer } = props;
  const [appearState, setAppearState] = useState<boolean>(false);
  const [visibleState, setVisibleState] = useState<boolean>(false);

  const maskAppearCls = classNames(`${prefixCls}-mask`, {
    appear: appearState,
    hide: !appearState,
  });

  const appearCls = classNames(prefixCls, {
    appear: appearState,
    hide: !appearState,
  });

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
    } else {
      window.requestAnimationFrame(() => {
        setAppearState(visible);
      });
      if (!visible) {
        setTimeout(() => {
          setVisibleState(visible);
        }, 200);
      } else {
        setVisibleState(visible);
      }
    }
  }, [visible]);

  const renderFooter = () => {
    return (
      Array.isArray(footer) &&
      footer.map((item, index) => {
        const classes = classNames(`${prefixCls}-footer-btn`, {
          [`${prefixCls}-footer-border`]: index !== 0,
        });
        return (
          <TouchFeedback key={index} activeClassName="active">
            <div onClick={item.onClick} className={classes}>
              {item.text}
            </div>
          </TouchFeedback>
        );
      })
    );
  };

  return visibleState ? (
    <div className={`${prefixCls}-box`}>
      <div className={maskAppearCls}></div>
      <div className={appearCls}>
        <div className={`${prefixCls}-title`}>{title}</div>
        <div className={`${prefixCls}-content`}>{children}</div>
        <div className={`${prefixCls}-footer`}>{renderFooter()}</div>
      </div>
    </div>
  ) : null;
};

Modal.defaultProps = {
  visible: false,
  title: "提示",
  footer: [
    { text: "确定", onClick: () => {} },
    { text: "取消", onClick: () => {} },
  ],
};
export default Modal;
