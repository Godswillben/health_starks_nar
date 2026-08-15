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
      <div className="w-full flex flex-col xl:flex-row 2xl:justify-between xl:items-center space-y-18 sm:space-y-32">
         <div className="xl:flex-1">
            <div className="relative w-full 2xl:w-210 overflow-hidden mt-19 xl:pt-10">
               {/* Base Layer: The Hand */}
               <LandingHandImg />
               {/* Top Layer: The Rash (Stacked perfectly on top) */}
               <LandingRash />

               <LandingAboveRash />
               <LandingBannerCard
                  body={"I have rashes on my arm and it itchies and spreading"}
               />

               {/* Main Card Container: Floats over the arm/rash sections */}
               <div className="absolute z-30 top-[20%] sm:top-[42%] md:top-[50%]  w-11/12 md:w-10/12 left-1/2 -translate-x-1/2 ">
                  {/* Pill Image + Floating Header Container */}
                  <div className="relative inline-block mb-4 sm:mb-12 h-10 w-full">
                     {/* The background pill graphic */}
                     <img
                        src={pill}
                        alt="Pill graphic"
                        className="block h-auto w-50 sm:w-70 relative -translate-y-32 sm:-translate-y-45"
                     />

                     {/* Text perfectly centered on top of the pill */}
                     <h3 className="absolute w-fit inset-0 font-Faculty font-bold text-4xl sm:text-6xl tracking-wider text-center text-brown700">
                        Reddit for Health
                     </h3>
                  </div>

                  {/* Body Copy */}
                  <p className="text-lg sm:text-xl lg:text-2xl  text-slate-700 mb-6 sm:mb-13 font-Comm leading-8">
                     Post questions about your health and get answers from
                     verified nurses and doctors.
                  </p>

                  {/* Call to Action Row */}
                  <CallToAction
                     cls="lg:w-fit"
                     text="Get started asking questions about your health."
                  />
               </div>
            </div>
         </div>
         <SectionImg cls={"xl:mr-[5%]"} />
      </div>
   );
};

export default LandingBanner;
