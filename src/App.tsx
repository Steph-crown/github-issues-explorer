import "./App.css";
import { ThreeBars } from "./assets/svgs";
import { useThemes } from "./hooks";
import { Home } from "./pages";

const App = () => {
  const { handleThemeToggle } = useThemes();

  return (
    <div>
      <Home />

      <button className="toggle-btn" onClick={handleThemeToggle}>
        <ThreeBars />
      </button>
    </div>
  );
};

export default App;
