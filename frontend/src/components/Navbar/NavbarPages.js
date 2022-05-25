import React from "react";
import { Link } from "react-router-dom";

const NavbarPage = (navPage) => {
    return <Link to={navPage.page}>{ navPage.pageTitle }</Link>;
};

export default NavbarPage;
