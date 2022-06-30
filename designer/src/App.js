import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const meessageA = (event) => {
    setCount((count) => count + 1);
    console.log("I am listening in React this : ", event?.detail);
  };

  useEffect(() => {
    window.addEventListener("addToCart", meessageA, true);
    return () => {
      window.removeEventListener("addToCart", meessageA, true);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {count}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
