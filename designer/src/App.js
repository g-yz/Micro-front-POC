import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Example React to Angular
  // Subscriber
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

  // Example React to Angular
  // Publisher
  const receiveMessageHandler = () => {
    const event = new CustomEvent("scroll", { detail: "send from React..." });
    window.dispatchEvent(event);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {count}
        </a>
        <button onClick={receiveMessageHandler}>Send React powers</button>
      </header>
    </div>
  );
}

export default App;
