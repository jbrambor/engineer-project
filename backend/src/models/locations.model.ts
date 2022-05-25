import { Schema, model, Document } from "mongoose";

const locationsSchema = new Schema({
    latitude: Number,
    rtl: Number,
    timezone: String,
    nr_hotels: Number,
    image_url: String,
    city_name: String,
    dest_id: Number,
    city_ufi: Number,
    label: String,
    b_max_los_data: {
        experiment: String,
        default_los: Number,
        is_fullon: Number,
        extended_los: Number,
        has_extended_los: Number,
        max_allowed_los: Number,
    },
    hotels: Number,
    lc: String,
    landmark_type: Number,
    cc1: String,
    name: String,
    type: String,
    country: String,
    region: String,
    longitude: Number,
    dest_type: String,
});

export const locationsModel = model<Document>('Locations', locationsSchema);