import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./UserSignUp.css";

const UserSignUp = props => {
  const { user, onChange, onSave, saving } = props;

  return (
    <div className="signUpCard">
      <form onSubmit={onSave}>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={onChange}
          />
        </div>
        <div>
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter name"
            onChange={onChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            onChange={onChange}
          />
          <input
            name="password2"
            type="password"
            placeholder="Confirm password"
            onChange={onChange}
          />
        </div>
        <div>
          <button type="submit" disabled={saving} className="btn btn-primary">
            {saving ? "Saving..." : "Save"}
          </button>
          <Link to="/" className="btn btn-primary">
            Home
          </Link>
        </div>
      </form>
    </div>
  );
};

UserSignUp.propTypes = {
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default UserSignUp;
