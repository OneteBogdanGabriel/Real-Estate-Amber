import React from "react";
//import logo from "./logo.svg";
//import { Link } from "react-router-dom";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import UserPage from "./components/user/UserPage";

function App() {
  return (
    <div className="container-fluid">
      <Route exact path="/" component={HomePage} />
      <Route path="/user" component={UserPage} />
    </div>
  );
  /*return (
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
          Learn React
        </a>
        <Link to="homepage" className="btn bt-primary btn-lg">HomePage</Link>
      </header>
    </div>
  );*/
}

export default App;
