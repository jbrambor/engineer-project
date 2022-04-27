import React from "react";

const HeaderImage = (image) => {
    return (
        <header className="header">
            <div className="header__image">
                <img src={image.src} alt={image.alt}></img>
            </div>
        </header>
    );
};

export default HeaderImage;
