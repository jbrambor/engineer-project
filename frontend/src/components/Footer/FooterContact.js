import React from "react";

import FooterSocialLogo from './FooterSocialLogo';

import FacebookLogo from "../../images/FacebookLogo.svg";
import InstagramLogo from "../../images/InstagramLogo.svg";
import TwitterLogo from "../../images/TwitterLogo.svg";

function FooterContact(contact){
    return (
        <div className="footer__content--main-contact">
            <span className="footer__content--main-contact_title">{ contact.title }</span>
            <address className="footer__content--main-contact_address">
                <div className="footer__content--main-contact_address-city">
                    <span>{ contact.city }</span>
                    <span>{ contact.street }</span>
                </div>
                <div className="footer__content--main-contact_address-contact">
                    <span>tel.: <a href="`phone:${contact.phone}`">{ contact.phone }</a></span>
                    <span>email.: <a href="`mailto:${contact.mail}`">{ contact.mail }</a></span>
                </div>
            </address>
            <div className="footer__content--main-contact_socials">
                <FooterSocialLogo src={FacebookLogo} alt=""/>
                <FooterSocialLogo src={InstagramLogo} alt=""/>
                <FooterSocialLogo src={TwitterLogo} alt=""/>
            </div>
        </div>     
    );
}

export default FooterContact;
