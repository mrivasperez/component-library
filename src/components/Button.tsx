import classNames from "classnames";
import React, { PropsWithChildren } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "danger" | "primary" | "secondary" | "success" | "warning";
  rounded?: true;
  outline?: true;
}

const Button = ({
  children,
  variant,
  rounded,
  outline,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  const buttonClassNames = classNames("px-4 py-1.5 border block", {
    "text-white": variant !== "secondary" && variant !== "warning",
    "bg-red-600 border-red-600": variant === "danger",
    "bg-blue-600 border-blue-600":
      variant === "primary" || variant === undefined,
    "bg-gray-200 border-gray-300": variant === "secondary",
    "bg-green-600 border-green-600": variant === "success",
    "bg-yellow-400 border-yellow-400": variant === "warning",
    "rounded-full": rounded,
    "bg-white": outline,
    "text-red-800": outline && variant === "danger",
    "text-blue-700":
      (outline && variant === "primary") || (outline && variant === undefined),
    "text-gray-800": outline && variant === "secondary",
    "text-green-800": outline && variant === "success",
    "text-yellow-800": outline && variant === "warning"
  });

  return (
    <button {...rest} className={buttonClassNames}>
      {children ? children : "Okay"}
    </button>
  );
};

export default Button;
