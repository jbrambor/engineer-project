import React from "react";
import { Link } from "react-router-dom";

const NavbarLogo = (logo) => {
    return (
        <Link style={{ fontSize: "20px", fontWeight: "bold" }} to={logo.link}>
            { logo.name }
        </Link>
    );
};

export default NavbarLogo;


