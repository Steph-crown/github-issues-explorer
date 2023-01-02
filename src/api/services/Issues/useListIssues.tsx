import { useEffect, useState } from "react";
import { IIssue } from "../../interfaces";
import fakeDb from "../fakeDb";
import transformIssueResponse from "./transformIssueResponse";

const useListIssues = () => {
  const [{ issues, loadingIssues }, setIssues] = useState<IIssuesState>({
    issues: [],
    loadingIssues: true,
  });

  const getIssues = async () => {
    try {
      setIssues((prev) => ({ ...prev, loadingIssues: true }));

      const res = await fakeDb.issues;
      setIssues((prev) => ({
        ...prev,
        issues: transformIssueResponse(res.items),
      }));
    } catch (error) {
      console.log("Error");
      getIssues();
    } finally {
      setIssues((prev) => ({ ...prev, loadingIssues: true }));
    }
  };

  useEffect(() => {
    getIssues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { getIssues, issues, loadingIssues };
};

export default useListIssues;

interface IIssuesState {
  issues: IIssue[];
  loadingIssues: boolean;
}
