import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Immutable from "immutable";
import ListViewContainer from "./list/ListViewContainer";
import SearchFields from "./SearchFields";
import Header from "../header/Header";

function HomePage(props) {
  /*static contextTypes = {
    list: PropTypes.instanceOf(Immutable.List).isRequired
  };*/
  const [properties, handleProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/properties", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        // Save local state or dispatch redux action
        // console.log(data);
        handleProperties(data);
      })
      .catch(err => console.log(err));
  }, []);
  console.log(properties);
  return (
    <div className="content">
      <div className="body">
        <Header />
        <ListViewContainer properties={properties} />
      </div>
    </div>
  );
}

export default HomePage;
