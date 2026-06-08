import React from "react";
import rash from "../../assets/landing/rash.svg";
import pill from "../../assets/landing/pill.svg";
import LandingContentCardWheel from "./LandingContentCardWheel";
import FloatingAudioButton from "./FloatingAudioBtn";

const LandingContentBanner = () => {
   return (
      <div className="relative w-full h-screen overflow-hidden bg-slate-900">
         <FloatingAudioButton />
         {/* Custom CSS Loop injected directly into the component */}
         <style>{`
            @keyframes imageFlickerLoop {
               0%, 100% { opacity: 0; }
               54.5% { opacity: 0; }
               58.3%, 88.8% { opacity: 1; }
               92.6% { opacity: 0; }
            }
            .animate-image-loop {
               animation: imageFlickerLoop 6s linear infinite;
            }
         `}</style>

         {/* 1. Background Video Layer */}
         <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
         >
            <source src="/sad.mp4" />
            Your browser does not support the video tag.
         </video>

         {/* The Dark Background Tint Layer */}
         {/* <div className="absolute inset-0 bg-white backdrop-blur-sm z-10  animate-image-loop" /> */}

         {/* 2. Full Width Image Overlay (Keeps true dimensions, video visible on top/bottom edges) */}
         {/* <img
            src="/fahhh.jpeg"
            alt="Overlay Banner"
            className="absolute left-0 top-1/3 w-full h-auto max-h-full object-contain z-10 pointer-events-none animate-image-loop"
         /> */}

         {/* 2. Optional Color Overlay (Improves text readability) */}
         <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10" />

         {/* Top Layer: The Rash (Stacked perfectly on top) */}
         <div className="absolute inset-0 w-full pointer-events-none ">
            <img
               className="w-110 max-w-none transform rotate-[20deg] relative translate-x-[-3rem] -translate-y-[6rem]"
               src={rash}
               alt="Rash overlay"
            />
         </div>

         {/* 3. Foreground Content Layer */}
         <div className="relative z-20 flex flex-col items-center mt-40  w-full h-full px-6 text-white">
            <div className="max-w-2xl space-y-6">
               <p className="font-Pop font-semibold tracking-wide text-center">
                  Had a rash, and googled it. the result:
               </p>
               <div></div>
               <LandingContentCardWheel />
               <div className="relative inline-block mb-4 h-fit mt-[20vh] z-10 max-w-md w-full p-4 rounded-md bg-white/30 backdrop-blur-lg">
                  {/* The background pill graphic */}
                  <img
                     src={pill}
                     alt="Pill graphic"
                     className="block absolute inset-0 h-auto w-50  -translate-y-28 "
                  />
                  <p className="relative z-10 font-Faculty font-bold text-2xl tracking-wider leading-8 text-brown700">
                     Get answers to your health issues.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LandingContentBanner;
