import React from "react";


function HeaderImage(image) {
    return (
        <header className='header'>
            <div className='header__image'>
                <img src={image.src} alt={image.alt}></img>
            </div>
        </header>
    );
}

export default HeaderImage;
