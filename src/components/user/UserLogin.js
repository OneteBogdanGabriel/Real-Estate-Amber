import React from "react";
import { Link } from "react-router-dom";
import "./UserLogin.css"

const UserLogin = props => {
  //onSubmit={handleSubmit}
  return (
    <div className="loginCard">
      <form>
        <div>
          <label>Email</label>
          <input name="email" type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <button type="submit">Login</button>
          <button type="button">Sign Up</button>
          <Link to="/" className="btn btn-primary">Home</Link>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
