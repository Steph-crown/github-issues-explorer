import { FC } from "react";

const Input: FC<IProps> = ({
  type,
  className,
  withIcon,
  placeholder,
  ...rest
}) => {
  return (
    <input
      type={type || "text"}
      className={`input ${withIcon ? "icon-input" : ""} ${className} `}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  withIcon?: boolean;
}
