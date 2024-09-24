import React, { PropsWithChildren, useContext } from "react";
import NavigationContext from "../context/navigation";

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  to: string;
}

const Link = ({ to, children }: PropsWithChildren<LinkProps>) => {
  const { navigate } = useContext(NavigationContext);

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
    <a onClick={handleClick} href={to}>
      {children}
    </a>
  );
};

export default Link;
