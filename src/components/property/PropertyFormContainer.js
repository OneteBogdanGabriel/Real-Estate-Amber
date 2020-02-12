import React, { useState } from "react";
import { isEmpty } from "lodash";
import { connect } from "react-redux";
import { saveProperty } from "../../redux/actions/propertyActions";
import PropTypes from "prop-types";
import PropertyForm from "./PropertyForm";
// import { newProperty } from "../../../tools/mockData";
import { toast } from "react-toastify";
const { newProperty } = require("../../tools/mockData");

const PropertyFormContainer = ({ saveProperty, history, ...other }) => {
  const [property, setProperty] = useState(other.property);
  const [saving, setSaving] = useState(false);
  //   const { dispatch } = props;

  const handleChange = event => {
    const { name, value } = event.target;
    setProperty(prevProperty => ({
      ...prevProperty,
      [name]: value
    }));
  };

  const formIsValid = () => {
    const { name, type, sold_price, currency } = property;
    const errors = {};

    if (!name) errors.name = "Name is required.";
    if (!type) errors.type = "Type is required";
    if (!sold_price) errors.sold_price = "Price is required";
    if (!currency) errors.currency = "Currency is required";

    if (isEmpty(errors)) {
      return false;
    }
    return true;
  };

  const handleSave = event => {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveProperty(property)
      .then(() => {
        toast.success("Property saved.");
        history.push("/");
      })
      .catch(error => {
        setSaving(false);
      });
  };

  return (
    <PropertyForm
      property={property}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
};
PropertyFormContainer.defaultProps = {
  property: {}
};

PropertyFormContainer.propTypes = {
  property: PropTypes.object,
  saveProperty: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  // console.log("mapStateToProps", state, ownProps);
  const slug = ownProps.match.params.slug;
  const property = slug && newProperty;
  return {
    property
  };
};

const mapDispatchToProps = {
  saveProperty
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyFormContainer);
