import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { SearchInputs } from 'components/SearchOffers/SearchInputs';
import { theme } from "modules/uiTheme/theme";
import React from "react";

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
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <SearchInputs/>
                        </LocalizationProvider>
                        
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
