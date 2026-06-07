import React from "react";
import phone from "../../assets/landing/phone.svg";
import pill from "../../assets/landing/pill.svg";
import arrowIcon from "../../assets/landing/Arrow.svg";
import LandingBannerCard from "./LandingBannerCard";
import banner from "../../assets/landing/banner.webp";
import LandingHandImg from "./LandingHandImg";
import LandingRash from "./LandingRash";

const LandingBanner = () => {
   return (
      <div className="flex flex-col space-y-18">
         <div className="relative w-full overflow-hidden mt-19">
            {/* Base Layer: The Hand */}
            <LandingHandImg />
            {/* Top Layer: The Rash (Stacked perfectly on top) */}
            <LandingRash />

            
            <LandingBannerCard />

            {/* Main Card Container: Floats over the arm/rash sections */}
            <div className="absolute z-20 top-[20%] w-11/12 left-1/2 -translate-x-1/2 max-w-md">
               {/* Pill Image + Floating Header Container */}
               <div className="relative inline-block mb-4 h-10 w-full">
                  {/* The background pill graphic */}
                  <img
                     src={pill}
                     alt="Pill graphic"
                     className="block h-auto w-50 relative translate-y-[-8rem]"
                  />

                  {/* Text perfectly centered on top of the pill */}
                  <h3 className="absolute w-fit inset-0 font-Faculty font-bold text-4xl tracking-wider text-center text-brown700">
                     Reddit for Health
                  </h3>
               </div>

               {/* Body Copy */}
               <p className="text-lg text-slate-700 mb-6 font-Comm leading-7">
                  Post questions about your health and get answers from verified
                  nurses and doctors.
               </p>

               {/* Call to Action Row */}
               <div className="flex items-center gap-2 cursor-pointer group border-b border-blue500 p-1 w-9/11">
                  <p className="text-blue500 font-medium group-hover:underline font-Marck text-xl tracking-wide">
                     Get started asking questions about your health.
                  </p>
                  <img
                     src={arrowIcon}
                     alt="Arrow"
                     className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  />
               </div>
            </div>
         </div>
         <div className="w-10/12 h-100 mx-auto border border-blue500 overflow-hidden rounded-lg">
         <img className="w-[220%] h-full object-cover relative" src={banner} alt="" /></div>
      </div>
   );
};

export default LandingBanner;
