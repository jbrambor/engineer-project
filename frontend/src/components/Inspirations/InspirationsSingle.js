import React from "react";
import { Link } from "react-router-dom";

const InspirationSingle = (place) => {
    return (
        <div className="inspirations__places--card">
            <div className="inspirations__places--bg">
                <div className="card-bg">

                </div>
                <div className="card-img">
                    <img src={place.src} alt={place.alt}></img>
                </div>
            </div>
            <div className="inspirations__places--details">
                <Link to={place.href}>
                    <div className="card-title">
                        <h3>{ place.country }</h3>
                    </div>
                    <div className="card-description">
                        <p>{ place.description }</p>
                    </div>
                    
                </Link>

            </div>
        </div>
    );
};

export default InspirationSingle;
