import { FC } from "react";
import { Issues } from "../../api/services";
import IssuesTableHead from "../IssuesTableHead";

const IssuesTable: FC = () => {
  const { issues, getIssues } = Issues.useList();

  return (
    <section className="container">
      <div className="table-wrapper">
        <> {console.log("these are issues", issues)}</>

        <IssuesTableHead />
      </div>
    </section>
  );
};

export default IssuesTable;
