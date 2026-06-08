import React from 'react';
import hand from "../../assets/landing/left-arm.svg";

const LandingHandImg = ({cls="mt-47"}) => {
    return (
            <div className={`w-full ${cls}`}>
               <img className="w-127 max-w-none" src={hand} alt="Hand base" />
            </div>

    );
}

export default LandingHandImg;
