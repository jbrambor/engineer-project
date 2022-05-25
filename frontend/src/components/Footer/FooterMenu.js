import React from "react";

const FooterMenu = () => {
    return (
        <div className="footer__content--main-menu_group">
            <ul className="footer__content--main-menu">
                <li className="footer__content--main-menu_title">
                    Go To Travel
                </li>
                <li className="footer__content--main-menu_link">About Us</li>
                <li className="footer__content--main-menu_link">FAQ</li>
                <li className="footer__content--main-menu_link">Regulamin</li>
                <li className="footer__content--main-menu_link">Blog</li>
                <li className="footer__content--main-menu_link">Help</li>
            </ul>
            <ul className="footer__content--main-menu">
                <li className="footer__content--main-menu_title">
                    Recommandations
                </li>
                <li className="footer__content--main-menu_link">
                    Destinations
                </li>
                <li className="footer__content--main-menu_link">Hotels</li>
                <li className="footer__content--main-menu_link">Europe</li>
                <li className="footer__content--main-menu_link">Africa</li>
                <li className="footer__content--main-menu_link">Asia</li>
            </ul>
            <ul className="footer__content--main-menu">
                <li className="footer__content--main-menu_title">For You</li>
                <li className="footer__content--main-menu_link">COVID-19</li>
                <li className="footer__content--main-menu_link">Passports</li>
                <li className="footer__content--main-menu_link">
                    Cookies Policy
                </li>
                <li className="footer__content--main-menu_link">Newsletter</li>
            </ul>
        </div>
    );
};

export default FooterMenu;
