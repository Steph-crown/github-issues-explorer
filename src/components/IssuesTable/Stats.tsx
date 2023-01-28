import { FC } from "react";
import { IUser } from "../../interfaces";
import { CommentIcon, PullRequestIcon } from "../../assets/svgs";
import ExternalLink from "../ExternalLink";

const Stats: FC<IProps> = ({
  pullRequestUrl,
  assignee,
  comments,
  issueUrl,
}) => {
  return (
    <div className="w-[calc(100% - 24px)] sm:w-1/3 md:w-1/4 ml-6 sm:ml-0 mt-4 sm:mt-0 flex items-center justify-end">
      <span className="w-1/3">
        {pullRequestUrl ? (
          <ExternalLink href={pullRequestUrl} className="icon-flex">
            <PullRequestIcon className="mr-1" />1
          </ExternalLink>
        ) : null}
      </span>

      <span className="w-1/3">
        {assignee ? (
          <ExternalLink href={assignee.htmlUrl}>
            <span>
              <img
                src={assignee.avatarUrl}
                alt={`Assigned to ${assignee.login}`}
                className="h-5 rounded-full"
              />
            </span>
          </ExternalLink>
        ) : null}
      </span>

      <span className="w-1/3">
        {comments ? (
          <ExternalLink href={issueUrl} className="icon-flex">
            <CommentIcon className="mr-1" />
            {comments}
          </ExternalLink>
        ) : null}
      </span>
    </div>
  );
};

export default Stats;

interface IProps {
  pullRequestUrl: string | undefined;
  assignee: IUser | null;
  comments: number;
  issueUrl: string;
}
