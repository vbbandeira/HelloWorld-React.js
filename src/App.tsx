import { useState } from "react";
import { Tweet } from "./components/Tweet";

function App() {
  const [tweets, setTweets] = useState<string[]>([]);

  return (
    <div>
      <Tweet text="Tweet 1" />
      <Tweet text="Tweet 2" />
      <Tweet text="Tweet 3" />

      <button>Adicionar Tweet</button>
    </div>
  );
}

export default App;
