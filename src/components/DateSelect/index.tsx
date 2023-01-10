import { useState } from "react";
import { ChangeEvent } from "react";
import { FC } from "react";
import Select, { IOption } from "../Select";

const DateSelect: FC<IProps> = ({ className, handleChange, ...rest }) => {
  const [selectValue, setSelectValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log("the selct value is", e.target.value);
    setSelectValue((prev) => e.target.value);
    handleChange(e.target.value + dateValue);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDateValue((prev) => e.target.value);
    handleChange(selectValue + e.target.value);
  };

  return (
    <div className={`date-select ${className}`}>
      <Select
        value={selectValue}
        className="w-min pr-8 text-center rounded-tr-none rounded-br-none bg-sub-default-light dark:bg-sub-default-dark"
        options={dateOptions}
        onChange={handleSelectChange}
      />
      {/* <> {console.log("date", dateValue)}</>
      <> {console.log("seect", selectValue)}</> */}
      <input
        type="date"
        value={dateValue}
        {...rest}
        className="w-full rounded-tl-none rounded-bl-none  bg-[transparent] border-select-border-light dark:border-select-border-dark border-l-0 font-semibold py-[7px]"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default DateSelect;

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  handleChange: (val: string) => void;
}

const dateOptions: IOption[] = [
  { label: "on", value: "" },
  { label: "bef", value: "<" },
  { label: "aft", value: ">" },
];
