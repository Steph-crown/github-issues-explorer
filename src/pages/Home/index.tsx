import { FC } from "react";
import { Header, IssuesTable, SearchGroup } from "../../components";

const Index: FC = () => {
  return (
    <section className="pb-10">
      <Header />
      <SearchGroup />
      <IssuesTable />
    </section>
  );
};

export default Index;
