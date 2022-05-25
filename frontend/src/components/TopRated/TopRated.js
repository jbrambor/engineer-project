import axios from "axios";
import SectionTitle from "components/SectionTitle/SectionTitle";
import { React, useEffect, useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Slider from 'react-slick';

import OfferSingle from "./TopRatedSingle";

import { settings } from "../Slider/settings";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import HotelImage from "../../images/hotel.png";


const TopRated = () => {
    const [hotels, setHotels] = useState([]);
    const GetDataFromAPI = (endpoint) => {
        axios.get(`${endpoint}`)
            .then((response) => {
                const hotelsResults = response.data.slice(0, 10);
                setHotels(hotelsResults);
            });
    }; 

    useEffect(() => GetDataFromAPI('http://fake-hotel-api.herokuapp.com/api/hotels'), []);
    
    return (
        <div className="container promoted">
            <div className="promoted__title">
                <SectionTitle name="Top rated" />
                <Router>
                    <Link to="/" className="section-all">
                        View all
                    </Link>
                </Router>
            </div>
            <div className="promoted__slider">
                <Router>
                    <Slider {...settings} >
                        { hotels.flatMap((hotel, index) => (
                            
                            <OfferSingle key={index}
                                href="/"
                                src={'https://picsum.photos/600/300?random='+index}
                                alt="offer"
                                title={hotel.name}
                                price={hotel.price}
                                value="PLN"
                                country={hotel.country}
                            />    
                        )) }
                    </Slider>
                </Router>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default TopRated;
