import { FC } from "react";

const IssueAssignedIcon: FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.21967 3.46967C8.51256 3.17678 8.98744 3.17678 9.28033 3.46967L13.5303 7.71967C13.8232 8.01256 13.8232 8.48744 13.5303 8.78033L9.28033 13.0303C8.98744 13.3232 8.51256 13.3232 8.21967 13.0303C7.92678 12.7374 7.92678 12.2626 8.21967 11.9697L11.1893 9H3.75C3.33579 9 3 8.66421 3 8.25C3 7.83579 3.33579 7.5 3.75 7.5H11.1893L8.21967 4.53033C7.92678 4.23744 7.92678 3.76256 8.21967 3.46967Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IssueAssignedIcon;
