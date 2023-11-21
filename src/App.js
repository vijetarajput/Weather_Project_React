import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <Weather defaultCity="london"/>
    <footer className="footer">
      This project is created by Vijeta Singh and it is{" "}
      <a href="https://github.com/vijetarajput/Weather_Project_React" target="_blank" rel="noreferrer">Open-sourced on GitHub</a>
    </footer>
    </div>
    </div>
  );
}
export default App;