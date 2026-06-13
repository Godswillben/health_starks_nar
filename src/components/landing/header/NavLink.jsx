import React from "react";
import navIcon from "../../../assets/Nav_icon.svg";
import menu from "../../../assets/primary/menu.svg";

const NavLink = ({cls, text="Menu", icon}) => {
   return (
      <div className={`relative  w-fit mr-2 ${cls}`}>
         {/* The background image */}
         <img
            src={navIcon}
            alt=""
            className="relative w-[80%] left-1/3 md:left-5/10 block h-auto"
         />

         {/* The menu div placed on top */}
         <div className="absolute w-full inset-0 space-x-2 flex items-end mb-[.8rem] border-b border-cyan500 justify-between">
            <img className="size-7" src={menu} alt="" />
            <p className="font-Pop font-medium tracking-[2px] text-nowrap leading-4 lg:text-lg">
               {text}
            </p>
         </div>
      </div>
   );
};

export default NavLink;
