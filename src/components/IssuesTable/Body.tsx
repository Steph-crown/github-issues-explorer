import { Context, FC, useContext } from "react";
import { IssuesContext } from "../../contexts";
import { IIssuesContext } from "../../contexts/IssuesContext";
import { Issues } from "../../services";
import Loader from "../Loader";
import Card from "./Card";

const IssuesTableBody: FC = () => {
  Issues.useList();

  const { issues, loadingIssues } = useContext(
    IssuesContext as Context<IIssuesContext>
  );

  return (
    <>
      {loadingIssues ? <Loader /> : null}
      {issues
        ? issues.map((issue, id) => <Card issue={issue} key={id} />)
        : null}
    </>
  );
};

export default IssuesTableBody;
