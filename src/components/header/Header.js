import React from "react";
import DropdownOptions from "./DropdownOptions";
import "./Header.css";
import img from "../../amberinternational-logo.svg";

function Header(props) {
  return (
    <div className="content">
      <div className="logoImage">
        <img src={img} alt="Real Estate Amber Logo" className="companyLogo" />
      </div>
      <div className="dropdownOptions">
        <DropdownOptions />
      </div>
    </div>
  );
}

export default Header;
