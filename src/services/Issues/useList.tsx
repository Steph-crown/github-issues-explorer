import { Context, useContext, useEffect } from "react";
import { requests } from "../../api";
import { IssuesContext } from "../../contexts";
import { IIssuesContext } from "../../contexts/IssuesContext";
import { IIssue } from "../../interfaces";
import transformIssueResponse from "./transform";

const useList = () => {
  const { setIssues, setLoadingIssues } = useContext(
    IssuesContext as Context<IIssuesContext>
  );

  const getIssues = async () => {
    try {
      setLoadingIssues(true);
      const res = await requests.getIssues();
      setIssues((_) => transformIssueResponse(res));
      setLoadingIssues(false);
    } catch (error) {
      console.log("Error");
      getIssues();
    }
  };

  useEffect(() => {
    getIssues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { getIssues };
};

export default useList;

interface IIssuesState {
  issues: IIssue[];
  loadingIssues: boolean;
}
