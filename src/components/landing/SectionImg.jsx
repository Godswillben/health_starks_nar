import React from "react";
import banner from "../../assets/landing/banner.webp";

const SectionImg = ({img, height="h-100"}) => {
   return (
      <div className={`w-10/12  mx-auto border border-blue500 overflow-hidden rounded-lg ${height}`}>
         <img
            className="w-[220%] h-full object-cover relative "
            src={img ? img : banner}
            alt=""
         />
      </div>
   );
};

export default SectionImg;
