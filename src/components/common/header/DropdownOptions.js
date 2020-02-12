import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";
import './DropdownOptions.css'

const DropdownOptions = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret className="userIcon">
            User<i className="far fa-user-cog" />
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem><Link to="/settings" style={{ textDecoration: 'none' }}>Settings</Link></DropdownItem>
        <DropdownItem><Link to="/property-sell" className="btn" textDecoration='none'>Sell Property</Link></DropdownItem>
        <DropdownItem>Log Out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropdownOptions;