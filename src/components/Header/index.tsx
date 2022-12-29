import { FC } from "react";
import { GithubLogo } from "../../assets/svgs";

const Header: FC = () => {
  return (
    <section className="container">
      <header className="app-header ">
        <div>
          <h1>Issues Explorer</h1>
          <p className="sub-head">
            Search, filter, and sort through Github issues.
          </p>
        </div>
        <a href="https://github.com" target={"_blank"} rel="noreferrer">
          <GithubLogo />
        </a>
      </header>
    </section>
  );
};

export default Header;
