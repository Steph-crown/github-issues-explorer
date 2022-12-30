import { FC } from "react";
import {
  IssueArchivedIcon,
  IssueAssignedIcon,
  IssueClosedIcon,
  IssueOpenedIcon,
} from "../../assets/svgs";
import FilterItem from "./FilterItem";

const IssuesTableHead: FC = () => {
  return (
    <header className="table-head">
      <div className="flex items-center justify-start w-full sm:w-min pb-3 sm:pb-0 border-b sm:border-b-0 border-solid border-border-light dark:border-border-dark">
        <FilterItem
          Icon={IssueOpenedIcon}
          title={"Open"}
          active={true}
          color="green"
          value={32_494_239}
          className="mr-4"
        />
        <FilterItem
          Icon={IssueClosedIcon}
          title={"Closed"}
          active={false}
          color="purple"
          value={32_494_239}
        />
      </div>
      <div className="flex items-center justify-start sm:justify-end w-full sm:w-min pt-3 sm:pt-0">
        <FilterItem
          Icon={IssueAssignedIcon}
          title={"Assigned"}
          active={false}
          color="blue"
        />
        <FilterItem
          Icon={IssueArchivedIcon}
          title={"Archived"}
          active={false}
          color="red"
          className="ml-4"
        />
      </div>
    </header>
  );
};

export default IssuesTableHead;
