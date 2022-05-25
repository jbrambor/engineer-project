import React from "react";
import { Link } from "react-router-dom";

const NavbarElement = (navElement) => {
    return <Link to={navElement.page}>{ navElement.pageTitle }</Link>;
};

export default NavbarElement;
