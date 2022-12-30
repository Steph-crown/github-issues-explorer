import { FC } from "react";

const FilterItem: FC<IProps> = ({
  Icon,
  value,
  title,
  active,
  color,
  className,
}) => {
  const buttonClassName = `text-sm flex items-center btn ${
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
    <button className={buttonClassName}>
      <Icon className={iconClassName} />

      <span className={textClassName}>
        {value ? ` ${value} ` : ""} {title}
      </span>
    </button>
  );
};

export default FilterItem;

interface IProps {
  Icon: FC<{ className: string }>;
  value?: number;
  title: string;
  active: boolean;
  color: string;
  className?: string;
}
