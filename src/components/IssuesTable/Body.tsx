import { FC } from "react";
import { Issues } from "../../api/services";
import Card from "./Card";

const IssuesTableBody: FC = () => {
  const { issues } = Issues.useList();
  console.log("the issues are", issues);

  return (
    <>
      {issues.map((issue, id) => (
        <Card issue={issue} key={id} />
      ))}
    </>
  );
};

export default IssuesTableBody;
