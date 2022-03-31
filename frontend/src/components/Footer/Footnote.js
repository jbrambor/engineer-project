import React from "react";

function Footnote(footnote){
    return (
        <div className="footer__content--footnote">
            <span className="footer__content--footnote-copyright">{ footnote.copyright }</span>
            <ul className="footer__content--footnote-terms">
                <li className="footer__content--footnote-terms-single_term">Terms & Conditions</li>
                <li className="footer__content--footnote-terms-single_term">Privacy Policy</li>
                <li className="footer__content--footnote-terms-single_term">Sitemap</li>
                <li className="footer__content--footnote-terms-single_term">Disclaimer</li>
            </ul>
        </div>   
    );
}

export default Footnote;
