import React from "react";
import { InputPropsType } from "./PropsType";

interface InputProps extends InputPropsType {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Input: React.FC<InputProps> = props => {
  const { onBlur, onFocus, type, placeholder, onChange } = props;
  const onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = (e.target as any).value;
    onBlur && onBlur(value);
  };
  const onInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = (e.target as any).value;
    onFocus && onFocus(value);
  };

  return (
    <>
      <input
        onBlur={onInputBlur}
        onFocus={onInputFocus}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: ""
};
export default Input;
