import { theme } from "modules/uiTheme/theme";
import React from "react";

import SearchInput from "./SearchInputs";
import SearchSubmit from "./SearchSubmit";

const SearchBar = () => {
    return (
        <div className="container">
            <div
                className="search"
                style={{
                    backgroundColor: `${theme.colors.primary60}`,
                }}
            >
                <form>
                    <div className="search__data">
                        <SearchInput type="text" placeholder="Location" />
                        <SearchInput type="text" placeholder="Check In" />
                        <SearchInput type="text" placeholder="Check Out" />
                        <SearchInput type="text" placeholder="Check Guests" />
                    </div>
                    <div className="search__submit">
                        <SearchSubmit type="submit" value="Search" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;
