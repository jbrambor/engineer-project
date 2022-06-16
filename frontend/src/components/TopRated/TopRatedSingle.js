import DisplayStars from "components/Stars/DisplayStars";
import React from "react";
import { Link} from "react-router-dom";

function excerptHotelTitle( title, length ) {
    if (title.length > length) {
        title = title.substr(0, length) + '...';
    }
    return title;
}

const TopRatedSingle = (card) => {
    return (
        <div className="promoted__slider--card">
            <Link to={card.href}>
                <div className="card-img">
                    <img src={card.src} alt={card.alt}></img>
                </div>
                <div className="card-title">
                    <h3>
                        { excerptHotelTitle(card.title, 15) }</h3>
                    <h3>
                        { card.price } { card.value }
                    </h3>
                </div>
                <div className="card-details">
                    <p>{ card.country }</p>
                </div>
                
                <div className="card-review">
                    <div className="card-review--stars">
                        <DisplayStars count={card.stars}/>
                    </div>
                    <p>{ card.score }/10</p>

                </div>
            </Link>
        </div>
    );
};

export default TopRatedSingle;
