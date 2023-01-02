import { FC } from "react";
import {
  IssueArchivedIcon,
  IssueAssignedIcon,
  IssueClosedIcon,
  IssueOpenedIcon,
} from "../../assets/svgs";
import { useTableHeadFilter } from "../../hooks";
import FilterItem from "./FilterItem";

const IssuesTableHeader: FC = () => {
  const { filters, setFilterFieldvalue } = useTableHeadFilter();

  const handleFilter = (title: string) => {
    // cannot enable filter for `open` and `closed` at same time
    if (title === "open") {
      setFilterFieldvalue("closed", false);
    }
    if (title === "closed") {
      setFilterFieldvalue("open", false);
    }
    setFilterFieldvalue(title, !filters[title]);
  };

  return (
    <header className="table-head">
      <div className="flex items-center justify-start w-full sm:w-min pb-3 sm:pb-0 border-b sm:border-b-0 border-solid border-border-light dark:border-border-dark">
        <FilterItem
          Icon={IssueOpenedIcon}
          title={"open"}
          active={filters.open}
          color="green"
          value={32_494_239}
          className="mr-4"
          onClick={handleFilter}
        />
        <FilterItem
          Icon={IssueClosedIcon}
          title={"closed"}
          active={filters.closed}
          color="purple"
          value={32_494_239}
          onClick={handleFilter}
        />
      </div>
      <div className="flex items-center justify-start sm:justify-end w-full sm:w-min pt-3 sm:pt-0">
        <FilterItem
          Icon={IssueAssignedIcon}
          title={"assigned"}
          active={filters.assigned}
          color="blue"
          onClick={handleFilter}
        />
        <FilterItem
          Icon={IssueArchivedIcon}
          title={"archived"}
          active={filters.archived}
          color="red"
          className="ml-4"
          onClick={handleFilter}
        />
      </div>
    </header>
  );
};

export default IssuesTableHeader;
