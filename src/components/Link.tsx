import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  to: string;
}

const Link = ({ to, children }: PropsWithChildren<LinkProps>) => {
  const { navigate } = useNavigation();

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
