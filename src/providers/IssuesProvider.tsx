import { FC, ReactNode, useState } from "react";
import { IIssue } from "../interfaces";
import { IssuesContext } from "../contexts";

const IssuesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [issues, setIssues] = useState<IIssue[]>([]);

  return (
    <IssuesContext.Provider value={{ issues, setIssues }}>
      {children}
    </IssuesContext.Provider>
  );
};

export default IssuesProvider;
