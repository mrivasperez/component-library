import classNames from "classnames";
import React, { PropsWithChildren } from "react";

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  className: string;
  children: React.ReactNode;
}

const Panel = ({
  className,
  children,
  ...rest
}: PropsWithChildren<PanelProps>) => {
  const panelClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return (
    <div {...rest} className={panelClassNames}>
      {children}
    </div>
  );
};

export default Panel;
