import "./App.css";
import { ThreeBars } from "./assets/svgs";
import { useThemes } from "./hooks";
import { Home } from "./pages";

const App = () => {
  const { handleThemeToggle } = useThemes();

  return (
    <div className="bg-white dark:bg-black">
      <Home />

      <button className="bg-black" onClick={handleThemeToggle}>
        <ThreeBars />
      </button>
    </div>
  );
};

export default App;
