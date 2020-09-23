import React from "react";
import classNames from "classnames";

interface ExtraEleProps {
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  prefixCls?: string;
  className?: string;
}
const ExtraEle: React.FC<ExtraEleProps> = props => {
  const { addonBefore, addonAfter, children, prefixCls, className } = props;
  const renderAddon = () => {
    if (!addonBefore && !addonAfter) return <>{children}</>;
    const groupClassName = classNames(`${prefixCls}-group`);
    const addonClassName = classNames(`${prefixCls}-addon`);
    return (
      <div className={groupClassName}>
        <span className={addonClassName}>{addonBefore}</span>
        {children}
        <span className={addonClassName}>{addonAfter}</span>
      </div>
    );
  };
  return <div className={className}>{renderAddon()}</div>;
};

export default ExtraEle;
