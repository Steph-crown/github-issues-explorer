import { FC } from "react";
import { ILabel } from "../../api/interfaces";

const IssuesTableLabels: FC<IProps> = ({ labels }) => {
  return (
    <>
      {labels.map((label) => (
        <button>{label.name}</button>
      ))}
    </>
  );
};

interface IProps {
  labels: ILabel[];
}

export default IssuesTableLabels;
