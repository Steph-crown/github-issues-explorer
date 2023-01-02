import { FC } from "react";
import Body from "./Body";
import Header from "./Header";

const IssuesTable: FC = () => {

  return (
    <section className="container wrapper">
      <div className="table-wrapper">
        <Header />
        <Body />
      </div>
    </section>
  );
};

export default IssuesTable;
