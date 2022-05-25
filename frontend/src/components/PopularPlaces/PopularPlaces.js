import axios from "axios";
import SectionTitle from "components/SectionTitle/SectionTitle";
import { settings } from "components/Slider/settings";
import { React, useEffect, useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Slider from "react-slick";

import PopularPlacesSingle from "./PopularPlacesSingle";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularPlaces = () => {
    const [hotels, setHotels] = useState([]);
    const GetDataFromAPI = (endpoint) => {
        axios.get(`${endpoint}`)
            .then((response) => {
                const hotelsResults = response.data.slice(30, 50);
                setHotels(hotelsResults);
            });
    }; 

    useEffect(() => GetDataFromAPI('http://fake-hotel-api.herokuapp.com/api/hotels'), []);
    
    return (
        <div className="container popular">
            <div className="popular__title">
                <SectionTitle name="Popular Places" />
                <Router>
                    <Link to="/" className="section-all">
                        View all
                    </Link>
                </Router>
            </div>
            <div className="popular__last">
                <Router>
                    <Slider {...settings}>
                        { hotels.flatMap((hotel, index) => (
                            <PopularPlacesSingle key={index}
                                href="/"
                                src={'https://picsum.photos/600/300?random='+index}
                                alt=""
                                country={hotel.country}
                                title={hotel.name}
                            />
                        ))}
                    </Slider>
                </Router>
            </div>
        </div>
    );
};

export default PopularPlaces;
