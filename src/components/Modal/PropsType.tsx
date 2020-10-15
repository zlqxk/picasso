export interface ModalProps {
  visible: boolean;
  title?: React.ReactNode;
  footer: Array<Action>;
  onClose?: (
    title: React.ReactNode,
    message: React.ReactNode,
    footer: Array<Action>
  ) => void;
}

export interface Action {
  text: string;
  onClick?: () => void;
}
