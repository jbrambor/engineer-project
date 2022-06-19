import React from "react";

function customArrow() {
    return (
        <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L11 11L1 21" stroke="#384756"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    autoscroll: true,
    speed: 500,
    autoPlaySpeed: 500,
    autoplay: true,
    nextArrow: customArrow(),
    prevArrow: customArrow(),
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 667,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

