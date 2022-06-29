// import {theme} from 'modules/uiTheme/theme';
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import AboutUsPage from "Pages/AboutUs/About";
import BlogArchive from "Pages/Blog/BlogAll";
import BlogSinglePost from "Pages/Blog/BlogSingle";
import HelpCenter from "Pages/HelpCenter/Faq";
import HomePage from "Pages/Homepage/Homepage";
import HotelSingle from "Pages/Hotel/single";
import LoginPage from "Pages/Login/Login";
import LogOut from "Pages/Logout/Logout";
import RegisterPage from "Pages/Register/Register";
import SearchResults from "Pages/SearchResults/Results";
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
                    <Route path="/logout" element={<LogOut/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/about-us" element={<AboutUsPage/>}/>
                    <Route path="/blog" element={<BlogArchive/>}/>
                    <Route path="/blog/:ID" element={<BlogSinglePost/>}/>
                    <Route path="/faq" element={<HelpCenter/>}/>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route exact path="/search/:dest_id/:check_in/:check_out/:guests/:rooms" element={<SearchResults/>}/>
                    
                </Routes>
            </Router>
            
            <Footer />
            
        </div>
    );
}

export default App;
