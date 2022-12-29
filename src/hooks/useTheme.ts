import { useEffect } from "react";

const useThemes = () => {
  const addClassName = (className: string) =>
    document.documentElement.classList.add(className);

  const doesSystemPrefersDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getTheme = () => localStorage.theme;

  const handleThemeToggle = () => {
    localStorage.setItem("theme", isDarkTheme() ? "light" : "dark");
    setTheme();
  };

  const isDarkTheme = () =>
    getTheme() === "dark" || (isThemeNotSet() && doesSystemPrefersDark());

  const isThemeNotSet = () => !("theme" in localStorage);

  const removeClassName = (className: string) =>
    document.documentElement.classList.remove(className);

  const setTheme = () => {
    if (isDarkTheme()) {
      addClassName("dark");
    } else {
      removeClassName("dark");
    }
  };

  useEffect(() => {
    setTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { handleThemeToggle };
};

export default useThemes;
