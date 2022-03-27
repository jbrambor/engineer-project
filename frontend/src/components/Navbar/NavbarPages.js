import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function NavbarPage(props) {
    return (
        <Link to={props.page}>
            {props.pageTitle}
        </Link>
    )
}

export default NavbarPage;
