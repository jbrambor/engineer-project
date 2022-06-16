// import {theme} from 'modules/uiTheme/theme';
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import AboutUsPage from "Pages/AboutUs/About";
import BlogArchive from "Pages/Blog/BlogAll";
import HelpCenter from "Pages/HelpCenter/Faq";
import HomePage from "Pages/Homepage/Homepage";
import HotelSingle from "Pages/Hotel/single";
import LoginPage from "Pages/Login/Login";
import RegisterPage from "Pages/Register/Register";
import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import "./App.scss";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/hotel/:hotelID" element={<HotelSingle/>}/>
                    <Route path="/hotel/" element={<Navigate to="/"/>}/>
                    <Route path="/hotels/" element={<Navigate to="/"/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/about-us" element={<AboutUsPage/>}/>
                    <Route path="/blog" element={<BlogArchive/>}/>
                    <Route path="/faq" element={<HelpCenter/>}/>
                    <Route exact path="/" element={<HomePage/>}/>
                </Routes>
            </Router>
            
            <Footer />
            
        </div>
    );
}

export default App;
