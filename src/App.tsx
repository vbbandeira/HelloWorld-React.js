import { useState } from "react";
import { Tweet } from "./components/Tweet";

import "./App.css";
import { Routes } from "react-router-dom";

function App() {
  return <Routes />;
}

/*
function App() {
  const [tweets, setTweets] = useState<string[]>([
    "Tweet 1",
    "Tweet 2",
    "Tweet 3",
    "Tweet 4",
  ]);

  function createTweet() {
    setTweets([...tweets, "Tweet 5"]);
  }

  return (
    <div>
      {tweets.map((tweet) => {
        return <Tweet text={tweet} />;
      })}

      <button
        onClick={createTweet}
        style={{
          backgroundColor: "#8257e6",
          border: 0,
          padding: "6px 12px",
          color: "#fff",
        }}
      >
        Adicionar Tweet
      </button>
    </div>
  );
}
*/
export default App;
