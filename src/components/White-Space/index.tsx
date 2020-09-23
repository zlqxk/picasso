import React from "react";
import { WhiteSpaceProps } from "./PropsType";
import classNames from "classnames";

const WhiteSpace: React.FC<WhiteSpaceProps> = props => {
  const { size, prefixCls, className } = props;
  const classes = classNames(prefixCls, className, {
    [size!]: size
  });
  return <div className={classes}></div>;
};

WhiteSpace.defaultProps = {
  prefixCls: "picasso-white-space",
  className: "",
  size: 'md'
};
export default WhiteSpace;
