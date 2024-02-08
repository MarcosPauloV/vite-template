import { ComponentPropsWithRef } from "react";

namespace TextField {
  export interface IRootProps extends ComponentPropsWithRef<"div"> { }
  export namespace Input {
    export interface IProps extends ComponentPropsWithRef<"input"> {
      mask?:
      | "cpf"
      | "cnpj"
      | "number"
    }
    export interface IElement extends HTMLInputElement { }
  }
  export interface ILabelProps extends ComponentPropsWithRef<"label"> { }
  export type Size =
    | "small"
    | "medium"
    | "large";
  export type Variant =
    | "standard"
    | "outlined"
    | "filled";
}

export default TextField; 