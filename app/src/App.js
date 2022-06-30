import logo from "./logo.svg";
import "./App.css";
import Designer from "./modules/Designer";
import Chat from "./modules/Chat";

function App() {
  return (
    <div className="App">
      {/* <div className="main-app">
        <h1>Main Application in</h1>
        <ReactLogo className="react-logo"/>
      </div> */}
      <header className="header-container">
        <Chat></Chat>
      </header>
      <div className="content">
        <Designer></Designer>
      </div>
      <footer className="footer-container">
        <Chat></Chat>
      </footer>
    </div>
  );
}

export default App;
