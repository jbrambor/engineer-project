import { currentDates } from "autoParams/currentDate";
import axios from "axios";
import SectionTitle from "components/SectionTitle/SectionTitle";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick';

import OfferSingle from "./TopRatedSingle";

import { settings } from "../Slider/settings";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TopRated = () => {
    const [hotels, setHotels] = useState([]);
    const GetDataFromAPI = (endpoint) => {
        axios.get(`${endpoint}`)
            .then((response) => {
                const hotelsResults = response.data.result;
                setHotels(hotelsResults);
                console.log(hotelsResults);
            });
    }; 
    const checkinDate = currentDates.currentDate;
    const  checkoutDate = currentDates.nextDate;
    useEffect(() => GetDataFromAPI(`http://localhost:8000/hotels/search/en-gb/${checkoutDate}/${checkinDate}/-534433/2/1`), []);
    return (
        <div className="container promoted">
            <div className="promoted__title">
                <SectionTitle name="Top rated" />
                <Link to="/hotels" className="section-all">
                    View all
                </Link>
            </div>
            <div className="promoted__slider">
                <Slider {...settings} >
                    { 
                        hotels.flatMap((hotel, index) => (
                            hotel.review_score > 8.0 &&
                                <OfferSingle key={index}
                                    href={'/hotel/' + hotel.hotel_id}
                                    src={hotel.max_photo_url}
                                    alt="offer"
                                    title={hotel.hotel_name}
                                    price={hotel.min_total_price.toFixed(2)}
                                    value={hotel.currencycode}
                                    country={hotel.country_trans}
                                    score={hotel.review_score}
                                    stars={Math.round(hotel.review_score / 2)}
                                />
                        )) 
                    }
                </Slider>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default TopRated;
