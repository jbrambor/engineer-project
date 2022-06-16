import React from "react";

const MainPhoto = (hotelPhoto) => {
    return ( 
        <div className="hotel__gallery--main">
            <img src={hotelPhoto.src} alt={hotelPhoto.alt}></img>
        </div>
    );
};

export default MainPhoto;


