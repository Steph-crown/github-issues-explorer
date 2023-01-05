import { FC } from "react";
import { IIssue } from "../../api/interfaces";
import {
  IssueClosedIcon,
  IssueOpenedIcon,
  MilestoneIcon,
} from "../../assets/svgs";
import { date, str } from "../../utils";
import ExternalLink from "../ExternalLink";
import Labels from "./Labels";
import Stats from "./Stats";

const IssueStateIcon: FC<{ state: "open" | "closed" }> = ({ state }) => {
  return state === "open" ? (
    <IssueOpenedIcon className="text-green" />
  ) : (
    <IssueClosedIcon className="text-purple" />
  );
};

const IssuesTableCard: FC<IProps> = ({ issue }) => {
  const userNameSlashRepoName = str.getPartAfterSubstring(
    issue.repositoryUrl,
    "https://api.github.com/repos/"
  );

  return (
    <div className="card">
      <div className="flex w-full sm:w-2/3 md:w-3/4 pr-3">
        <figure className="card-icon mt-[3px]">
          <IssueStateIcon state={issue.state} />
        </figure>
        <div>
          <div className="text-base font-bold ">
            <ExternalLink
              href={`https://github.com/${userNameSlashRepoName}`}
              className="mr-1 text-muted-light dark:text-muted-dark"
            >
              {userNameSlashRepoName}
            </ExternalLink>

            <ExternalLink
              href={issue.htmlUrl}
              className="text-fg-default-light dark:text-fg-default-dark"
            >
              {issue.title}
            </ExternalLink>

            <Labels labels={issue.labels} />
          </div>

          <div className="text-xs font-light text-muted-light dark:text-muted-dark mt-2 flex items-center">
            <StateLabel
              number={issue.number}
              state={issue.state}
              createdAt={issue.createdAt}
              userName={issue.user.login}
            />
            {issue.milestone ? (
              <ExternalLink
                href={issue.milestone?.htmlUrl}
                className="ml-3 hidden md:inline-block"
              >
                <MilestoneIcon className="inline" /> {issue.milestone.title}
              </ExternalLink>
            ) : null}
          </div>
        </div>
      </div>

      <Stats
        pullRequestUrl={issue.pullRequest?.htmlUrl}
        assignee={issue.assignee}
        comments={issue.comments}
        issueUrl={issue.htmlUrl}
      />
    </div>
  );
};

export default IssuesTableCard;

interface IProps {
  issue: IIssue;
}

const StateLabel: FC<IStatusLabel> = ({
  number,
  state,
  createdAt,
  userName,
}) => {
  const relativeTime = date.relativeTime(createdAt);
  const restOfLabel =
    state === "open" ? (
      <>
        opened {relativeTime} by {userName}
      </>
    ) : (
      <>
        by {userName} was closed {relativeTime}
      </>
    );

  return (
    <span className="tracking-[-0.2px]">
      #{number} {restOfLabel}
    </span>
  );
};

interface IStatusLabel {
  number: number;
  state: "open" | "closed";
  createdAt: Date;
  userName: string;
}
