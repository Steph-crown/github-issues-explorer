import { FC } from "react";

const FilterIcon: FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...{ className }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.75 3C0.335786 3 0 3.33579 0 3.75C0 4.16421 0.335786 4.5 0.75 4.5H15.25C15.6642 4.5 16 4.16421 16 3.75C16 3.33579 15.6642 3 15.25 3H0.75ZM3 7.75C3 7.33579 3.33579 7 3.75 7H12.25C12.6642 7 13 7.33579 13 7.75C13 8.16421 12.6642 8.5 12.25 8.5H3.75C3.33579 8.5 3 8.16421 3 7.75ZM6 11.75C6 11.3358 6.33579 11 6.75 11H9.25C9.66421 11 10 11.3358 10 11.75C10 12.1642 9.66421 12.5 9.25 12.5H6.75C6.33579 12.5 6 12.1642 6 11.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FilterIcon;
