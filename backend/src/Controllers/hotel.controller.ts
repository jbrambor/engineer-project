import { Router, Request, Response } from "express";

import { fetch } from '../config/Axios';

import { facilitiesModel } from '../models/facilities.model';
import { hotelDataModel } from '../models/hotelData.model';
import { photosModel } from '../models/photos.model';
import { reviewScoreModel } from '../models/reviewScore.model';
import { locationsModel } from '../models/locations.model';
import { paymentFeaturesModel } from '../models/paymentFeatures.model';
import { descriptionModel } from '../models/description.model';
import { questionsModel } from '../models/questions.model';
import { locationHighlightsModel } from '../models/locationHighlights.model';
import { nearbyPlacesModel } from '../models/nearbyPlaces.model';

export class HotelController {
    public path = '/hotels';
    public router = Router();

    constructor() {
        this.registerRoutes();
    }

    private registerRoutes() {
        this.router.get(`${this.path}/facilities/:locale/:hotel_id`, this.facilitiesOfTheHotel);
        this.router.get(`${this.path}/data/:locale/:hotel_id`, this.hotelData);
        this.router.get(`${this.path}/photos/:locale/:hotel_id`, this.photosOfTheHotel);
        this.router.get(`${this.path}/review-scores/:locale/:hotel_id`, this.reviewScoresOfTheHotel);
        this.router.get(`${this.path}/locations/:locale/:name`, this.searchLocations);
        this.router.get(`${this.path}/payment-features/:locale/:hotel_id`, this.paymentFeaturesOfTheHotel);
        this.router.get(`${this.path}/description/:locale/:hotel_id`, this.descriptionOfTheHotel);
        this.router.get(`${this.path}/questions/:locale/:hotel_id`, this.questionAboutTheHotel);
        this.router.get(`${this.path}/location-highlights/:locale/:hotel_id`, this.locationHighlightsOfTheHotel);
        this.router.get(`${this.path}/nearby-places/:locale/:hotel_id`, this.nearbyPlacesOfTheHotel);
        this.router.get(`${this.path}/search/:locale/:checkout_date/:checkin_date/:dest_id/:adults_number/:room_number`, this.searchHotels);
    }

    private async facilitiesOfTheHotel(request: Request, response: Response) {
        const { locale, hotel_id } = request.params;

        const facilities = await facilitiesModel.find({ hotel_id });

        if (facilities.length) {
            console.log("Getting casching data...");
            response.json(facilities);
        } else {
            console.log("Starting casching date...");
            const res = await fetch.get('facilities', {
                params: { locale, hotel_id },
            });

            res.data.forEach(facility => {
                const newFacility = new facilitiesModel(facility);
                newFacility.save();
            });

            console.log("Data casched...");
            response.send(res.data);
        }
    }

    private async hotelData(request: Request, response: Response) {
        const { locale, hotel_id } = request.params;

        const hotelData = await hotelDataModel.findOne({ hotel_id });

        if (hotelData) {
            console.log("Getting casching data...");
            response.json(hotelData);
        } else {
            const res = await fetch.get('data', {
                params: { locale, hotel_id },
            });

            const newHotelData = new hotelDataModel(res.data);
            newHotelData.save();

            console.log("Data casched...");
            response.send(res.data);
        }
    }

    private async photosOfTheHotel(request: Request, response: Response) {
        const { locale, hotel_id } = request.params;

        const hotelData: any = await hotelDataModel.findOne({ hotel_id });

        if (hotelData?.photos.length) {
            console.log("Getting casching data...");
            const hotelPhotos: any = await hotelDataModel.findOne({ hotel_id }).populate('photos');
            response.json(hotelPhotos.photos);
        } else {
            console.log("Starting casching date...");
            let newHotelData;
            if (!hotelData) {
                console.log("Setup hotel data");
                const resHotel = await fetch.get('data', {
                    params: { locale, hotel_id },
                });

                newHotelData = new hotelDataModel(resHotel.data);
                newHotelData.save();

                const res = await fetch.get('photos', {
                    params: { locale, hotel_id },
                });

                res.data.forEach(photo => {
                    const newPhoto = new photosModel({
                        ...photo,
                        hotelData: newHotelData._id
                    });
                    newPhoto.save();

                    newHotelData.photos.push(newPhoto);
                });
                newHotelData.save();

                console.log("Data casched...");
                response.send(res.data);
            } else {
                const res = await fetch.get('photos', {
                    params: { locale, hotel_id },
                });

                res.data.forEach(photo => {
                    const newPhoto = new photosModel({
                        ...photo,
                        hotelData: hotelData._id
                    });
                    newPhoto.save();

                    hotelData.photos.push(newPhoto);
                });
                hotelData.save();

                console.log("Data casched...");
                response.send(res.data);
            }
        }
    }

    private async reviewScoresOfTheHotel(request: Request, response: Response) {
        const { locale, hotel_id } = request.params;

        const reviewScores = await reviewScoreModel.findOne({ hotel_id });

        if (reviewScores) {
            console.log("Getting casching data...");
            response.json(reviewScores);
        } else {
            const res = await fetch.get('review-scores', {
                params: { locale, hotel_id },
            });

            const newReviewScores = new reviewScoreModel(res.data);
            newReviewScores.save();

            console.log("Data casched...");
            response.send(res.data);
        }
    }

    private async searchLocations(request: Request, response: Response) {
        const { locale, name } = request.params;

        const locations = await locationsModel.find({ city_name: name });

        if (locations.length) {
            console.log("Getting casching data...");
            response.json(locations);
        } else {
            console.log("Starting casching date...");
            const res = await fetch.get('locations', {
                params: { locale, name },
            });

            res.data.forEach(location => {
                const newLocation = new locationsModel(location);
                newLocation.save();
            });

            console.log("Data casched...");
            response.send(res.data);
        }
    }

    private async paymentFeaturesOfTheHotel(request: Request, response: Response) {
        const { locale, hotel_id } = request.params;

        const paymentFeatures = await paymentFeaturesModel.find({ hotel_id });

        if (paymentFeatures.length) {
            console.log("Getting casching data...");
            response.json(paymentFeatures);
        } else {
            console.log("Starting casching date...");
            const res = await fetch.get('payment-features', {
                params: { locale, hotel_id },
            });

            res.data.forEach(payment => {
                const newPayment = new paymentFeaturesModel(payment);
                newPayment.save();
            });

            console.log("Data casched...");
            response.send(res.data);
        }
    }

    private async descriptionOfTheHotel(request: Request, response: Response) {
        const { locale, hotel_id } = request.params;

        const hotelData: any = await hotelDataModel.findOne({ hotel_id });

        if (hotelData?.description) {
            console.log("Getting casching data...");
            const hotelPhotos: any = await hotelDataModel.findOne({ hotel_id }).populate('description');
            response.json(hotelPhotos.description);
        } else {
            console.log("Starting casching date...");
            let newHotelData;
            if (!hotelData) {
                console.log("Setup hotel data");
                const resHotel = await fetch.get('data', {
                    params: { locale, hotel_id },
                });

                newHotelData = new hotelDataModel(resHotel.data);
                newHotelData.save();

                const res = await fetch.get('description', {
                    params: { locale, hotel_id },
                });

                const newDescription = new descriptionModel({
                    ...res.data,
                    hotelData: newHotelData._id
                });
                newDescription.save();

                newHotelData.desciption = newDescription;
                newHotelData.save();

                console.log("Data casched...");
                response.send(res.data);
            } else {
                const res = await fetch.get('description', {
                    params: { locale, hotel_id },
                });

                const newDescription = new descriptionModel({
                    ...res.data,
                    hotelData: hotelData._id
                });
                newDescription.save();

                hotelData.description = newDescription;
                hotelData.save();

                console.log("Data casched...");
                response.send(res.data);
            }
        }
    }

    private async questionAboutTheHotel(request: Request, response: Response) {
        const { locale, hotel_id } = request.params;

        const question = await questionsModel.findOne({ hotel_id });

        if (question) {
            console.log("Getting casching data...");
            response.json(question);
        } else {
            const res = await fetch.get('questions', {
                params: { locale, hotel_id },
            });

            const newQuestion = new questionsModel(res.data);
            newQuestion.save();

            console.log("Data casched...");
            response.send(res.data);
        }
    }

    private async locationHighlightsOfTheHotel(request: Request, response: Response) {
        const { locale, hotel_id } = request.params;

        const hotelData: any = await hotelDataModel.findOne({ hotel_id });

        if (hotelData?.locationHighlights) {
            console.log("Getting casching data...");
            const hotelPhotos: any = await hotelDataModel.findOne({ hotel_id }).populate('locationHighlights');
            response.json(hotelPhotos.locationHighlights);
        } else {
            console.log("Starting casching date...");
            let newHotelData;
            if (!hotelData) {
                console.log("Setup hotel data");
                const resHotel = await fetch.get('data', {
                    params: { locale, hotel_id },
                });

                newHotelData = new hotelDataModel(resHotel.data);
                newHotelData.save();

                const res = await fetch.get('location-highlights', {
                    params: { locale, hotel_id },
                });

                const newLocationHighlights = new locationHighlightsModel({
                    ...res.data,
                    hotelData: newHotelData._id
                });
                newLocationHighlights.save();

                newHotelData.locationHighlights = newLocationHighlights;
                newHotelData.save();

                console.log("Data casched...");
                response.send(res.data);
            } else {
                const res = await fetch.get('location-highlights', {
                    params: { locale, hotel_id },
                });

                const newLocationHighlights = new locationHighlightsModel({
                    ...res.data,
                    hotelData: hotelData._id
                });
                newLocationHighlights.save();

                hotelData.locationHighlights = newLocationHighlights;
                hotelData.save();

                console.log("Data casched...");
                response.send(res.data);
            }
        }
    }

    private async nearbyPlacesOfTheHotel(request: Request, response: Response) {
        const { locale, hotel_id } = request.params;

        const hotelData: any = await hotelDataModel.findOne({ hotel_id });

        if (hotelData?.nearbyPlaces) {
            console.log("Getting casching data...");
            const hotelPhotos: any = await hotelDataModel.findOne({ hotel_id }).populate('nearbyPlaces');
            response.json(hotelPhotos.nearbyPlaces);
        } else {
            console.log("Starting casching date...");
            let newHotelData;
            if (!hotelData) {
                console.log("Setup hotel data");
                const resHotel = await fetch.get('data', {
                    params: { locale, hotel_id },
                });

                newHotelData = new hotelDataModel(resHotel.data);
                newHotelData.save();

                const res = await fetch.get('nearby-places', {
                    params: { locale, hotel_id },
                });

                const newNearbyPlaces = new nearbyPlacesModel({
                    ...res.data,
                    hotelData: newHotelData._id
                });
                newNearbyPlaces.save();

                newHotelData.nearbyPlaces = newNearbyPlaces;
                newHotelData.save();

                console.log("Data casched...");
                response.send(res.data);
            } else {
                const res = await fetch.get('nearby-places', {
                    params: { locale, hotel_id },
                });

                const newNearbyPlaces = new nearbyPlacesModel({
                    ...res.data,
                    hotelData: hotelData._id
                });
                newNearbyPlaces.save();

                hotelData.nearbyPlaces = newNearbyPlaces;
                hotelData.save();

                console.log("Data casched...");
                response.send(res.data);
            }
        }
    }

    private async searchHotels(request: Request, response: Response) {
        const { locale, checkout_date, checkin_date, dest_id, adults_number, room_number } = request.params;

        const res = await fetch.get('search', {
            params: {
                locale,
                checkout_date,
                checkin_date,
                dest_id,
                adults_number,
                room_number,
                units: 'metric',
                dest_type: 'city',
                order_by: 'popularity',
                filter_by_currency: 'PLN',
                page_number: '0',
            }
        });

        response.send(res.data);
    }
}