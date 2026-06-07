import React from "react";
import logo from "../../assets/primary/logo.png";
import navIcon from "../../assets/Nav_icon.svg";
import menu from "../../assets/primary/menu.svg";

const LandingHeader = () => {
   return (
      <div className="w-full border-b border-cyan500 py-3 fixed top-0 left-0 z-50 bg-white shadow-sm">
         <div className="flex w-11/12 items-center mx-auto justify-between">
            <img className="size-10" src={logo} alt="" />
            <div className="relative inline-block w-20 mr-2">
               {/* The background image */}
               <img src={navIcon} alt="" className="relative w-[80%] left-1/3 block h-auto" />

               {/* The menu div placed on top */}
               <div className="absolute w-full inset-0 space-x-2 flex items-end mb-[.8rem] border-b border-cyan500 justify-between">
                  <img className="size-7" src={menu} alt="" />
                  <p className="font-Pop font-medium tracking-[2px] leading-4">Menu</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LandingHeader;
