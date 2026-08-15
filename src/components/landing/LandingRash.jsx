import React from 'react';
import rash from "../../assets/landing/rash.svg";

const LandingRash = ({img, cls="w-[110%] sm:w-[90%] lg:-top-4  top-0 -left-4 rotate-5  "}) => {
    return (
            <div className="absolute z-10 inset-0 w-full pointer-events-none ">
               <img
                  className={`${cls} max-w-none transform relative translate-x-12 -translate-y-[12rem]`}
                  src={img? img : rash}
                  alt="Rash overlay"
               />
            </div>
    );
}

export default LandingRash;
