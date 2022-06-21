import DisplayStars from "components/Stars/DisplayStars";
import React from "react";

const ResultCard = (result) => {
    
    return (
        <div className="result__card">
            <div className="result__card--img">
                <img src={result.src} alt={result.alt}/>
            </div>
            <div className="result__card--data">
                <div className="name">
                    <h2>
                        { result.hotel }
                    </h2>
                </div>
                <div className="stars">
                    <DisplayStars count={(result.review_score ) / 2}/>
                </div>
                <div className="facitilies">
                    { result.description }
                </div>
            </div>
            <div className="result__card--info">
                <div className="review">
                    <span>
                        { result.review } / 10
                    </span>
                </div>
                <div className="count">
                    <span>
                        { result.review_count } reviews
                    </span>
                </div>
                <div className="price">
                    <h3>
                        { result.price } { result.currency }
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default ResultCard;
