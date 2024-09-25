import Link from "./Link";
import useNavigation from "../hooks/useNavigation";
import classNames from "classnames";

const Sidebar = () => {
  const { currentPath } = useNavigation();
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
    },
    {
      label: "Modal",
      path: "/modal"
    }
  ];

  const renderedLinks = links.map((link) => {
    const linkClassNames = classNames("mb-3", {
      // active link styling
      "font-bold border-l-4 border-blue-400 pl-2": link.path === currentPath
    });
    return (
      <Link to={link.path} key={link.label} className={linkClassNames}>
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  );
};

export default Sidebar;
