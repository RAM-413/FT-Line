import React from "react";
import Waterimg from "../assets/images/waterimg.webp";
import lineimg from "../assets/images/line-img.webp";
import dots from "../assets/images/dots-line.webp";
import waterline from "../assets/images/water-line.png";
const Water = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-3 pb-[40px] sm:pb-[100px] flex flex-wrap relative z-[1]  overflow-hidden">
        <div
          className="lg:w-1/2 w-full  "
          data-aos-duration="3000"
          data-aos="fade-up-right"
        >
          <img src={Waterimg} alt="water" className=" " />
        </div>
        <div
          className="lg:w-1/2 w-full mt-[40px] lg:mt-0 "
          data-aos-duration="3000"
          data-aos="fade-up-left"
        >
          <div className=" flex items-center gap-5">
            <p className=" font-[Montserrat] text-nowrap text-[20px] text-[#313EF7] font-black">
              Let’s Fly
            </p>
            <img className="" src={waterline} alt="frevc" />
          </div>
          <h3 className="font-[Montserrat] pt-5 text-[26px] md:text-[32px] text-[#030303] font-bold  leading-10   self-stretch">
            {" "}
            It’s one of the leading online flight booking platforms in the world
          </h3>
          <div className=" flex pt-8  relative">
            <div className="">
              <img
                className=" absolute mt-[20px] h-[60%] sm:h-[56%] left-[0.9%] sm:left-[0.6%] md:left-[0.5%] lg:left-[0.9%] -z-10"
                src={lineimg}
                alt="lineimg"
              />
            </div>
            <div className=" flex  flex-col">
              <div className=" flex items-baseline gap-[10px]">
                <img src={dots} alt="dots" className="w-[10px] h-[10px]" />
                <p className="text-black max-w-[568px] text-base font-medium font-['Montserrat'] leading-7 ">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text
                </p>
              </div>
              <div className=" flex  items-baseline gap-[10px] pt-[10px]">
                <img src={dots} alt="dots" className="w-[10px] h-[10px]" />
                <p className="text-black max-w-[568px] text-base font-medium font-['Montserrat'] leading-7 ">
                  If you are going to use a passage of Lorem Ipsum
                </p>
              </div>

              <div className=" flex  items-baseline gap-[10px] pt-[10px]">
                <img src={dots} alt="dots" className="w-[10px] h-[10px]" />
                <p className="text-black max-w-[568px] text-base font-medium font-['Montserrat'] leading-7 ">
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc.
                </p>
              </div>
              <div className=" flex  items-baseline gap-[10px] pt-[10px]">
                <img src={dots} alt="dots" className="w-[10px] h-[10px]" />
                <p className="text-black max-w-[568px] text-base font-medium font-['Montserrat'] leading-7  ">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
          <button className=" px-[45px] py-3.5 mt-[40px] bg-indigo-600 rounded-[56px] shadow border justify-start items-start gap-2.5 inline-flex  basis-0 text-center text-white text-base  duration-700 font-semibold font-['Montserrat'] leading-7 hover:bg-white hover:text-indigo-600">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Water;
