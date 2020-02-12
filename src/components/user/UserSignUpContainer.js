import React, { useState } from "react";
import { isEmpty } from "lodash";
import { connect } from "react-redux";
import { saveUser } from "../../redux/actions/userActions";
import PropTypes from "prop-types";
import UserSignUp from "./UserSignUp";
// import { post, SIGNUP_URL } from "../../http/http";
import { toast } from "react-toastify";
const { newUser } = require("../../tools/mockData");

const UserSignUpContainer =({ saveUser, history, ...other })=> {

  const [user, setUser] = useState(other.user);
  const [saving, setSaving] = useState(false);
  
  const handleChange = event => {
    const { name, value } = event.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const formIsValid = () => {
    const { name, email, password } = user;
    const errors = {};

    if (!name) errors.name = "Name is required.";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";

    if (isEmpty(errors)) {
      return false;
    }
    return true;
  };

  const handleSave = event => {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveUser(user)
      .then(() => {
        toast.success("User saved.");
        history.push("/");
      })
      .catch(error => {
        setSaving(false);
      });
  };

  return (
    <UserSignUp
      user={user}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
};

UserSignUpContainer.defaultProps = {
  user: {}
};

UserSignUpContainer.propTypes = {
  user: PropTypes.object,
  saveUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const user = slug && newUser;
  return {
    user
  };
}

const mapDispatchToProps = {
  saveUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSignUpContainer);
