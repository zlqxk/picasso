import React from "react";
import { InputPropsType } from "./PropsType";
import classNames from "classnames";
import Input from "./Input";
import ExtraEle from "./extraEle";

interface InputItem extends InputPropsType {
  prefixCls?: string;
  className?: string;
  fashion?: "underline" | "stick";
  size?: "large" | "middle" | "small";
  onChange?: (value: string) => void;
  disabled?: boolean;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
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
    disabled,
    addonBefore,
    addonAfter
  } = props;
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${fashion}`]: fashion,
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-disabled`]: disabled
  });
  const controlCls = `${prefixCls}-control`;
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = e.target;
    const { value } = el;
    onChange && onChange(value);
  };
  return (
    <ExtraEle
      addonBefore={addonBefore}
      addonAfter={addonAfter}
      prefixCls={prefixCls}
      className={classes}
    >
      <div className={controlCls}>
        <Input
          type="text"
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          onChange={onInputChange}
        />
      </div>
    </ExtraEle>
  );
};

InputItem.defaultProps = {
  prefixCls: "picasso-input",
  fashion: "underline",
  size: "middle",
  disabled: false
};

export default InputItem;
