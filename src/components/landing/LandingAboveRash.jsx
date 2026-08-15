import React from "react";
import phone from "../../assets/landing/phone.svg";

const LandingAboveRash = ({img, pos=" -right-10 top-50 sm:top-35 md:right-25 lg:right-82 xl:right-32", imgcls="w-50 sm:w-70"}) => {
   return (
      <div className={`absolute z-20 ${pos}`}>
         <img className={`${imgcls}`} src={img ? img : phone} alt="" />
      </div>
   );
};

export default LandingAboveRash;
