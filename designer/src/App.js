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
    const event = new CustomEvent("incrementAngular", {
      detail: "send from React...",
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="containerMain">
      <header className="content_panel">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Panel chat</p>
        </div>
        <div>
          <a
            className="count_react"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Count: {count}
          </a>
          <br />
          <button onClick={receiveMessageHandler} className="btn_react">
            Increment
          </button>
        </div>
        <div></div>
      </header>
    </div>
  );
}

export default App;
