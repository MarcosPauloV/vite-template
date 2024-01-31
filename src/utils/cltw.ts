import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cltw = (...classValue: ClassValue[]) => {
  return twMerge(clsx(...classValue));
};

export default cltw;