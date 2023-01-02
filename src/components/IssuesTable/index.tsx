import { FC } from "react";
import IssuesTableHead from "../IssuesTableHead";

const IssuesTable: FC = () => {
  return (
    <section className="container">
      <div className="table-wrapper">
        <IssuesTableHead />
      </div>
    </section>
  );
};

export default IssuesTable;
