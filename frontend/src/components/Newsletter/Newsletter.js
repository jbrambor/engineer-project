import { theme } from "modules/uiTheme/theme";
import React from "react";

const Newsletter = (newsletter) => {
    return (
        <div
            className="newsletter"
            style={{
                background: `${theme.colors.primary40}`,
            }}
        >
            <div className="container">
                <div className="newsletter__title">
                    <h2>{ newsletter.title }</h2>
                </div>
                <div className="newsletter__subtitle">
                    <p>{ newsletter.subtitle }</p>
                </div>
                <div className="newsletter__form">
                    <form>
                        <input
                            type={newsletter.input}
                            placeholder={newsletter.inputPlaceholder}
                        />
                        <input type="submit" value={newsletter.submitValue} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
