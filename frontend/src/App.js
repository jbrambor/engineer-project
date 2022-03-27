// import {theme} from 'modules/uiTheme/theme';
import HeaderImage from "components/HeaderImage/HeaderImage";
import Navbar from "components/Navbar/Navbar";
import ReccommendedOffers from "components/RecommendedOffers/RecommendedOffers";
import SearchBar from "components/SearchOffers/SearchOffers";
import TopRated from "components/TopRated/TopRated";
import React from "react";

import "./App.css";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <HeaderImage href="/" alt=""/>
            <SearchBar/>
            <TopRated/>
            <ReccommendedOffers/>
        </div>
    );
}

export default App;
