import React from "react";
import { connect } from "react-redux";
import * as userActions from "../../redux/actions/userActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserSignUp = props => {
    //onSubmit={handleSubmit}
    let state = {
        user: {
          email: "",
          password: ""
        }
      };
    
    const handleChange = event => {
        const property = { ...this.state.property, name: event.target.value };
        this.setState({ property });
      };
    
   const handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch(userActions.createProperty(this.state.user));
      };

    return (
      <div className="signUpCard">
        <form>
          <div>
            <label>Email</label>
            <input name="email" type="email" placeholder="Enter email" />
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter password"
            />
            <input
              name="password2"
              type="password"
              placeholder="Confirm password"
            />
          </div>
          <div>
            <button type="button">Sign Up</button>
            <Link to="/" className="btn btn-primary">Home</Link>
          </div>
        </form>
      </div>
    );
  };

UserSignUp.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    property: state.property
  };
}

export default connect(mapStateToProps)(UserSignUp);