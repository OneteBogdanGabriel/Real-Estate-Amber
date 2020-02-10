import React, {useState} from "react";
import ListCard from "./ListCard";
import { connect } from "react-redux";
import * as propertiesListAction from "../../../redux/actions/propertiesListActions"
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import ListView from "./ListView";


const ListViewContainer = (props) => {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => setPage(value);

    const {properties} = props;
    const pageSize = 5;
    const propertiesList = properties.slice((page-1) * pageSize, page * pageSize)
    const count = Math.ceil(properties.length/pageSize);

    return <ListView 
      handleChange={handleChange}
      page={page}
      count={count}
      propertiesList={propertiesList}
    />
}

ListViewContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ListViewContainer);
