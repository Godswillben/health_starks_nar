import React from "react";

const LandingBelowArm = ({img, pos=" -right-10 top-50", imgcls="w-50"}) => {
   return (
      <div className={`absolute -z-10 ${pos}`}>
         <img className={`${imgcls} `} src={img} alt="" />
      </div>
   );
};

export default LandingBelowArm;
