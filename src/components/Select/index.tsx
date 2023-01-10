import { FC } from "react";

const Select: FC<IProps> = ({ className, options, ...rest }) => {
  return (
    <select className={`select ${className}`} {...rest}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;

interface IProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options: IOption[];
}

export interface IOption {
  label: string;
  value: string;
}
