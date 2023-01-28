import { useEffect, useState } from "react";
import { requests } from "../../api";
import { IIssue } from "../../interfaces";
import fakeDb from "../fakeDb";
import transformIssueResponse from "./transform";

const useList = () => {
  const [{ issues, loadingIssues }, setIssues] = useState<IIssuesState>({
    issues: [],
    loadingIssues: true,
  });

  const getIssues = async () => {
    try {
      // setIssues((prev) => ({ ...prev, loadingIssues: true }));
      // const res = await fakeDb.issues;
      // setIssues((prev) => ({
      //   ...prev,
      //   issues: transformIssueResponse(res.items),
      // }));

      const res = await requests.getIssues();

      console.log("raw", res[0]);
      console.log("transformed", transformIssueResponse(res)[0]);

      setIssues((prev) => ({
        ...prev,
        issues: transformIssueResponse(res),
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

export default useList;

interface IIssuesState {
  issues: IIssue[];
  loadingIssues: boolean;
}
