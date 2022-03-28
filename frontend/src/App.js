// import {theme} from 'modules/uiTheme/theme';
import Blog from "components/Blog/Blog";
import HeaderImage from "components/HeaderImage/HeaderImage";
import Navbar from "components/Navbar/Navbar";
import Newsletter from "components/Newsletter/Newsletter";
import ReccommendedOffers from "components/RecommendedOffers/RecommendedOffers";
import SearchBar from "components/SearchOffers/SearchOffers";
import TopRated from "components/TopRated/TopRated";
import HeaderImg from "images/header-img.jpg";
import React from "react";

import "./App.scss";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <HeaderImage src={HeaderImg} alt=""/>
            <SearchBar/>
            <TopRated/>
            <ReccommendedOffers/>
            <Blog/>
            <Newsletter title="Newsletter" subtitle="Subscribe Our Newsletter!" input="text" inputPlaceholder="Email address" submitValue="Subscribe"/>
        </div>
    );
}

export default App;
