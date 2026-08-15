import React from "react";
import rash from "../../assets/landing/section2/rash1.svg";
import blob from "../../assets/landing/section2/blob.svg";
import week from "../../assets/landing/section2/week.jpeg";
import torso from "../../assets/landing/section2/torso.jpeg";
import shape from "../../assets/landing/section2/polygon.svg";
import LandingHandImg from "./LandingHandImg";
import LandingRash from "./LandingRash";
import LandingAboveRash from "./LandingAboveRash";
import HowItWorksInfo from "./HowItWorksInfo";
import CallToAction from "./CallToAction";
import LandingBannerCard from "./LandingBannerCard";
import SectionImg from "./SectionImg";
import LandingBelowArm from "./LandingBelowArm";

const HowItWorks = () => {
   return (
    <div className="flex flex-col xl:flex-row xl:items-center space-y-18">
      <div className="xl:flex-1">
      <div className="mt-29 xl:w-full 2xl:w-210 xl:mt-0">
         <p className="font-Comm font-light text-3xl sm:text-4xl w-11/12 2xl:w-10/12 mx-auto text-blue800">How it works</p>
         <div className="relative w-full overflow-hidden mt-10 pb-32">
            <LandingBelowArm pos=" -left-8 top-116 sm:-right-8 sm:left-auto sm:top-156" imgcls="w-45 lg:w-65" img={torso} />
            <LandingHandImg cls="mt-120 sm:mt-50 md:mt-40 lg:mt-30" />
            {/* <LandingRash cls="w-120 rotate-5 -left-30 top-18"/> */}
            <LandingRash cls="w-170 sm:w-[120%] md:w-[110%] lg:w-[93%] xl:w-[110%] rotate-74 -left-30 top-48 sm:top-55 md:top-15 lg:top-0" img={rash} />
            <LandingAboveRash img={blob} pos="left-6 top-0" imgcls="w-45" />
            <LandingAboveRash  pos="-right-8 top-122 sm:top-52 md:top-42 md:right-26 lg:right-80 xl:right-30" />

            <LandingBannerCard cls="right-1 md:right-12 top-102 sm:top-112 md:top-102 lg:right-50" body={"Update: Burning sensation in my neck, and chest."} />
            <LandingBannerCard cls="right-1 md:right-12 top-102 sm:top-112 md:top-102 lg:right-50" body={"Update: Burning sensation in my neck, and chest."} />
            
            <LandingBelowArm pos=" left-5 top-227 md:top-200 lg:" imgcls="w-18 lg:" img={shape} />
            {/* Main Card Container: Floats over the arm/rash sections */}
            <div className="absolute z-30 top-[2%] w-11/12 left-1/2 -translate-x-1/2 ">
            <div className="sm:flex flex-wrap sm:justify-between  2xl:ml-[2.5%]">
                <HowItWorksInfo head={"Ask Anonymously"} body={"Post your symptoms, or health questions, under a secure, anonymous profile."} />
                <HowItWorksInfo head={"Crowdsource the Experience"} body={"Patients who have successfully navigated the exact same challenge share what actually worked for them "} />
                <HowItWorksInfo cls="mt-8" head={"Expert Verification"} body={"Licensed medical professionals review questions and provide answers."} />
                </div><CallToAction text="Answers from verified medical professionals." cls="mt-8 sm:mt-24 md:mt-44 md:w-fit" />
            </div>
         </div></div>
      </div>
      <SectionImg cls={"mr-[4.5%]"} img={week} />
      </div>
   );
};

export default HowItWorks;
