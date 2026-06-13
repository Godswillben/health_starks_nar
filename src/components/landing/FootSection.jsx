import React from "react";
import CallToAction from "./CallToAction";

const FootSection = () => {
   return (
      <div className="mt-38">
         <div className="w-11/12 mx-auto">
            <h3 className="text-center text-3xl sm:text-4xl lg:text-5xl text-blue800 font-Kurale leading-14 lg:leading-20">
               Stop searching in the dark. Get the collective wisdom of
               thousands of patients and pros.
            </h3>
            <div className="mt-18 mb-30">
               <CallToAction
                  text="Ask Your First Question Now (It's Free)"
                  cls="w-full sm:w-fit sm:mx-auto"
               />
            </div>
         </div>
         <div className="border-t-2 border-orange800 py-9">
            <div className="w-11/12 mx-auto">
               <div className="flex font-Elms items-center">
                  <p>Health</p>
                  <p>-</p>
                  <p className="text-xl font-bold">starks</p>
               </div>
               <p className="font-thin mt-6 text-center font-Elms text-sm text-neutral-500">
                  All rights reserved healthstarks 2026
               </p>
            </div>
         </div>
      </div>
   );
};

export default FootSection;
