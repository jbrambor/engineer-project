import Blog from "components/Blog/Blog";
import HeaderImage from "components/HeaderImage/HeaderImage";
import InspirationsPlaces from "components/Inspirations/Inspirations";
import Newsletter from "components/Newsletter/Newsletter";
import PopularPlaces from "components/PopularPlaces/PopularPlaces";
import ReccommendedOffers from "components/RecommendedOffers/RecommendedOffers";
import SearchBar from "components/SearchOffers/SearchOffers";
import TopRated from "components/TopRated/TopRated";
import HeaderImg from "images/header-img.jpg";
import React from "react";


const HomePage = () => {
    return (
        <div className="homepage">
            <HeaderImage src={HeaderImg} alt="" />
            <SearchBar />
            <TopRated/>
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
        </div>
    );
};

export default HomePage;
