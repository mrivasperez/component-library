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
    event.preventDefault();
    navigate(to);
  };

  return <a onClick={handleClick}>{children}</a>;
};

export default Link;
