import { IIssue, IUser, IPullRequest, ILabel } from "../../interfaces";

const transformIssueResponse = (
  res: { [key: string]: string | object | number | null | boolean }[]
): IIssue[] => {
  return res.map((item) => {
    const user = item.user as any;
    const assignee = item.assignee as any;
    const pullRequest = item.pull_request as any;
    const labels = (item.labels as ILabel[]).map((label) => ({
      id: label.id,
      name: label.name,
      color: label.color,
    }));

    return {
      htmlUrl: item.html_url as string,
      id: item.id as number,
      number: item.number as number,
      title: item.title as string,
      user: {
        id: user.id as number,
        login: user.login as string,
        avatarUrl: user.avatar_url as string,
        htmlUrl: user.html_url as string,
      } as IUser,
      labels: labels,
      state: item.state as "open" | "closed",
      assignee: assignee
        ? ({
            id: assignee.id as number,
            login: assignee.login as string,
            avatarUrl: assignee.avatar_url as string,
            htmlUrl: assignee.html_url as string,
          } as IUser)
        : null,
      assignees: [],
      comments: item.comments as number,
      createdAt: item.created_at as Date,
      updatedAt: item.updated_at as Date,
      closedAt: item.closed_at as Date,
      pullRequest: pullRequest
        ? ({
            htmlUrl: pullRequest?.html_url,
          } as IPullRequest)
        : null,
      stateReason: item.state_reason as string,
    };
  });
};

export default transformIssueResponse;
