import React from "react";
import { Link } from "react-router-dom";

function NavbarElement(props) {
    return <Link to={props.page}>{ props.pageTitle }</Link>;
}

export default NavbarElement;
