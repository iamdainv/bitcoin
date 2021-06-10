// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
  return (
    <Link to="/users" className="list-item">
      {props.children}
    </Link>
  );
};

export default NavItem;
