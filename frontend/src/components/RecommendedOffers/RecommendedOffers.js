import { currentDates } from "autoParams/currentDate";
import axios from "axios";
import Loading from "components/Loading/Loading";
import SectionTitle from "components/SectionTitle/SectionTitle";
import { React, useEffect, useState} from "react";
import { Link } from "react-router-dom";

import RecommendedSingle from "./RecommendedSingle";

    
const ReccommendedOffers = () => {
    const exampleLocations = [
        '-1746443', 
        '-1456928', 
        '529430',
        '-390625'
    ]
    function randomLocation() {
        let selectedLocation = exampleLocations[Math.floor(Math.random()*4)];

        return selectedLocation;
    }
    const [hotelSingle, setHotelsMain] = useState([]);
    const [hotelsFeatured, setHotelsFeatured] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const GetDataFromAPI = (endpoint) => {
        setIsLoading(true);
        axios.get(`${endpoint}`)
            .then((response) => {
                const hotelSingle = response.data.result.slice(0, 1);
                const hotelsFeatured = response.data.result.slice(1, 5);
                setHotelsMain(hotelSingle);
                setHotelsFeatured(hotelsFeatured);
                setIsLoading(false);
            });
    }; 
   
    const checkinDate = currentDates.currentDate;
    const checkoutDate = currentDates.nextDate;
    const randomDestId = randomLocation();
    useEffect(() => GetDataFromAPI(`http://localhost:8000/hotels/search/en-gb/${checkoutDate}/${checkinDate}/${randomDestId}/2/1`), []);

    return (
        <div className="container recommended">
            { hotelSingle ? 
                <div className="recommended__title">
                    <SectionTitle name="Selected for you" />
                    <Link to="/" className="section-all">
                        View all
                    </Link>
                </div>
                : ''}
            {isLoading ? <Loading/> : ''}
            <div className="recommended__offers">
                <div className="first-offer">
                    
                    { hotelSingle.flatMap((hotel, index) => (
                        <RecommendedSingle key={index}
                            href={'/hotel/' + hotel.hotel_id}
                            src={hotel.max_photo_url}
                            alt="offer"
                            title={hotel.hotel_name}
                            price={hotel.min_total_price.toFixed(2)}
                            value={hotel.currencycode}
                            country={hotel.country_trans}
                            // description={hotel.description}
                        ></RecommendedSingle>
                    ))}
                </div>
                <div className="all-offers">
                    { hotelsFeatured.flatMap((hotel, index) => (
                        <RecommendedSingle key={index}
                            href={'/hotel/' + hotel.hotel_id}
                            src={hotel.max_photo_url}
                            alt="offer"
                            title={hotel.hotel_name}
                            price={hotel.min_total_price.toFixed(2)}
                            value={hotel.currencycode}
                            country={hotel.country_trans}
                        />
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default ReccommendedOffers;
