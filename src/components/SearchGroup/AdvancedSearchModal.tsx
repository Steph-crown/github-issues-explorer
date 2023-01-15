import { FC } from "react";
import { SearchIcon } from "../../assets/svgs";
import DateSelect from "../DateSelect";
import Input from "../Input";
import Modal from "../Modal";
import Select, { IOption } from "../Select";

const AdvancedSearchModal: FC<IProps> = ({ isOpen, handleClose }) => {
  const handleClearFilters = () => {};

  const handleApplyFilters = () => {};

  return (
    <Modal
      heading="Advanced search"
      isOpen={isOpen}
      handleClose={handleClose}
      cancelLabel="Clear filters"
      confirmLabel="Apply filters"
      handleCancel={handleClearFilters}
      handleConfirm={handleApplyFilters}
    >
      <section className=" pb-8 border-b border-b-border-light dark:border-b-border-dark mb-8 flex items-center flex-col md:flex-row">
        <div className="search-form">
          <Input withIcon={true} placeholder="Search by issue name" />
          <button className="input-icon-btn">
            <SearchIcon />
          </button>
        </div>
        <Select
          options={fakeOptions}
          onChange={(ev) => {
            console.log("ev.target.value", ev.target.value);
          }}
          className="w-full md:w-44 ml-0 md:ml-6 mt-3 md:mt-0"
        />
      </section>

      <section className="flex items-center flex-wrap justify-between">
        <div className="form-group mb-6 w-full md:w-[48%] lg:w-[31%]">
          <label htmlFor="">State of issue</label>
          <Select
            options={fakeOptions}
            onChange={(ev) => {
              console.log("ev.target.value", ev.target.value);
            }}
          />
        </div>
        <div className="form-group mb-6 w-full md:w-[48%] lg:w-[31%]">
          <label htmlFor="">State of issue</label>
          <Select
            options={fakeOptions}
            onChange={(ev) => {
              console.log("ev.target.value", ev.target.value);
            }}
          />
        </div>
        <div className="form-group mb-6 w-full md:w-[48%] lg:w-[31%]">
          <label htmlFor="">State of issue</label>
          <Select
            options={fakeOptions}
            onChange={(ev) => {
              console.log("ev.target.value", ev.target.value);
            }}
          />
        </div>

        <div className="form-group mb-6 w-full md:w-[48%] lg:w-[31%]">
          <label htmlFor="">State of issue</label>
          <DateSelect handleChange={(ev) => {}} />
        </div>
        <div className="form-group mb-6 w-full md:w-[48%] lg:w-[31%]">
          <label htmlFor="">State of issue</label>
          <DateSelect handleChange={(ev) => {}} />
        </div>
        <div className="form-group mb-6 w-full md:w-[48%] lg:w-[31%]">
          <label htmlFor="">State of issue</label>
          <DateSelect handleChange={(ev) => {}} />
        </div>
      </section>

      <section className="flex items-center flex-wrap justify-between">
        <div className="form-group mb-6 w-full md:w-[48%]">
          <label htmlFor="">State of issue</label>
          <Input placeholder="steph-crown, github, electron" />
        </div>
        <div className="form-group mb-6 w-full md:w-[48%]">
          <label htmlFor="">State of issue</label>
          <Input placeholder="steph-crown, github" />
        </div>
      </section>

      <section className="flex items-center flex-wrap justify-between">
        <div className="form-group mb-6 w-full md:w-[48%]">
          <label htmlFor="">State of issue</label>
          <Input placeholder="steph-crown, github, electron" />
        </div>
        <div className="form-group mb-6 w-full md:w-[48%]">
          <label htmlFor="">State of issue</label>
          <Input placeholder="steph-crown, github" />
        </div>
      </section>

      <section className="flex items-center flex-wrap justify-between">
        <div className="form-group mb-6 w-full md:w-[48%]">
          <label htmlFor="">State of issue</label>
          <Input placeholder="steph-crown, github, electron" />
        </div>
        <div className="form-group mb-6 w-full md:w-[48%]">
          <label htmlFor="">State of issue</label>
          <Input placeholder="steph-crown, github" />
        </div>
      </section>

      <section className="flex items-center flex-wrap justify-between">
        <div className="form-group mb-6 w-full md:w-[48%]">
          <label htmlFor="">State of issue</label>
          <Input placeholder="steph-crown, github, electron" />
        </div>
        <div className="form-group mb-6 w-full md:w-[48%]">
          <label htmlFor="">State of issue</label>
          <Input placeholder="steph-crown, github" />
        </div>
      </section>
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
    label: "Select search area",
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
