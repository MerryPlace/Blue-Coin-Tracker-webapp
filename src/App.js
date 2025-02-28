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

const COLOR_THEME_KEY = "BC_COLOR_THEME_KEY";
const CHECK_THEME_KEY = "BC_CHECK_THEME_KEY";
const FONT_KEY = "BC_FONT_KEY";

function App() {
  const [theme, setTheme] = React.useState(() => {
    const localData = JSON.parse(localStorage.getItem(COLOR_THEME_KEY));
    console.log(
      `Setting theme ${localData === null ? "fresh" : "from storage"}`
    );
    return localData === null ? "dark" : localData;
  });
  const themeColors = theme === "dark" ? DARK_COLORS : LIGHT_COLORS;

  const [font, setFont] = React.useState(() => {
    const localData = JSON.parse(localStorage.getItem(FONT_KEY));
    console.log(
      `Setting font setting ${localData === null ? "fresh" : "from storage"}`
    );
    return localData === null ? "sunshine" : localData;
  });

  const [checkboxTheme, setThemeCheckbox] = React.useState(() => {
    const localData = JSON.parse(localStorage.getItem(CHECK_THEME_KEY));
    console.log(
      `Setting checkbox theme ${localData === null ? "fresh" : "from storage"}`
    );
    return localData === null ? true : localData;
  });

  const [settingsVisible, setSettingsVisible] = React.useState(false);

  React.useEffect(() => {
    if (checkboxTheme !== undefined) {
      localStorage.setItem(CHECK_THEME_KEY, JSON.stringify(checkboxTheme));
    }
    if (font !== undefined) {
      localStorage.setItem(FONT_KEY, JSON.stringify(font));
    }
    if (theme !== undefined) {
      localStorage.setItem(COLOR_THEME_KEY, JSON.stringify(theme));
    }
  }, [theme, font, checkboxTheme]);

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
            checkboxCheck={checkboxTheme}
            checkboxToggle={() => {
              setThemeCheckbox(!checkboxTheme);
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
              checkboxTheme && bcStyles["custom-checkboxes"]
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
