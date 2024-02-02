import React, { forwardRef } from "react";
import type TextField from "./text-field.types";
import cltw from "@utils/cltw";

const Root: React.FC<TextField.IRootProps> = (
  { children, ...props }
) => {
  return (
    <div
      {...props}
    >
      {children}
    </div>
  );
};

const Input = forwardRef<HTMLInputElement, TextField.IInputProps>(
  ({ ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={
          cltw("")
        }
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

const TextField = {
  Root,
  Input
};

export default TextField;