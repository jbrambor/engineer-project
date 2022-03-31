import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavbarLogo from "./Logo";
import NavbarElement from "./NavbarElements";
import NavbarPage from "./NavbarPages";
function Navbar() {
    return (
        <nav
            className="nav"
            style={{
                height: "80px",
            }}
        >
            <div className="container">
                <Router>
                    <div
                        className="nav__left"
                        style={{
                            display: "flex",
                        }}
                    >
                        <div className="nav__left--logo">
                            <NavbarLogo link="/" name="Logo" />
                        </div>
                        <div className="nav__left--menu">
                            <NavbarPage page="/" pageTitle="Blog" />
                            <NavbarPage page="/" pageTitle="About Us" />
                        </div>
                    </div>
                    <div
                        className="nav__right"
                        style={{
                            display: "flex",
                        }}
                    >
                        <div className="nav__right--languages"></div>
                        <div className="nav__right--links">
                            <NavbarElement
                                page="/page"
                                pageTitle="Help Center"
                                href="/"
                                alt=""
                            ></NavbarElement>
                            <NavbarElement
                                page="/page"
                                pageTitle="Favourites"
                                href="/"
                                alt=""
                            />
                            <NavbarElement
                                page="/page"
                                pageTitle="Login"
                                href="/"
                                alt=""
                            />
                        </div>
                    </div>
                </Router>
            </div>
        </nav>
    );
}

export default Navbar;
