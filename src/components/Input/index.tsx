import React from "react";
import Input from "./Input";
import { InputPropsType } from "./PropsType";
import classNames from "classnames";

interface InputItem extends InputPropsType {
  prefixCls?: string;
  className?: string;
  fashion?: "underline" | "stick";
  size?: "large" | "middle" | "small";
  onChange?: (value: string) => void;
  disabled?: boolean
}

const InputItem: React.FC<InputItem> = props => {
  const {
    onBlur,
    onFocus,
    prefixCls,
    className,
    fashion,
    size,
    placeholder,
    onChange,
    disabled
  } = props;
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${fashion}`]: fashion,
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-disabled`]: disabled,
  });
  const controlCls = `${prefixCls}-control`;
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = e.target;
    const { value } = el;
    onChange && onChange(value);
  };
  return (
    <div className={classes}>
      <div className={controlCls}>
        <Input
          type="text"
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
};

InputItem.defaultProps = {
  prefixCls: "picasso-input",
  fashion: "underline",
  size: "middle",
  disabled: false
};

export default InputItem;
