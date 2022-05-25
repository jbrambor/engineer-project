import { Schema, model, Document } from "mongoose";

const questionsSchema = new Schema({
    average_response_time: String,
    collect_q_and_a_questions: Number,
    success: Number,
    opted_out_of_q_and_a: Number,
    hotel_id: Number,
    q_and_a_pairs: [
        {
            rank: Number,
            asked_at: String,
            translated_question: String,
            answer_time_epoch: Number,
            hidden: Number,
            ask_time_epoch: Number,
            question: String,
            question_id: Number,
            answer: String,
            answered_at: String,
            px_upsort_covid_q_and_a_ds_model__would_resort: Number,
            hotel_id: Number,
            votes: Number,
            translated_answer: String,
            answered_at_formatted: String,
            is_or_could_be_translated: Number,
            naive_sentiment: Number,
            language: String,
            room_id: Number,
            sign_off: Number,
        },
    ],
});

export const questionsModel = model<Document>('Questions', questionsSchema);