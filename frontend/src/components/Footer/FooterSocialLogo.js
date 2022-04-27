import React from "react";

const FooterSocialLogo = (logo) => {
    return (
        <div className="footer__content--main-contact_socials-logo">
            <img src={logo.src} alt={logo.alt}></img>
        </div>
    );
};

export default FooterSocialLogo;
