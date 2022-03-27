import SectionTitle from "components/SectionTitle/SectionTitle";
import OfferSingle from "components/TopRated/TopRatedSingle";
import React from "react";
import { Link, BrowserRouter  as Router} from "react-router-dom";


import HotelImage from '../../images/hotel.png';

function ReccommendedOffers() {
    return (
        <div className="container recommended">
            <div className="promoted__title">
                <SectionTitle name="Selected for you"/>
                <Router>
                    <Link to="/" className="section-all">
                        View all
                    </Link>
                </Router>
            </div>
            <div className="recommended__offers">
                <Router>

                    <div className="first-offer">
                        <OfferSingle href="/" src={HotelImage} alt="offer" title="Golden Cherry" price="1785" value="PLN" country="Spain" description="The Golden Cherry is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming vacation, in the enchanting setting of Taormina and the Ionian Sea.

                        The rooms at the Panoramic Hotel are new, well-lit and inviting. Our reception staff will be happy to help you during your stay in Taormina, suggesting itineraries, guided visits and some good restaurants in the historic centre.

                        At the end of a stairway across from the hotel, the white pebbles on the beach... Read More">
                        </OfferSingle>
                        
                    </div>
                    <div className="all-offers">
                        <OfferSingle href="/" src={HotelImage} alt="offer" title="Aquamrais Hotel" price="1200" value="PLN" country="Egypt"/>
                        <OfferSingle href="/" src={HotelImage} alt="offer" title="Aquamrais Hotel" price="1200" value="PLN" country="Egypt"/>
                        <OfferSingle href="/" src={HotelImage} alt="offer" title="Aquamrais Hotel" price="1200" value="PLN" country="Egypt"/>
                        <OfferSingle href="/" src={HotelImage} alt="offer" title="Aquamrais Hotel" price="1200" value="PLN" country="Egypt"/>

                    </div>
                </Router>
            </div>
        </div>
    )
}

export default ReccommendedOffers;
