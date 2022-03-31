
import { theme } from 'modules/uiTheme/theme';
import React from "react";

import FooterContact from './FooterContact';
import FooterMenu from './FooterMenu';
import Footnote from './Footnote';

function Footer() {
    return (
        <footer className="footer" style={{
            background: `${theme.colors.neutral00}`
        }}>
            <div className="container">
                <div className="footer__content">
                    <div className="footer__content--main">
                        <FooterMenu/>
                        <FooterContact title="Contact" city="Poznan 64-640" street="ul. Kutrzeby 10" phone="+48 123 456 789" mail="tes@mail.pl"/>
                    </div>
                    <Footnote copyright="© 2022 GoToTravel. All rights reserved"/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
