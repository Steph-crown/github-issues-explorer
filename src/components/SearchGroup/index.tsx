import { FC } from "react";
import { FilterIcon, SearchIcon } from "../../assets/svgs";
import useDisclosure from "../../hooks/useDisclosure";
import Input from "../Input";
import AdvancedSearchModal from "./AdvancedSearchModal";

const SearchGroup: FC = () => {
  const { isOpen, handleClose, handleOpen } = useDisclosure();

  return (
    <section className="container">
      <div className="search-group">
        <form className="search-form">
          <Input withIcon={true} placeholder="Search by issue name" />
          <button className="input-icon-btn">
            <SearchIcon />
          </button>
        </form>

        <div className="search__btn-group">
          <button className="btn btn-outline mr-2">
            <FilterIcon className="icon-btn" />
            Sort
          </button>
          <button className="btn btn-green w-full" onClick={handleOpen}>
            Advanced search
          </button>
        </div>
      </div>

      <AdvancedSearchModal isOpen={isOpen} handleClose={handleClose} />
    </section>
  );
};

export default SearchGroup;
