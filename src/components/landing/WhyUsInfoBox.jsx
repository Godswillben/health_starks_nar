import React from "react";

const WhyUsInfoBox = ({text}) => {
   return (
      <div className="flex space-x-4 items-center">
         <div className="size-2 bg-blue800 rounded-full"></div>
         <p className="font-Comm text-blue800 sm:text-lg md:text-xl flex-1">
            {text}
         </p>
      </div>
   );
};

export default WhyUsInfoBox;
