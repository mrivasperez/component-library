import React, { useContext } from "react";
import NavigationContext from "../context/navigation";

interface RouteProps {
  path: string;
  children: React.ReactNode;
}

const Route = ({ path, children }: RouteProps) => {
  const { currentPath } = useContext(NavigationContext);

  if (path === currentPath) {
    return children;
  }

  return null;
};

export default Route;
