import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import "./HomePage.css";
import ListViewContainer from "./list/ListViewContainer";
import SearchFields from "./SearchFields";
import Header from "../common/header/Header";
import { get } from "../../http/http";

function HomePage(props) {
  /*static contextTypes = {
    list: PropTypes.instanceOf(Immutable.List).isRequired
  };*/
  const { properties } = props;
  // const [properties, handleProperties] = useState([]);

  // Save local state or dispatch redux action
  // useEffect(() => {
  //   get("http://localhost:3001/properties").then(data => {
  //     // console.log(data);
  //     handleProperties(data);
  //   });
  // }, []);
  // console.log(properties);

  return (
    <div className="content">
      <div className="body">
        <Header />
        <ListViewContainer properties={properties} />
      </div>
    </div>
  );
}

HomePage.defaultProps = {
  properties: []
};

HomePage.propTypes = {
  properties: PropTypes.array
};

const mapStateToProps = state => {
  return {
    properties: state.properties
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
