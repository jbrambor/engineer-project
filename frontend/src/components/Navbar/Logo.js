import React from "react";
import { Link } from "react-router-dom";

const NavbarLogo = (props) => {
    return (
        <Link style={{ fontSize: "20px", fontWeight: "bold" }} to={props.link}>
            { props.name }
        </Link>
    );
};

export default NavbarLogo;
