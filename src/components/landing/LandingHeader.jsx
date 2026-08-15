import React from "react";
import logo from "../../assets/primary/logo.png";
import home from "../../assets/landing/header/home.svg";
import doc from "../../assets/landing/header/doctor.svg";
import phone from "../../assets/landing/header/phone.svg";
import NavLink from "./header/NavLink";

const LandingHeader = () => {
   const authCls = "border-2 rounded-sm tracking-wider py-2";
   const logoText = " text-xl"
   return (
      <div className="w-full border-b border-cyan500 py-3 lg:py-5 xl:py-9 fixed top-0 left-0 z-50 bg-white shadow-sm">
         <div className="flex w-11/12 items-center mx-auto justify-between">
            <div className="flex items-center space-x-5">
               <img className="size-10 lg:size-13" src={logo} alt="" />
               <div className="2xl:flex font-Elms items-center hidden">
                  <p className={logoText}>HEALTH</p>
                  <p className={logoText}>-</p>
                  <p className="text-2xl font-bold">starks</p>
               </div>
            </div>
            {/* menu  */}
            <NavLink cls={"xl:hidden"} />
            <div className="hidden xl:flex flex-row space-x-30 justify-between w-1/3">
               <NavLink icon={home} text="Home" />
               <NavLink icon={doc} text="Doctors" />
               <NavLink icon={phone} text="Contact us" />
            </div>
            <div className="hidden xl:flex font-Pop font-extralight space-x-3">
               <p className={`${authCls} border-red500 px-2 text-red500`}>
                  Register
               </p>
               <p className={`${authCls} px-6 border-orange500`}>Login</p>
            </div>
         </div>
      </div>
   );
};

export default LandingHeader;
