import React from "react";
import type Button from "./button-types";
import cltw from "../../utils/cltw";

const Box: React.FC<Button.IBoxProps> = ({ children, ...props }) => {
  return (
    <div
      data-testid="button-box"
      className="flex justify-center items-center"
      {...props}
    >
      {children}
    </div>
  );
};

Box.displayName = "button-box";

const Root: React.FC<Button.IRootProps> = ({ children, ...props }) => {
  return (
    <button
      data-testid="button-root"
      className={cltw("px-4 py-2 bg-primary-300 font-bold text-sm text-secondary-100 rounded")}
      {...props}
    >
      {children}
    </button>
  );
};

Root.displayName = "button-root";

const Button = {
  Box,
  Root
};


export default Button;