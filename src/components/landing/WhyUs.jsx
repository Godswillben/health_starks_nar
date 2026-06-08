import React from "react";
import LandingHandImg from "./LandingHandImg";
import LandingRash from "./LandingRash";
import WhyUsInfoBox from "./WhyUsInfoBox";
import LandingAboveRash from "./LandingAboveRash";
import LandingBannerCard from "./LandingBannerCard";
import CallToAction from "./CallToAction";
import SectionImg from "./SectionImg";
import week from "../../assets/landing/section3/tierd.jpg";
import eyes from "../../assets/landing/section3/eyes.jpeg";
import lips from "../../assets/landing/section3/lips.jpeg";
import LandingBelowArm from "./LandingBelowArm";

const WhyUs = () => {
   return (
      <div className="mt-32">
         <p className="font-Comm font-light text-3xl w-11/12 mx-auto text-blue800">
            Why Ask Here vs. Google?
         </p>
         {/* content  */}
         <div className="flex flex-col space-y-18">
            <div className="relative w-full overflow-hidden mt-10">
               <LandingBelowArm pos=" -right-1 top-40" cls="w-75" img={eyes} />
               <LandingBelowArm pos=" -left-1 top-85" cls="w-75" img={lips} />
               <LandingHandImg cls="mt-79" />
               <LandingRash cls="w-110  top-12 -left-4 rotate-5 " />

               <LandingAboveRash pos="-right-8 top-82" />

               <LandingBannerCard
                  cls="right-6 top-122"
                  body={
                     "Licensed medical professionals review questions and provide answers"
                  }
               />

               <div className="absolute z-30 top-[2%] w-11/12 left-1/2 -translate-x-1/2 max-w-md">
                  <h4 className="mb-10 text-brown700 text-3xl leading-12 font-Englebert">
                     Better Than a Search Engine. Safer Than a Standard Forum.
                  </h4>
                  <div className="flex flex-col space-y-6">
                     <WhyUsInfoBox text="Instead of an algorithm showing you worst-case scenarios, get structured answers from real people." />
                     <WhyUsInfoBox text="Question threads are organised, so you can scan the data you need in 5 seconds" />
                     <WhyUsInfoBox text="Upvotes don't just measure popularity—they measure utility." />
                  </div>
                  <CallToAction
                     text="Ask questions related to any health issues."
                     cls="mt-58"
                  />
               </div>
            </div>
            <SectionImg img={week} />
         </div>
      </div>
   );
};

export default WhyUs;
