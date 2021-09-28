import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar bg-primary">
      <h4>
        <i className="brand-logo fab fa-github"></i>
        {props.title}
      </h4>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "Github Finder",
};

export default Navbar;
