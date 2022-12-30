import { FC } from "react";
import { Header, IssuesTable, SearchGroup } from "../../components";

const Index: FC = () => {
  return (
    <>
      <Header />
      <SearchGroup />
      <IssuesTable />
    </>
  );
};

export default Index;
