import { Schema, model, Document } from "mongoose";

const reviewScoreSchema = new Schema({
    hotel_id: Number,
    score_breakdown: [
        {
            count: Number,
            average_score: String,
            from_year: Number,
            question: [
                {
                    score: Number,
                    score_comparison_to_ufi_average: Number,
                    question: String,
                    count: Number,
                    localized_question: String,
                }
            ],
            customer_type: String,
        },
    ],
    score_distribution: [
        {
            score: Number,
            count: Number,
            percent: Number,
        }
    ],
    score_percentage: [
        {
            percent: Number,
            score_word: String,
            count: Number,
            score_start: Number,
            score_end: Number,
        }
    ]
});

export const reviewScoreModel = model<Document>('ReviewScore', reviewScoreSchema);