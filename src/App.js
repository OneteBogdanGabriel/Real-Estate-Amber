import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home/HomePage";
import UserLogin from "./components/user/UserLogin";
import UserPage from "./components/user/UserPage";
import UserSignUp from "./components/user/UserSignUp";
import PropertySell from "./components/property/PropertyFormContainer";
import { get } from "immutable";
import { loadProperties } from "./redux/actions/propertiesListActions";

function App() {
  // Save local state or dispatch redux action
  const dispatch = useDispatch();
  useEffect(() => {
    loadProperties(dispatch);
  }, []);

  return (
    <div className="container-fluid">
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={UserLogin} />
      <Route path="/settings" component={UserPage} />
      <Route path="/sign-up" component={UserSignUp} />
      <Route path="/property-sell" component={PropertySell} />
    </div>
  );
}

export default App;
