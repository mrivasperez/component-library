import React from "react";
import Link from "./Link";

const Sidebar = () => {
  const links = [
    {
      label: "Accordion",
      path: "/"
    },
    {
      label: "Buttons",
      path: "/buttons"
    },
    {
      label: "Dropdown",
      path: "/dropdown"
    }
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link to={link.path} key={link.label}>
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col">
      {renderedLinks}
    </div>
  );
};

export default Sidebar;
