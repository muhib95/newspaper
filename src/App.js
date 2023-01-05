// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import News from "./News";

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setNews(data));
  }, []);

  // console.log(news);
  return (
    <div className="max-w-screen-2xl mx-auto">
      <h1 className="text-center text-2xl my-4">News</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {news.map((ne) => (
          <News ne={ne} key={ne.id}></News>
        ))}
      </div>
    </div>
  );
}

export default App;
