import React from 'react';
import hand from "../../assets/landing/left-arm.svg";

const LandingHandImg = ({cls="mt-47 md:mt-35"}) => {
    return (
            <div className={`w-full ${cls}`}>
               <img className="w-[140%] sm:w-[133%] md:w-[110%] lg:w-[90%] xl:w-[110%] max-w-none" src={hand} alt="Hand base" />
            </div>

    );
}

export default LandingHandImg;
