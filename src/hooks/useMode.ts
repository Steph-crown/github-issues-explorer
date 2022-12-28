import { useEffect, useState } from "react";

const useMode = () => {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

  const handleToggle = (value: boolean) => {
    setDarkMode(value);
  };

  const storePreference = (mode: string) => {
    localStorage.setItem("theme", mode);
  };

  useEffect(() => {
    const root = document.documentElement;
    const initialMode = root.style.getPropertyValue("--initial-mode");

    setDarkMode(initialMode === "dark");
  }, []);

  useEffect(() => {
    if (darkMode === undefined) return;

    const root = document.documentElement;
    let theme = darkMode ? "dark" : "light";

    root.setAttribute("data-theme", theme);
    storePreference(theme);
    root.style.setProperty("--initial-mode", theme);
  }, [darkMode]);

  return { darkMode, handleToggle };
};

export default useMode;
