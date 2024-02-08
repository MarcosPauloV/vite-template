import React, { ChangeEvent, forwardRef, useCallback, useState } from "react";
import type TextField from "./text-field-types";
import cltw from "@utils/cltw";
import TextFieldMask from "@utils/text-field-mask";

const Root: React.FC<TextField.IRootProps> = (
  { children, ...props }
) => {
  return (
    <div
      data-testid="text-field-root"
      className={
        cltw(
          "relative",
          props.className
        )
      }
      {...props}
    >
      {children}
    </div>
  );
};

Root.displayName = "text-field-root";

const Input = forwardRef<TextField.Input.IElement, TextField.Input.IProps>(
  ({ onChange, mask, ...props }, ref) => {

    const [inputContent, setInputContent] = useState<boolean>(false);

    const onChangeCallback = useCallback((event: ChangeEvent<TextField.Input.IElement>) => {
      if (mask === "cpf") {
        const value = TextFieldMask.cpf(event.target.value);
        event.target.value = value;
      }

      if (mask === "cnpj") {
        const value = TextFieldMask.cnpj(event.target.value);
        event.target.value = value;
      }

      if (mask === "number") {
        const value = TextFieldMask.number(event.target.value);
        event.target.value = value;
      }

      if (onChange) {
        onChange;
      }

      if (event.target.value === "") {
        setInputContent(false);
      } else {
        setInputContent(true);
      }

    }, [onChange, mask]);

    return (
      <input
        data-testid="text-field-input"
        data-change={inputContent}
        ref={ref}
        className={
          cltw(
            "peer rounded-md w-full px-4 py-3 text-sm text-gray-600 border-2 = focus:bg-white bg-white placeholder:bg-gray-200 placeholder-shown:border-none"
          )
        }
        {...props}
        onChange={onChangeCallback}
      />
    );
  }
);

Input.displayName = "text-field-input";

const Label: React.FC<TextField.ILabelProps> = ({ children, htmlFor, ...props }) => {
  return (
    <label
      data-testid="text-field-label"
      {...props}
      htmlFor={htmlFor}
      className={
        "absolute left-5 top-3.5 px-1 text-sm transition-all bg-white rounded text-gray-500 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:left-5 peer-placeholder-shown:bg-gray-200 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-blue-500 peer-focus:bg-white peer-focus:font-semibold peer-data-[change=true]:-top-2.5 peer-data-[change=true]:left-2"
      }
    >
      {children}
    </label>
  );
};

Label.displayName = "text-field-label";

const TextField = {
  Root,
  Input,
  Label
};

export default TextField;