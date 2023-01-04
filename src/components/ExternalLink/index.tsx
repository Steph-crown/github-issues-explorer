import { FC } from "react";

const ExternalLink: FC<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = ({ children, href, ...rest }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      {...rest}
      style={{ wordBreak: "break-word" }}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
