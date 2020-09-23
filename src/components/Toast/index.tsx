import React from "react";

const Toast = (
  content: React.ReactNode,
  type: string,
  duration = 3,
  onClose?: () => void,
  mask = true
) => {
  return <div>Toast</div>;
};

const success = (
  content: React.ReactNode,
  duration?: number,
  onClose?: () => void,
  mask?: boolean
) => {
  return Toast(content, "success", duration, onClose, mask);
};

export default {
  success
};
