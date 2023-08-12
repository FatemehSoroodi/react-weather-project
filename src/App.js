import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/FatemehSoroodi/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open Source Code
          </a>
          , by <em>Fatemeh Soroodi</em>
        </footer>
      </div>
    </div>
  );
}

export default App;
