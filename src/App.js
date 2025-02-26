import "./App.scss";
import TopRibbon from "./Components/TopRibbon";
import NavigationProvider from "./Context/NavigationProvider";
import ChecklistProvider from "./Context/ChecklistProvider";
import levels from "./levels.json";
import LevelList from "./Components/LevelList";

function App() {
  return (
    <div className="App">
      <NavigationProvider>
        <ChecklistProvider>
          <TopRibbon levels={levels} />
          <div className="PageWrapper">
            <LevelList levels={levels} />
          </div>
        </ChecklistProvider>
      </NavigationProvider>
    </div>
  );
}

export default App;
