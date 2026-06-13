import React from "react";
import arrowIcon from "../../assets/landing/Arrow.svg";

const CallToAction = ({cls="w-9/11 ", text=""}) => {
   return (
      <div className={`flex items-center gap-2 cursor-pointer group border-b border-blue500 p-1 ${cls}`}>
         <p className="text-blue500 font-medium group-hover:underline font-Marck text-xl sm:text-2xl tracking-wide sm:tracking-wider">
           {text}
         </p>
         <img
            src={arrowIcon}
            alt="Arrow"
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
         />
      </div>
   );
};

export default CallToAction;
