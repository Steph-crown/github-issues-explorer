import { createContext, Dispatch, SetStateAction } from "react";
import { IIssue } from "../api/interfaces";

const IssuesContext = createContext<IIssuesContext | null>(null);

export default IssuesContext;

export interface IIssuesContext {
  issues: IIssue[];
  setIssues: Dispatch<SetStateAction<IIssue[]>>;
}
