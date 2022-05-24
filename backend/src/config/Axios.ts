import axios from "axios";

export const fetch = axios.create({
    baseURL: 'https://booking-com.p.rapidapi.com/v1/hotels/',
    headers: {
        'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
        'X-RapidAPI-Key': 'b8bfc06400mshde2008133e16636p1bd659jsn00271aac38c7',
    }
});