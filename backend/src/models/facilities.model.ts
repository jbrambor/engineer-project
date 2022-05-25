import { Schema, model, Document } from "mongoose";

const facilitiesSchema = new Schema({
    kind: String,
    hotelfacilitytype_id: Number,
    facilitytype_id: Number,
    value: Number,
    hotel_id: Number,
    is_common_room_facility: Number,
    roomfacilitytype_id: String,
    facilitytype_name: String,
    facility_name: String,
});

export const facilitiesModel = model<Document>('Facilities', facilitiesSchema);