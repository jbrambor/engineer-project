import { Schema, model, Document } from "mongoose";

const locationHighlightsSchema = new Schema({
    location_highlights: {
        nearby_stations: [
            {
                distance_meters: Number,
                station_type: String,
                station_name: String,
                distance_localized: String,
            },
        ],
        popular_landmarks: [String],
        has_restaurant: [
            {
                name: String
            },
        ],
    },
    plq_data: {
        price: String,
        quality: String,
        location: String,
    },
    hotelData: {
        type: Schema.Types.ObjectId,
        ref: "HotelData"
    }
});

export const locationHighlightsModel = model<Document>('LocationHighlights', locationHighlightsSchema);