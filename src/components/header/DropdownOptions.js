import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";
import './DropdownOptions.css'

const DropdownOptions = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  /*<Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret classname="userIcon">
        <p>User</p>
        <i class="far fa-user-cog" />
      </DropdownToggle>*/
    /*      <DropdownButton classname="userIcon">
        <p>User</p>
        <i class="far fa-user-cog" />
      </DropdownButton>*/
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret classname="userIcon">
            User<i class="far fa-user-cog" />
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem><Link to="/settings" style={{ textDecoration: 'none' }}>Settings</Link></DropdownItem>
        <DropdownItem><Link to="/sell" className="btn" textDecoration='none'>Sell Property</Link></DropdownItem>
        <DropdownItem>Log Out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropdownOptions;