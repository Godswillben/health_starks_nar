import React from 'react';
import profile from "../../assets/landing/profile.jpg";

const LandingBannerCard = ({cls="right-4 top-[62%]", body}) => {
    return (
    
             <div className={`absolute z-10 w-60  bg-[#E5FCFB] p-2 rounded-lg ${cls}`}>
                <div className="flex space-x-2 items-center">
                   <div className="overflow-hidden size-6 rounded-full">
                      <img src={profile} alt="" />
                   </div>
                   <h2 className="font-semibold text-xs font-Pop text-neutral-300">daily.vitals</h2>
                </div>
                <p className="font-Pop font-thin text-xs mt-1">{body}</p>
             </div>
    );
}

export default LandingBannerCard;
