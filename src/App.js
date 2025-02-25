import "./App.css";
import levels from "./levels.json";

function DataOutput() {
  return (
    <div>
      {Object.keys(levels).map((levelCode) => (
        <div key={levelCode}>
          <h2>
            {levelCode} {levels[levelCode].title}
          </h2>
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
      <DataOutput />
    </div>
  );
}

export default App;
