import axios from "axios";
import HeaderImage from "components/HeaderImage/HeaderImage";
import HeaderImg from "images/map.jpeg";
import { React, useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import MainPhoto from "./MainPhoto";
import NormalPhoto from "./NormalPhoto";



const HotelSingle = () => {
    const params = useParams();
    const [hotel, setHotel] = useState([]);
    const [descriptions, setDescriptions] = useState([]);
    const GetDataFromAPI = (endpoint) => {
        axios.get(`${endpoint}`)
            .then((response) => {
                const hotelResults = response.data;
                console.log(hotelResults);
                setHotel(hotelResults);
                setDescriptions(response.data.description_translations);
            });
    }; 

    const [photos, setPhotos] = useState([]);
    const GetHotelGallery = (endpoint) => {
        axios.get(`${endpoint}`)
            .then((response) => {
                const hotelGallery = response.data.slice(0,5);
                setPhotos(hotelGallery);
            });
        
    }

    const [facilities, setFacilities] = useState([]);
    const GetHotelFacilities = (endpoint) => {
        axios.get(`${endpoint}`)
            .then((response) => {
                const hotelFacilities = response.data;
                console.log(hotelFacilities);
                setFacilities(hotelFacilities);
            })
    }

    useEffect(() => GetDataFromAPI(`http://localhost:8000/hotels/data/en-gb/${params.hotelID}`), []);
    useEffect(() => GetHotelGallery(`http://localhost:8000/hotels/photos/en-gb/${params.hotelID}`), []);
    useEffect(() => GetHotelFacilities(`http://localhost:8000/hotels/facilities/en-gb/${params.hotelID}`), []);

    return (
        <div className="single-hotel hotel">
            <HeaderImage src={HeaderImg} alt="" />
            
            <div className="container">
                <div className="hotel__location">
                    <span className="hotel__location--address">
                        {hotel.city}, {hotel.country}
                    </span>
                </div>
                <div className="hotel__data">
                    <div className="col">
                        <div className="hotel__data--name">
                            <h1>
                                {hotel.name}
                            </h1>
                        </div>
                        <div className="hotel__data--icons">
                            {/* ikony */}
                        </div>
                    </div>
                    <div className="col scores">
                        <div className="hotel__data--stars">
                            *****
                        </div>
                        <div className="hotel__data--reviews">
                            <span>
                                ({hotel.review_nr} reviews)
                            </span>
                            <span className="score">
                                {hotel.review_score}/10
                            </span>
                        </div>
                    </div>
                </div>
                <div className="hotel__gallery">
                    {
                        photos.map((photo, index) => (
                            index == 0 ? <MainPhoto key={photo.id} alt={index} src={photo.url_1440}></MainPhoto> : <NormalPhoto key={photo.id} number={index} src={photo.url_1440}></NormalPhoto>
                        ))
                    }
                </div>
                <div className="hotel__info">
                    <h2>
                        Description
                    </h2>
                    {descriptions.map(description => (
                        <p key={description.id}>
                            {description.description}
                        </p>
                    ))}
                    <h2>
                        Facilities
                    </h2>
                    <ul>
                        {facilities.map(facility => (
                            <li key={facility.id}>
                                {facility.facility_name}
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HotelSingle;
