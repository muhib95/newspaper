// import logo from "./logo.svg";
import "./App.css";

function App() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => console.log(data));
  return (
    <div className="max-w-screen-2xl mx-auto">
      <h1>News</h1>
    </div>
  );
}

export default App;
