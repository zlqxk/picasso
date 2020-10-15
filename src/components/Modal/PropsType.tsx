export interface ModalProps {
  visible: boolean;
  title?: React.ReactNode;
  footer?: Array<Action>;
}

export interface Action {
  text: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>
}