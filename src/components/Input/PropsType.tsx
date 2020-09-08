export type InputEventHandler = (value: string) => void;
export interface InputPropsType {
  onBlur?: InputEventHandler;
  onFocus?: InputEventHandler;
  type?: "text" | "number" | "password";
  placeholder?: string;
}
