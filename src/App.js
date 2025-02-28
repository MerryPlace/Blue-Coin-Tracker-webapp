import TopRibbon from "./Components/TopRibbon";
import NavigationProvider from "./Context/NavigationProvider";
import ChecklistProvider from "./Context/ChecklistProvider";
import levels from "./levels.json";
import LevelList from "./Components/LevelList";
import React from "react";
import bcStyles from "./Components/BlueCoinCheckbox/BlueCoinCheckbox.module.scss";
import "./App.scss";
import { DARK_COLORS, LIGHT_COLORS } from "./_constants";
import SettingsPopup from "./Components/SettingsPopup/SettingsPopup";

function App() {
  const [theme, setTheme] = React.useState("dark");
  const themeColors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;
  const [font, setFont] = React.useState("sunshine");
  const [themeCheckbox, setThemeCheckbox] = React.useState(true);
  const [settingsVisible, setSettingsVisible] = React.useState(false);

  return (
    <div
      className={`App ${font === "sunshine" && "useSunshineFont"}`}
      style={themeColors}
    >
      <ChecklistProvider>
        {settingsVisible && (
          <SettingsPopup
            closeSettings={() => {
              setSettingsVisible(false);
            }}
            fontCheck={font === "sunshine"}
            fontToggle={() => {
              const newFont = font === "sunshine" ? "default" : "sunshine";
              setFont(newFont);
            }}
            checkboxCheck={themeCheckbox}
            checkboxToggle={() => {
              setThemeCheckbox(!themeCheckbox);
            }}
            themeCheck={theme === "dark"}
            themeToggle={() => {
              const newTheme = theme === "dark" ? "light" : "dark";
              setTheme(newTheme);
            }}
          />
        )}
        <NavigationProvider>
          <TopRibbon
            levels={levels}
            openSettings={() => {
              setSettingsVisible(true);
            }}
          />
          <div
            className={`pageWrapper ${
              themeCheckbox && bcStyles["custom-checkboxes"]
            }`}
          >
            <LevelList levels={levels} />
          </div>
        </NavigationProvider>
      </ChecklistProvider>
    </div>
  );
}

export default App;
