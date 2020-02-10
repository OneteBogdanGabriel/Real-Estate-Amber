import React from "react";
import ListCard from "./ListCard";
import { connect } from "react-redux";
import * as propertiesListAction from "../../../redux/actions/propertiesListActions"
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

const mapListDataToCard = propertiesList => {
  return <ListCard id={propertiesList.id} data={propertiesList} />;
};

const ListView = (props) => {
  /*componentDidMount() {
    this.props.actions.loadProperties().catch(error => {
      alert("Loading properties list failed, error " + error);
    });
  }*/
  let pageSize = 5;
  const { properties } = props;
  const propertiesList = properties && properties.slice(pageSize) //sau pageStart, pageEnd
  return <div>{propertiesList && propertiesList.map(mapListDataToCard)}</div>;
}

/*const ListView = (props) => {
  return (
    <div>
      <ListCard />
    </div>
  );
}*/


ListView.propTypes = {
  properties: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(propertiesListAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
