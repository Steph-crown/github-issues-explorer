import { createContext, Dispatch, SetStateAction } from "react";
import { IIssue } from "../interfaces";

const IssuesContext = createContext<IIssuesContext | null>(null);

export default IssuesContext;

export interface IIssuesContext {
  issues: IIssue[];
  setIssues: Dispatch<SetStateAction<IIssue[]>>;
  loadingIssues: boolean;
  setLoadingIssues: React.Dispatch<React.SetStateAction<boolean>>;
}
