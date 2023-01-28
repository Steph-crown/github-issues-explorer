import { FC } from "react";
import { ILabel } from "../../interfaces";

const IssuesTableLabels: FC<IProps> = ({ labels }) => {
  return (
    <span className="block sm:inline ml-0 sm:ml-2">
      {labels.map((label) => {
        const style = {
          color: `#${label.color}`,
          backgroundColor: `#${label.color}22`,
          border: `1px solid #${label.color}`,
        };

        return (
          <button
            className="text-xs rounded-xl leading-5 px-2 font-medium mr-1"
            key={label.name}
            style={style}
          >
            {label.name}
          </button>
        );
      })}
    </span>
  );
};

interface IProps {
  labels: ILabel[];
}

export default IssuesTableLabels;
