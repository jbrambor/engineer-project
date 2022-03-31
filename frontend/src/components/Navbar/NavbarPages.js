import React from "react";
import { Link } from "react-router-dom";

function NavbarPage(props) {
    return <Link to={props.page}>{props.pageTitle}</Link>;
}

export default NavbarPage;
