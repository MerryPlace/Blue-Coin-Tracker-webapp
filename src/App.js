import "./App.scss";
import TopRibbon from "./Components/TopRibbon";
import NavigationProvider from "./Context/NavigationProvider";
import levels from "./levels.json";
import LevelList from "./Components/LevelList";

function DataOutput() {
  return (
    <div>
      {Object.keys(levels).map((levelCode) => (
        <div key={levelCode}>
          <h2>
            {levelCode} {levels[levelCode].title}
          </h2>
          <img
            src={`${process.env.PUBLIC_URL}/drawable/home/home_${levelCode}.png`}
            alt=""
          />
          {levels[levelCode].coins.map((coin, coinNum) => (
            <p key={coin.title}>
              {coinNum + 1}. <a href={coin.video}>{coin.title}</a>
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <NavigationProvider>
        <TopRibbon levels={levels} />
        <div className="PageWrapper">
          <LevelList levels={levels} />
        </div>
      </NavigationProvider>
    </div>
  );
}

export default App;
