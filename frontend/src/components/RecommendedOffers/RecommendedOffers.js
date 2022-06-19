import axios from "axios";
import SectionTitle from "components/SectionTitle/SectionTitle";
import { React, useEffect, useState} from "react";
import { Link } from "react-router-dom";

import RecommendedSingle from "./RecommendedSingle";

    
const ReccommendedOffers = () => {
    const [hotelSingle, setHotelsMain] = useState([]);
    const [hotelsFeatured, setHotelsFeatured] = useState([]);
    const GetDataFromAPI = (endpoint) => {
        axios.get(`${endpoint}`)
            .then((response) => {
                const hotelSingle = response.data.slice(0, 1);
                const hotelsFeatured = response.data.slice(1, 5);
                setHotelsMain(hotelSingle);
                setHotelsFeatured(hotelsFeatured);
            });
    }; 

    useEffect(() => GetDataFromAPI('http://fake-hotel-api.herokuapp.com/api/hotels'), []);
    return (
        <div className="container recommended">
            <div className="recommended__title">
                <SectionTitle name="Selected for you" />
                <Link to="/" className="section-all">
                    View all
                </Link>
            </div>
            <div className="recommended__offers">
                <div className="first-offer">
                    { hotelSingle.flatMap((hotel, index) => (
                        <RecommendedSingle
                            href="/"
                            src={'https://picsum.photos/600/300?random='+index + 50}
                            alt="offer"
                            title={hotel.name}
                            price={hotel.price}
                            value="PLN"
                            country={hotel.country}
                            description={hotel.description}
                        ></RecommendedSingle>
                    ))}
                    
                </div>
                <div className="all-offers">
                    { hotelsFeatured.flatMap((hotel, index) => (
                        <RecommendedSingle key={index}
                            href="/"
                            src={'https://picsum.photos/600/300?random='+index}
                            alt="offer"
                            title={hotel.name}
                            price={hotel.price}
                            value="PLN"
                            country={hotel.country}
                        />
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default ReccommendedOffers;
