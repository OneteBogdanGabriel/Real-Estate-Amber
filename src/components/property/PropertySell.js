import React from "react";
import { connect } from "react-redux";
import * as propertyActions from "../../redux/actions/propertyActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class PropertySell extends React.Component {
  state = {
    property: {
      name: "",
      type: "",
      sold_price: "",
      currency: "",
      description: ""
    }
  };

  handleChange = event => {
    const property = { ...this.state.property, name: event.target.value };
    this.setState({ property });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(propertyActions.createProperty(this.state.property));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Sell Property</h4>

        <label>Property Name</label>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.property.name}
        />

        <label>Property Type</label>
        <select
          name="type"
          value={this.state.property.type}
          onChange={this.handleChange}
        >
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="studio">Studio</option>
          <option value="palace">Palace</option>
          <option value="mansion">Mansion</option>
        </select>

        <label>Price</label>
        <input
          type="number"
          onChange={this.handleChange}
          value={this.state.property.price}
        />
        <select
          name="currency"
          value={this.state.property.currency}
          onChange={this.handleChange}
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="RON">RON</option>
        </select>

        <label>Description</label>
        <textarea
          name="description"
          rows="5"
          cols="50"
          value={this.state.property.description}
          onChange={this.handleChange}
        />

        <input type="submit" value="Save" />
      </form>
    );
  }
}

PropertySell.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    property: state.property
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createProperty: bindActionCreators(propertyActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertySell);
