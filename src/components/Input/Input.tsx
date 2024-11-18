import { vars } from "@/styles/theme.css";
import {
  container,
  input,
  labelContainer,
  inputBoxRecipe,
  InputVariants,
} from "./Input.css";
import { Search } from "@/icons";
import type { InputHTMLAttributes } from "react";

export type InputProps = InputVariants &
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    placeholder?: string;
    icon: boolean;
    value?: string;
  };

export const Input = (props: InputProps) => {
  const { label, placeholder, icon, className, ...rest } = props;
  return (
    <div className={container}>
      {label && (
        <span className={`${labelContainer} ${vars.fonts.label3}`}>
          {label}
        </span>
      )}
      <div className={inputBoxRecipe({ state: props.state })}>
        {icon && <Search />}
        <input
          className={`${input} ${className}`}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </div>
  );
};
