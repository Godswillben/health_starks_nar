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
    <div className="flex flex-col space-y-18">
      <div className="mt-29">
         <p className="font-Comm font-light text-3xl w-11/12 mx-auto text-blue800">How it works</p>
         <div className="relative w-full overflow-hidden mt-10 pb-32">
            <LandingBelowArm pos=" -left-5 top-105" cls="w-75" img={torso} />
            <LandingHandImg cls="mt-100" />
            <LandingRash cls="w-120 rotate-5 -left-30 top-18"/>
            <LandingRash cls="w-170 rotate-74 -left-30 top-38" img={rash} />
            <LandingAboveRash img={blob} pos="left-6 top-0" imgcls="w-45" />
            <LandingAboveRash  pos="-right-8 top-102" />

            <LandingBannerCard cls="right-16 top-95" body={"Licensed medical professionals review questions and provide answers"} />
            
            <LandingBelowArm pos=" left-5 top-210" imgcls="w-18 " img={shape} />
            {/* Main Card Container: Floats over the arm/rash sections */}
            <div className="absolute z-30 top-[2%] w-11/12 left-1/2 -translate-x-1/2 max-w-md">
                <HowItWorksInfo head={"Ask Anonymously"} body={"Post your symptoms, or health questions, under a secure, anonymous profile."} />
                <HowItWorksInfo head={"Crowdsource the Experience"} body={"Patients who have successfully navigated the exact same challenge share what actually worked for them "} />
                <HowItWorksInfo cls="mt-48" head={"Expert Verification"} body={"Licensed medical professionals review questions and provide answers."} />
                <CallToAction text="Answers from verified medical professionals." cls="mt-8" />
            </div>
         </div>
      </div>
      <SectionImg img={week} />
      </div>
   );
};

export default HowItWorks;
