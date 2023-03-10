import { FC } from "react";
import { num } from "../../utils";

const IssuesTableFilterItem: FC<IProps> = ({
  Icon,
  value,
  title,
  active,
  color,
  className,
  onClick,
}) => {
  const buttonClassName = `text-sm capitalize flex items-center btn ${
    className ? className : ""
  }`;

  const textClassName = `${
    active
      ? "text-fg-default-light dark:text-fg-default-dark font-bold"
      : "text-muted-light dark:text-muted-dark font-medium"
  }`;

  const iconActiveColor: { [key: string]: string } = {
    green: "text-green",
    blue: "text-blue",
    red: "text-red",
    purple: "text-purple",
  };

  const iconClassName = `${active ? iconActiveColor[color] : ""} mr-1`;

  return (
    <button
      className={buttonClassName}
      onClick={() => {
        onClick(title);
      }}
    >
      <Icon className={iconClassName} />

      <span className={textClassName}>
        {value ? ` ${num.addCommas(value)} ` : ""} {title}
      </span>
    </button>
  );
};

export default IssuesTableFilterItem;

interface IProps {
  Icon: FC<{ className: string }>;
  value?: number;
  title: string;
  active: boolean;
  color: string;
  className?: string;
  onClick: (title: string) => void;
}
