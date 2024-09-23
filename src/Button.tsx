import React, { PropsWithChildren } from "react";

type ButtonProps = {
  variant?: string;
  rounded?: true;
  outline?: true;
};

const Button = ({
  children,
  variant,
  rounded,
  outline
}: PropsWithChildren<ButtonProps>) => {
  return (
    <div>
      <button
        className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white 
  "
      >
        {children ? children : "Okay"}
      </button>
    </div>
  );
};

export default Button;
