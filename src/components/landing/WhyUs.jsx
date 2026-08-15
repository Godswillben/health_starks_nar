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
      <div className="mt-42 ">
         <p className="font-Comm font-light text-3xl sm:text-4xl w-11/12 mx-auto text-blue800">
            Why Ask Here vs. Google?
         </p>
         {/* content  */}
         <div className="flex flex-col xl:flex-row space-y-18  2xl:justify-between">
            <div className="xl:flex-1">
               <div className="relative w-full  2xl:w-210 overflow-hidden mt-10 lg:mt-5">
                  <LandingBelowArm
                     pos=" -right-1 top-20"
                     imgcls="w-35"
                     img={eyes}
                  />
                  <LandingBelowArm
                     pos=" -left-1 top-95 xl:top-79"
                     imgcls="w-35"
                     img={lips}
                  />
                  <LandingHandImg cls="mt-79 md:mt-39 lg:mt-0" />
                  <LandingRash cls="w-110 sm:w-[90%] top-12 md:top-8 lg:top-2 -left-4 rotate-5 " />

                  <LandingAboveRash pos="-right-8 top-82 md:right-32 md:top-62 lg:right-82 xl:right-32 lg:top-12" />

                  <LandingBannerCard
                     cls="right-6 top-122 sm:top-142 md:top-119 lg:right-44 xl:-right-5 lg:top-9"
                     body={"update: My eyes and lips are swollen"}
                  />

                  <div className="absolute z-30 top-[2%] lg:top-[20%] xl:top-[2%] w-10/12  left-1/2 -translate-x-1/2 ">
                     <h4 className="mb-10 md:mb-20 text-brown700 text-3xl sm:4xl leading-12 font-Englebert">
                        Better Than a Search Engine. Safer Than a Standard
                        Forum.
                     </h4>
                     <div className="flex flex-col space-y-6 md:space-y-12">
                        <WhyUsInfoBox text="Instead of an algorithm showing you worst-case scenarios, get structured answers from real people." />
                        <WhyUsInfoBox text="Question threads are organised, so you can scan the data you need in 5 seconds" />
                        <WhyUsInfoBox text="Upvotes don't just measure popularity—they measure utility." />
                     </div>
                     <CallToAction
                        text="Ask questions related to any health issues."
                        cls="mt-58 sm:mt-38 md:w-fit lg:mt-20"
                     />
                  </div>
               </div>
            </div>
            <SectionImg cls={"mr-[4.5%]"}  img={week} />
         </div>
      </div>
   );
};

export default WhyUs;
