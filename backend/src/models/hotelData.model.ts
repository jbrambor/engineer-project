import { Schema, model, Document } from "mongoose";

const hotelDataSchema = new Schema({
    main_photo_id: Number,
    district_id: Number,
    hotel_facilities_filtered: String,
    hoteltype_id: Number,
    checkin: {
        "24_hour_available": Number,
        to: String,
        from: String,
    },
    checkout: {
        "24_hour_available": Number,
        to: String,
        from: String,
    },
    languages_spoken: {
        languagecode: [String],
    },
    url: String,
    country: String,
    description_translations: [
        {
            languagecode: String,
            descriptiontype_id: Number,
            description: String,
        }
    ],
    city_id: Number,
    preferred_plus: Number,
    main_photo_url: String,
    countrycode: String,
    is_single_unit_vr: Number,
    name: String,
    class_is_estimated: Number,
    preferred: Number,
    review_nr: Number,
    district: String,
    currencycode: String,
    address: String,
    class: Number,
    hotel_id: Number,
    hotel_facilities: String,
    is_vacation_rental: Number,
    entrance_photo_url: String,
    review_score_word: String,
    maxrate: Number,
    email: String,
    booking_home: {
        is_vacation_rental: Number,
        is_single_unit_property: Number,
        group: String,
        quality_class: String,
        segment: Number,
        is_booking_home: Number,
        is_single_type_property: Number,
        is_aparthotel: Number,
    },
    zip: Number,
    ranking: Number,
    review_score: String,
    city: String,
    location: {
        latitude: Number,
        longitude: Number,
    },
    minrate: Number,
    photos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Photos"
        }
    ],
    description: {
        type: Schema.Types.ObjectId,
        ref: "Description"
    },
    locationHighlights: {
        type: Schema.Types.ObjectId,
        ref: "LocationHighlights"
    },
    nearbyPlaces: {
        type: Schema.Types.ObjectId,
        ref: "NearbyPlaces",
    }
});

export const hotelDataModel = model<Document>('HotelData', hotelDataSchema);