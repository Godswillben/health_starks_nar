import React from "react";

const HowItWorksInfo = ({head, body, cls="mb-23 sm:mb-4"}) => {
   return (
      <div className={`flex flex-col space-y-4 ${cls} sm:w-5/11`}>
         <h4 className="text-brown700 text-2xl font-Peralta tracking-wider">{head}</h4>
         <p className="font-Comm text-xl text-blue800 font-semibold">
            {body}
         </p>
      </div>
   );
};

export default HowItWorksInfo;
