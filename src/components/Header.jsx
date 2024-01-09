import React, { useState } from "react";
import Topnav from "./Topnav";
import aeroplane from "../assets/images/aeroplane.png";

const Header = () => {
  return (
    <div  className=" bg-img  bg-no-repeat  bg-cover bg-center overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-3">
      <Topnav />
      <div className="  mx-auto px-3 min-h-[600px] md:min-h-[810px]">
        <div className="pt-[50px] relative">
          <img className="w-full" src={aeroplane} alt="abx" />
          <h2 className=" md:text-5xl text-[32px]  text-center pt-3 text-white font-bold  font-[Montserrat]  capitalize">
            Travel around the world
          </h2>
          <p className=" fs-[12px]  font-normal text-center pt-5 self-stretch text-[#B8B8C5] font-[Inter]">
            One of the advantages of being disorganized is that one is always
            having surprising discoveries
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;
