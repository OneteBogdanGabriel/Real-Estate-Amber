import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const PropertyForm = props => {
  const { property, onChange, onSave, saving } = props;
  //   console.log(props);
  const currencyList = ["EUR", "USD", "RON"];
  const typeList = ["House", "Apartment", "Mansion", "Palace"];

  return (
    <form onSubmit={onSave}>
      <h2>{property.id ? "Edit" : "Add"} Property</h2>
      <TextInput
        name="name"
        label="Name"
        value={property.name}
        onChange={onChange}
      />

      <SelectInput
        name="type"
        label="Type"
        value={property.type || ""}
        defaultOption="House"
        options={typeList.map(type => ({
          value: type,
          text: type
        }))}
        onChange={onChange}
      />

      <TextInput
        name="price"
        label="Price"
        value={property.price}
        onChange={onChange}
      />

      <SelectInput
        name="currency"
        label="Currency"
        value={property.currency || ""}
        defaultOption="EUR"
        options={currencyList.map(currency => ({
          value: currency,
          text: currency
        }))}
        onChange={onChange}
      />

      <TextInput
        name="description"
        label="Description"
        value={property.description}
        onChange={onChange}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

PropertyForm.propTypes = {
  property: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default PropertyForm;
