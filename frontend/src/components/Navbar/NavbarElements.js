import React from "react";
import { Link } from "react-router-dom";

function NavbarElement(props) {
    return (
        <Link to={props.page}>
            {props.pageTitle}
            <img src={props.href} alt={props.alt}></img>
        </Link>
    )
}

export default NavbarElement;
