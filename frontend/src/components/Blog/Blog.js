import SectionTitle from "components/SectionTitle/SectionTitle";
import React from "react";
import { Link } from "react-router-dom";

import BlogSingle from "./BlogSingle";

import BlogImage from "../../images/hotel.png";

const Blog = () => {
    return (
        <div className="container blog">
            <div className="blog__title">
                <SectionTitle name="Blog" />
                <Link to="/" className="section-all">
                    View all
                </Link>
            </div>
            <div className="blog__last">
                <BlogSingle
                    href="/"
                    src={BlogImage}
                    alt=""
                    category="Travel"
                    title="The most popular destination in Africa"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <BlogSingle
                    href="/"
                    src={BlogImage}
                    alt=""
                    category="Guidelines"
                    title="What should I take to USA?"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <BlogSingle
                    href="/"
                    src={BlogImage}
                    alt=""
                    category="safety"
                    title="Vacation in COVID-19 pandemic times"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <BlogSingle
                    href="/"
                    src={BlogImage}
                    alt=""
                    category="safety"
                    title="Vacation in COVID-19 pandemic times"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
        </div>
    );
};

export default Blog;
