import { FC } from "react";

const CommentIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ""}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.75 3C2.6837 3 2.62011 3.02634 2.57322 3.07322C2.52634 3.12011 2.5 3.1837 2.5 3.25V10.75C2.5 10.888 2.612 11 2.75 11H4.75C4.94891 11 5.13968 11.079 5.28033 11.2197C5.42098 11.3603 5.5 11.5511 5.5 11.75V13.94L8.22 11.22C8.36052 11.0793 8.55115 11.0002 8.75 11H13.25C13.3163 11 13.3799 10.9737 13.4268 10.9268C13.4737 10.8799 13.5 10.8163 13.5 10.75V3.25C13.5 3.1837 13.4737 3.12011 13.4268 3.07322C13.3799 3.02634 13.3163 3 13.25 3H2.75ZM1 3.25C1 2.284 1.784 1.5 2.75 1.5H13.25C14.216 1.5 15 2.284 15 3.25V10.75C15 11.2141 14.8156 11.6592 14.4874 11.9874C14.1592 12.3156 13.7141 12.5 13.25 12.5H9.06L6.487 15.073C6.28324 15.2767 6.02367 15.4153 5.74111 15.4715C5.45854 15.5277 5.16567 15.4988 4.8995 15.3886C4.63333 15.2784 4.40581 15.0917 4.24571 14.8522C4.08561 14.6127 4.0001 14.3311 4 14.043V12.5H2.75C2.28587 12.5 1.84075 12.3156 1.51256 11.9874C1.18437 11.6592 1 11.2141 1 10.75V3.25Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CommentIcon;
