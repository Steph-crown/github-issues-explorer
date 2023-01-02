import ILabel from "./ILabel";
import IPullRequest from "./IPullRequest";
import IUser from "./IUser";

interface IIssue {
  htmlUrl: string;
  id: number;
  number: number;
  title: string;
  user: IUser;
  labels: ILabel[];
  state: "open" | "closed";
  assignee: IUser;
  assignees: IUser[];
  comments: number;
  createdAt: Date;
  updatedAt: Date;
  closedAt: Date;
  pullRequest: IPullRequest;
  stateReason: string;
}

export default IIssue;
