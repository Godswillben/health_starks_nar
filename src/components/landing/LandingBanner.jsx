import React from "react";
import pill from "../../assets/landing/pill.svg";
import LandingBannerCard from "./LandingBannerCard";
import LandingHandImg from "./LandingHandImg";
import LandingRash from "./LandingRash";
import LandingAboveRash from "./LandingAboveRash";
import CallToAction from "./CallToAction";
import SectionImg from "./SectionImg";

const LandingBanner = () => {
   return (
      <div className="flex flex-col space-y-18">
         <div className="relative w-full overflow-hidden mt-19">
            {/* Base Layer: The Hand */}
            <LandingHandImg />
            {/* Top Layer: The Rash (Stacked perfectly on top) */}
            <LandingRash />

            <LandingAboveRash />
            <LandingBannerCard body={"I have rashes on my arm and it itchies and spreading"} />

            {/* Main Card Container: Floats over the arm/rash sections */}
            <div className="absolute z-30 top-[20%] w-11/12 left-1/2 -translate-x-1/2 max-w-md">
               {/* Pill Image + Floating Header Container */}
               <div className="relative inline-block mb-4 h-10 w-full">
                  {/* The background pill graphic */}
                  <img
                     src={pill}
                     alt="Pill graphic"
                     className="block h-auto w-50 relative -translate-y-32"
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
               <CallToAction text="Get started asking questions about your health." />
            </div>
         </div>
            <SectionImg />
      </div>
   );
};

export default LandingBanner;
