import { FC } from "react";
import { FilterIcon, SearchIcon } from "../../assets/svgs";

const SearchGroup: FC = () => {
  return (
    <section className="container">
      <div className="search-group">
        <form className="search-form">
          <input
            type="text"
            className="input icon-input "
            placeholder="Search by issue name"
          />
          <button className="input-icon-btn">
            <SearchIcon />
          </button>
        </form>

        <div className="search__btn-group">
          <button className="btn btn-outline mr-2">
            <FilterIcon className="icon-btn" />
            Sort
          </button>
          <button className="btn btn-green w-full">Advanced search</button>
        </div>
      </div>
    </section>
  );
};

export default SearchGroup;
