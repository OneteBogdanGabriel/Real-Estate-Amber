import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home/HomePage";
import UserLogin from "./components/user/UserLogin";
import UserPage from "./components/user/UserPage";
import PropertySell from "./components/property/PropertySell";

function App() {
  return (
    <div className="container-fluid">
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={UserLogin} />
      <Route path="/user" component={UserPage} />
      <Route path="/property-sell" component={PropertySell} />
    </div>
  );
}

export default App;
