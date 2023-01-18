import "./App.css";
import { ThreeBars } from "./assets/svgs";
import { useThemes } from "./hooks";
import { Home } from "./pages";
import { IssuesProvider } from "./providers";

const App = () => {
  const { handleThemeToggle } = useThemes();

  return (
    <div>
      <IssuesProvider>
        <Home />
      </IssuesProvider>
      <button className="toggle-btn" onClick={handleThemeToggle}>
        <ThreeBars />
      </button>
    </div>
  );
};

export default App;
