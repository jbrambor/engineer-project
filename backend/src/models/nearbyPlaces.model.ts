import { Schema, model, Document } from "mongoose";

const nearbyPlacesSchema = new Schema({
    landmarks: {
        closests: [
            {
                group_id: Number,
                landmark_name: String,
                distance: Number,
            },
        ],
        populars: [
            {
                group_id: Number,
                landmark_name: String,
                distance: Number,
            },
        ],
    },
    transport: {
        has_airport_shuttle: Number,
        has_free_airport_shuttle: Number,
        airport: {
            transport: [
                {
                    depart_minutes: Number,
                    price: Number,
                    currency_code: String,
                    duration_minutes: Number,
                    transport_type: String,
                },
            ],
            code: String,
            name: String,
        },
        is_well_connected: Number,
        has_parking: Number,
        has_free_parking: Number,
    },
    hotelData: {
        type: Schema.Types.ObjectId,
        ref: "HotelData",
    }
});

export const nearbyPlacesModel = model<Document>('NearbyPlaces', nearbyPlacesSchema);