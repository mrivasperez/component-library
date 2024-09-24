import React, { PropsWithChildren, useContext } from "react";
import NavigationContext from "../context/navigation";
import classNames from "classnames";

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  to: string;
}

const Link = ({ to, children }: PropsWithChildren<LinkProps>) => {
  const { navigate } = useContext(NavigationContext);

  const linkClassNames = classNames("text-blue-600");

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a onClick={handleClick} href={to} className={linkClassNames}>
      {children}
    </a>
  );
};

export default Link;
