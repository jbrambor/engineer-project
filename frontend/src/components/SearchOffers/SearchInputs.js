import React from "react";

const SearchInput = (input) => {
    return (
        <div className="input">
            <input
                className="search__data--input"
                type={input.type}
                value={input.value}
                placeholder={input.placeholder}
            ></input>
        </div>
    );
};

export default SearchInput;
