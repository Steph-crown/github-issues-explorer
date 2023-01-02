import ILabel from "./ILabel";
import IMilestone from "./IMilestone";
import IPullRequest from "./IPullRequest";
import IUser from "./IUser";

interface IIssue {
  htmlUrl: string;
  repositoryUrl: string;
  id: number;
  number: number;
  title: string;
  user: IUser;
  labels: ILabel[];
  state: "open" | "closed";
  assignee: IUser | null;
  assignees: IUser[];
  milestone: IMilestone | null;
  comments: number;
  createdAt: Date;
  updatedAt: Date;
  closedAt: Date;
  pullRequest: IPullRequest | null;
  stateReason: string;
}

export default IIssue;
