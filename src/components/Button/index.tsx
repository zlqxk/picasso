import React from "react";
import classNames from "classnames";
import { ButtonPropsType } from "./PropsType";
import TouchFeedback from "rmc-feedback";

interface ButtonProps extends ButtonPropsType {
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  inline?: boolean;
  icon?: React.ReactNode;
  activeClassName?: string;
  activeStyle?: boolean | React.CSSProperties;
  style?: React.CSSProperties;
  prefixCls?: string;
}

const Button: React.FC<ButtonProps> = props => {
  const {
    className,
    type,
    size,
    disabled,
    onClick,
    inline,
    prefixCls
  } = props;
  const classes = classNames(prefixCls, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${size}`]: size
  });

  return (
    <TouchFeedback
      activeClassName={`${prefixCls}-active`}
    >
      <a role="button" className={classes}>
        {props.children}
      </a>
    </TouchFeedback>
  );
};

Button.defaultProps = {
  type: "primary",
  size: "middle",
  prefixCls: 'picasso-btn'
};
export default Button;
