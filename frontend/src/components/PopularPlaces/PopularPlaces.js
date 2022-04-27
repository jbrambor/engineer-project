import SectionTitle from "components/SectionTitle/SectionTitle";
import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

import PopularPlacesSingle from "./PopularPlacesSingle";

import PopularPlaceImage from "../../images/hotel.png";

const PopularPlaces = () => {
    return (
        <div className="container popular">
            <div className="popular__title">
                <SectionTitle name="Popular Places" />
                <Router>
                    <Link to="/" className="section-all">
                        View all
                    </Link>
                </Router>
            </div>
            <div className="popular__last">
                <Router>
                    <PopularPlacesSingle
                        href="/"
                        src={PopularPlaceImage}
                        alt=""
                        country="Zanzibar"
                        title="RedFlag Hotel"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <PopularPlacesSingle
                        href="/"
                        src={PopularPlaceImage}
                        alt=""
                        country="France"
                        title="Fiesto Hotel"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <PopularPlacesSingle
                        href="/"
                        src={PopularPlaceImage}
                        alt=""
                        country="Ukraine"
                        title="Thundermine"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <PopularPlacesSingle
                        href="/"
                        src={PopularPlaceImage}
                        alt=""
                        country="Ukraine"
                        title="Triumph"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </Router>
            </div>
        </div>
    );
};

export default PopularPlaces;
