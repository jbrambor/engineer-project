import React from "react";
import { Link } from "react-router-dom";

const PopularPlacesSingle = (place) => {
    return (
        <div className="blog__last--card">
            <Link to={place.href}>
                <div className="card-img">
                    <img src={place.src} alt={place.alt}></img>
                </div>

                <div className="card-title">
                    <h3>{ place.title }</h3>
                </div>
                <div className="card-country">
                    <h4>{ place.country }</h4>
                </div>
                <div className="card-description">
                    <p>{ place.description }</p>
                </div>
                <div className="card-button">
                    <Link to={place.href}>Read more</Link>
                </div>
            </Link>
        </div>
    );
};

export default PopularPlacesSingle;
