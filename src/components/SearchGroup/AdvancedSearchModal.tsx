import { FC } from "react";
import DateSelect from "../DateSelect";
import Modal from "../Modal";
import Select, { IOption } from "../Select";

const AdvancedSearchModal: FC<IProps> = ({ isOpen, handleClose }) => {
  return (
    <Modal heading="Advanced search" isOpen={isOpen} handleClose={handleClose}>
      <Select
        options={fakeOptions}
        onChange={(ev) => {
          console.log("ev.target.value", ev.target.value);
        }}
      />
      <DateSelect
        className="mt-8"
        handleChange={(val) => {
          console.log("the value is", val);
        }}
      />
    </Modal>
  );
};

export default AdvancedSearchModal;

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
}

const fakeOptions: IOption[] = [
  {
    label: "Hey",
    value: "hey",
  },
  {
    label: "Hesy",
    value: "hesy",
  },
  {
    label: "sHey",
    value: "shey",
  },
];
