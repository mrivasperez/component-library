import classNames from "classnames";
import React, { PropsWithChildren } from "react";

type ButtonProps = {
  variant?: "danger" | "primary" | "secondary" | "success" | "warning";
  rounded?: true;
  outline?: true;
};

const Button = ({
  children,
  variant,
  rounded,
  outline
}: PropsWithChildren<ButtonProps>) => {
  // TODO create classNames
  const buttonClassNames = classNames("px-3 py-1.5 border", {
    "text-white": variant !== "secondary" && variant !== "warning",
    "bg-red-600 border-red-600": variant === "danger",
    "bg-blue-600 border-blue-600":
      variant === "primary" || variant === undefined,
    "bg-gray-100 border-gray-200": variant === "secondary",
    "bg-green-600 border-green-600": variant === "success",
    "bg-yellow-400 border-yellow-400": variant === "warning"
  });

  return (
    <div>
      <button className={buttonClassNames}>
        {children ? children : "Okay"}
      </button>
    </div>
  );
};

export default Button;
