import React from "react";
import classNames from "classnames";
import { ButtonPropsType } from "./PropsType";
import TouchFeedback from "rmc-feedback";

interface ButtonProps extends ButtonPropsType {
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  style?: React.CSSProperties;
  prefixCls?: string;
  inline?: boolean;
}

const Button: React.FC<ButtonProps> = props => {
  const {
    className,
    type,
    size,
    disabled,
    onClick,
    prefixCls,
    style,
    inline,
    ...restProps
  } = props;
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-inline`]: inline,
  });

  return (
    <TouchFeedback activeClassName={`${prefixCls}-active`} disabled={disabled}>
      <a
        onClick={disabled ? undefined : onClick}
        style={style}
        role="button"
        {...restProps}
        className={classes}
      >
        {props.children}
      </a>
    </TouchFeedback>
  );
};

Button.defaultProps = {
  type: "primary",
  size: "middle",
  prefixCls: "picasso-btn",
  disabled: false,
  inline: false
};
export default Button;
