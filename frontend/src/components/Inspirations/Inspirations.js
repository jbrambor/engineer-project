import axios from "axios";
import SectionTitle from "components/SectionTitle/SectionTitle";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PopularPlacesSingle from "./InspirationsSingle";


const InspirationsPlaces = () => {
    const [hotels, setHotels] = useState([]);
    const GetDataFromAPI = (endpoint) => {
        axios.get(`${endpoint}`)
            .then((response) => {
                const hotelsResults = response.data.slice(20, 24);
                setHotels(hotelsResults);
            });
    }; 
    useEffect(() => GetDataFromAPI('http://fake-hotel-api.herokuapp.com/api/hotels'), []);
    
    return (
        <div className="container inspirations">
            <div className="inspirations__title">
                <SectionTitle name="Inspirations" />
                <Link to="/" className="section-all">
                    View all
                </Link>
            </div>
            <div className="inspirations__places">
                { hotels.flatMap((hotel, index) => (
                    <PopularPlacesSingle key={index}
                        href="/"
                        src={'https://picsum.photos/600/300?random='+index}
                        alt=""
                        country={hotel.city}
                        description={hotel.description}
                    />
                ))} 
            </div>
        </div>
    );
};

export default InspirationsPlaces;
