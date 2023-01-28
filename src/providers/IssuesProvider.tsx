import { FC, ReactNode, useState } from "react";
import { IIssue } from "../interfaces";
import { IssuesContext } from "../contexts";

const IssuesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [issues, setIssues] = useState<IIssue[]>([]);
  const [loadingIssues, setLoadingIssues] = useState(true);

  return (
    <IssuesContext.Provider
      value={{ issues, setIssues, loadingIssues, setLoadingIssues }}
    >
      {children}
    </IssuesContext.Provider>
  );
};

export default IssuesProvider;
