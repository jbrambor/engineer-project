import React from "react";
import { Link } from "react-router-dom";

function RecommendedSingle(card) {
    return (
        <div className="recommended__slider--card">
            <Link to={card.href}>
                <div className="card-img">
                    <img src={card.src} alt={card.alt}>

                    </img>
                </div>
                <div className="card-title">
                    <h3>
                        {card.title}
                    </h3>
                    <h3>
                        {card.price} {card.value}
                    </h3>
                </div>
                <div className="card-details">
                    <p>
                        {card.country}
                    </p>
                </div>
                <div className="card-description">
                    <p>
                        {card.description}
                    </p>
                </div>
            </Link>
            
        </div>
    );
}

export default RecommendedSingle;
