import { ComponentPropsWithRef } from "react";

namespace TextField {
  export interface IRootProps extends ComponentPropsWithRef<"div"> { }
  export interface IInputProps extends ComponentPropsWithRef<"input"> { }
}

export default TextField; 