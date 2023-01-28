import { FC } from "react";
import { Issues } from "../../services";
import Card from "./Card";

const IssuesTableBody: FC = () => {
  const { issues } = Issues.useList();

  return (
    <>
      {issues.map((issue, id) => (
        <Card issue={issue} key={id} />
      ))}
    </>
  );
};

export default IssuesTableBody;
