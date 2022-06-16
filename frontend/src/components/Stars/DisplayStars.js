import React from "react";

import CountStars from "./CountStars";

function getStarsCount(stars) {
    let arr = [], a = 1;
    while (a < stars) {
        arr.push(a);
        a++;
    }
    return arr;
}

const DisplayStars = (stars) => {
    let arr = getStarsCount(stars.count);
    return arr.map((val) => { // here you return the new array created by map
        return <CountStars key={val}/>
    });
};

export default DisplayStars;
