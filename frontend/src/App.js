// import {theme} from 'modules/uiTheme/theme';
import Blog from "components/Blog/Blog";
import Footer from "components/Footer/Footer";
import HeaderImage from "components/HeaderImage/HeaderImage";
import InspirationsPlaces from "components/Inspirations/Inspirations";
import Navbar from "components/Navbar/Navbar";
import Newsletter from "components/Newsletter/Newsletter";
import PopularPlaces from "components/PopularPlaces/PopularPlaces";
import ReccommendedOffers from "components/RecommendedOffers/RecommendedOffers";
import SearchBar from "components/SearchOffers/SearchOffers";
import TopRated from "components/TopRated/TopRated";
import HeaderImg from "images/header-img.jpg";
import React from "react";

import "./App.scss";

function App() {
    return (
        <div className="App">
            <Navbar />
            <HeaderImage src={HeaderImg} alt="" />
            <SearchBar />
            <TopRated />
            <ReccommendedOffers />
            <Blog />
            <InspirationsPlaces/>
            <PopularPlaces />
            <Newsletter
                title="Newsletter"
                subtitle="Subscribe Our Newsletter!"
                input="text"
                inputPlaceholder="Email address"
                submitValue="Subscribe"
            />
            <Footer />
        </div>
    );
}

export default App;
