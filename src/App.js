import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Qeshm" />
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
