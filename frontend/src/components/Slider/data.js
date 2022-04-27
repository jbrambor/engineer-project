import axios from "axios";
import {useEffect, useState} from "react";

const DisplayHotels = () => {
    const [hotels, setHotels] = useState([]);
    const GetDataFromAPI = (endpoint) => {
        axios.get(`${endpoint}`)
            .then((response) => {
                const hotelsResults = response.data.slice(0, 10);
                setHotels(hotelsResults);
            });
    };
    
    useEffect(() => GetDataFromAPI('http://fake-hotel-api.herokuapp.com/api/hotels'), []);
    return hotels;
}    

export const hotelsData = {
    hotelsInfo: DisplayHotels()
}
