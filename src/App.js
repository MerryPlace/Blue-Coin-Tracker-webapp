import TopRibbon from "./Components/TopRibbon";
import NavigationProvider from "./Context/NavigationProvider";
import ChecklistProvider from "./Context/ChecklistProvider";
import levels from "./levels.json";
import LevelList from "./Components/LevelList";
import React from "react";
import bcStyles from "./Components/BlueCoinCheckbox/BlueCoinCheckbox.module.scss";
import "./App.scss";
import { DARK_COLORS, LIGHT_COLORS } from "./_constants";

function App() {
  const [theme, setTheme] = React.useState("dark");
  const themeColors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;

  return (
    <div className="App" style={themeColors}>
      <NavigationProvider>
        <ChecklistProvider>
          <TopRibbon
            levels={levels}
            toggleTheme={() => {
              setTheme((theme) => {
                return theme === "dark" ? "light" : "dark";
              });
            }}
          />
          <div className={`${bcStyles["custom-checkboxes"]}`}>
            <LevelList levels={levels} />
          </div>
        </ChecklistProvider>
      </NavigationProvider>
    </div>
  );
}

export default App;
