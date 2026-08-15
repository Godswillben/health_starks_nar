import React from "react";
import LandingHandImg from "./LandingHandImg";
import LandingRash from "./LandingRash";
import ProductActivityInfo from "./ProductActivityInfo";
import SectionImg from "./SectionImg";
import leg from "../../assets/landing/section4/leg.jpg";

const ProductActivity = () => {
   return (
      <div className="flex flex-col xl:flex-row xl:items-center space-y-18 mt-18 sm:mt-32">
         <div className="relative w-full xl:w-6/10 overflow-hidden mt-10">
            <LandingHandImg cls="mt-79 sm:mt-52 md:mt-42" />
            <LandingRash cls="w-110 sm:w-[80%] top-12 -left-4 rotate-5 " />
            <div className="absolute z-30 top-[8%] w-11/12 left-1/2 -translate-x-1/2 max-w-md">
               <h4 className="mb-14 text-brown700 text-2xl text-center font-Kurale">
                  100,000+ Questions Answered. Find Yours.
               </h4>
               <div className="flex flex-col space-y-12">
                  <ProductActivityInfo data={"1,420+"} info={"Active Experts Online"} />
                  <ProductActivityInfo data={"18 minutes"} info={"Average Time to First Expert Answer"} />
                  <ProductActivityInfo data={"Managing fatigue drops during high-intensity training splits."} info={"Top Answered Today"} />
               </div>
            </div>
         </div>
         <SectionImg img={leg} height="20 xl:h-100" />
      </div>
   );
};

export default ProductActivity;
