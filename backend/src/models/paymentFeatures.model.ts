import { Schema, model, Document } from "mongoose";

const paymentFeaturesSchema = new Schema({
    hotel_id: Number,
    is_direct_payment: Number,
    creditcard_id: Number,
    cvc_required: Number,
    payable: Number,
    bookable: Number,
});

export const paymentFeaturesModel = model<Document>('PaymentFeatures', paymentFeaturesSchema);