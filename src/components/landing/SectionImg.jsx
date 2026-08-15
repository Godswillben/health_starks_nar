import React from "react";
import banner from "../../assets/landing/banner.webp";

const SectionImg = ({img, height="h-100 sm:h-140", cls}) => {
   return (
      <div className={`w-10/12 md:w-8/12 lg:w-7/12 xl:w-1/3 mx-auto border border-blue500 overflow-hidden rounded-lg ${height} ${cls}`}>
         <img
            className="w-[220%] h-full object-cover relative "
            src={img ? img : banner}
            alt=""
         />
      </div>
   );
};

export default SectionImg;
