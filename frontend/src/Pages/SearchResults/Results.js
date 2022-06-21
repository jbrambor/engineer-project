import axios from "axios";
import HeaderImage from "components/HeaderImage/HeaderImage";
import Loading from "components/Loading/Loading";
import SearchBar from "components/SearchOffers/SearchOffers";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import ResultCard from "./ResultCard";

import HeaderImg from "../../images/search-bg.png";

const SearchResults = () => {
    const params = useParams();
    const checkInDate = params.check_in;
    const checkoutDate = params.check_out;
    const destID = params.dest_id;
    const rooms = params.rooms;
    const guests = params.guests;
    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const GetDataFromAPI = (endpoint) => {
        setIsLoading(true);
        axios.get(`${endpoint}`)
            .then((response) => {
                const hotelsResults = response.data.result;
                setHotels(hotelsResults);
                setIsLoading(false);
            });
    }; 
    useEffect(() => GetDataFromAPI(`http://localhost:8000/hotels/search/en-gb/${checkoutDate}/${checkInDate}/${destID}/${guests}/${rooms}`), []);
    
    return (
        <div className="results">
            <HeaderImage src={HeaderImg} alt="" />
            <SearchBar/>
            <div className="container">
                <h1>
                    Results
                </h1>
            </div>
            <div className="container">
                { isLoading ? <Loading/> : '' }
                { hotels.flatMap((hotel, index) => (
                    <ResultCard key={index}
                        src={hotel.max_photo_url} 
                        alt={hotel.hotel_name}
                        hotel={hotel.hotel_name}
                        review_score={hotel.review_score}
                        review={hotel.review_score}
                        review_count={hotel.review_nr}
                        price={hotel.min_total_price.toFixed(2)}
                        currency={hotel.currencycode}
                        description={hotel.unit_configuration_label}
                        dangerouslySetInnerHTML={{ __html: hotel.unit_configuration_label }}
                    />
                ))
                }
            </div>
        </div> 
    );
};

export default SearchResults;
