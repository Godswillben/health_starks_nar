import React from "react";
import phone from "../../assets/landing/phone.svg";

const LandingAboveRash = ({img, pos=" -right-10 top-50", imgcls="w-50"}) => {
   return (
      <div className={`absolute z-20 ${pos}`}>
         <img className={`${imgcls}`} src={img ? img : phone} alt="" />
      </div>
   );
};

export default LandingAboveRash;
