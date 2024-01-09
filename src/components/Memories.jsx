import React from "react";
import memories_img from "../assets/images/memories-img.webp";
import memories_2 from "../assets/images/memories-2.webp";
import memories_3 from "../assets/images/memories-3.webp";
import memories_4 from "../assets/images/memories-4.webp";

const mycardinfo = [
  { 
    "padding": "customAni2",
   image: memories_img
 },
  {
    "padding": "customAni",
    image: memories_2,
  },

  { 
    "padding": "customAni2", 
  image: memories_3
 },
  {
    "padding": "customAni",
    image: memories_4,
  },
];

export const Memories = () => {
  const mycard = mycardinfo.map((mycard) => (
      <img className={mycard.padding} src={mycard.image} alt="imgh" />
  ));

  return (
    <>
      <div className=" bg-[#FFFFF] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-3 pb-[30px] sm:pb-[100px]">
          <h2 className=" text-center text-slate-900 md:text-[40px] text-[30px]  font-bold font-['Montserrat'] capitalize md:leading-[60px] leading-[40px] tracking-wide pb-[40px]">
            Make memories with us
          </h2>
        <div className="grid md:grid-cols-4 grid-cols-2  w-full gap-[10px]  md:gap-[20px]"  data-aos-duration="3000" data-aos="fade-up-left">{mycard}</div>
        </div>
      </div>
    </>
  );
};

export default Memories;
