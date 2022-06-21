import React, { useEffect, useState } from "react";

import NavbarLogo from "./Logo";
import NavbarElement from "./NavbarElements";
import NavbarPage from "./NavbarPages";

import NavbarImg from "../../images/logo.png";

const Navbar = () => {
    const [isUserLogged, setUserLogged] = useState(false);
    useEffect(() => {
        const getUser = localStorage.getItem('user');
        if (getUser) {
            setUserLogged(true);
        }

    }, []);
    return (
        <nav
            className="nav"
            style={{
                height: "80px",
            }}
        >
            <div className="container">
                <div
                    className="nav__left"
                    style={{
                        display: "flex",
                    }}
                >
                    <div className="nav__left--logo">
                        <NavbarLogo src={NavbarImg} link="/" alt="GoToTravel Logo" />
                    </div>
                    <div className="nav__left--menu">
                        <NavbarPage page="/blog" pageTitle="Blog" />
                        <NavbarPage page="/about-us" pageTitle="About Us" />
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
                            page="/faq"
                            pageTitle="Help Center"
                            href="/"
                            alt=""
                        ></NavbarElement>
                        <NavbarElement
                            page="/favourites"
                            pageTitle="Favourites"
                            href="/"
                            alt=""
                        />
                        { isUserLogged ? 
                            <NavbarElement
                                page="/logout"
                                pageTitle="Log Out"
                                href="/"
                                alt=""
                            />
                            : 
                            <NavbarElement
                                page="/login"
                                pageTitle="Login"
                                href="/"
                                alt=""
                            />
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
