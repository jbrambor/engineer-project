import SectionTitle from "components/SectionTitle/SectionTitle";
import React from "react";
import { Link, BrowserRouter  as Router} from "react-router-dom";

import OfferSingle from "./TopRatedSingle";

import HotelImage from '../../images/hotel.png';




function TopRated() {
    return (
        <div className="container promoted">
            <div className="promoted__title">
                <SectionTitle name="Top rated"/>
                <Router>
                    <Link to="/" className="section-all">
                        View all
                    </Link>
                </Router>
            </div>
            <div className="promoted__slider">
                <Router>
                    <OfferSingle href="/" src={HotelImage} alt="offer" title="Aquamrais Hotel" price="1200" value="PLN" country="Egypt"/>
                    <OfferSingle href="/" src={HotelImage} alt="offer" title="Aquamrais Hotel" price="1200" value="PLN" country="Egypt"/>
                    <OfferSingle href="/" src={HotelImage} alt="offer" title="Aquamrais Hotel" price="1200" value="PLN" country="Egypt"/>
                    <OfferSingle href="/" src={HotelImage} alt="offer" title="Aquamrais Hotel" price="1200" value="PLN" country="Egypt"/>
                </Router>
            </div>
        </div>
    )
}

export default TopRated;
