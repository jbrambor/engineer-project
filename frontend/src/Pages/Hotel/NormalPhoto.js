import React from "react";

const NormalPhoto = (hotelPhoto) => {
    return ( 
        <div className={`hotel__gallery--normal--${hotelPhoto.number}`}>
            <img src={hotelPhoto.src} alt={hotelPhoto.alt}></img>
        </div>
    );
};

export default NormalPhoto;


