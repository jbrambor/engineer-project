import { theme } from "modules/uiTheme/theme";
import React from "react";

const SearchSubmit = (input) => {
    return (
        <div className="input">
            <input
                className="search__submit--button"
                type={input.type}
                value={input.value}
                style={{
                    backgroundColor: `${theme.colors.secondary60}`,
                    color: `${theme.colors.neutral90}`,
                }}
            ></input>
        </div>
    );
};

export default SearchSubmit;
