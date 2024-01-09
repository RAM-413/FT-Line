import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import worldmap from "../assets/images/worldmap.webp";
import sliderimg1 from "../assets/images/sliderimg1.png";
import sliderimg2 from "../assets/images/sliderimg2.webp";
import { Nxtslider, Prevslider, Starfive } from "../assets/svg/Icon";

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="xs:p-[15px_20px] p-[10px_15px] rounded-full duration-300 group sliderbutton bg-[#DADCF1] hover:bg-[#313EF7] absolute bottom-[-30%] left-[40%]"
  >
    <Prevslider />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="xs:p-[15px_20px] p-[10px_15px] group rounded-full bg-[#DADCF1] duration-300 sliderbutton hover:bg-[#313EF7] absolute bottom-[-30%] left-[60%]"
  >
    <Nxtslider />
  </button>
);
const Customerslider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-[1200px] px-3  pb-[100px] mx-auto overflow-hidden">
        <p className=" text-[#313EF7] text-center font-ff-mont text-[20px] font-semibold leading-[normal] xs:leading-[24px]">
          What’s our customer saying
        </p>
        <div className=" text[#011736] text-center xs:[text-35px] text-[32px] lg:text-[40px] font-bold leading-[normal] xs:leading-[150%] tracking-[0.6px] pt-2 ">
          Our Customer Feedback
        </div>
        <div className=" flex flex-wrap flex-row -mx-3 mt-[60px]">
          <div className=" w-full md:w-1/2 lg:w-7/12 px-3"  data-aos-duration="3000" data-aos="fade-up-right">
            <img src={worldmap} alt="worldmap" className=" w-full h-full" />
          </div>
          <div className=" w-full md:w-1/2 lg:w-5/12 px-3"  data-aos-duration="3000" data-aos="fade-up-left">
            <Slider {...settings} className=" shadow-shadow">
              <div className=" max-w-[500px] flex w-full sm:ml-0 flex-col rounded-3xl shadow-lg ">
                <div className="py-[30px] px-5">
                  <div className=" flex items-center gap-4">
                    <img src={sliderimg1} alt="image" />
                    <div className="flex flex-col">
                      <p className="opacity-90 text-slate-900 text-xl font-semibold font-['Montserrat'] leading-normal">
                        Jaylon Vaccaro
                      </p>
                      <span>
                        <Starfive/>
                      </span>
                    </div>
                  </div>
                  <p className="text-zinc-900 sm:text-lg text-base  text-start font-medium font-['Montserrat'] leading-[34px]">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don
                  </p>
                </div>
              </div>
              <div className=" max-w-[500px] flex w-full sm:ml-0 flex-col rounded-3xl shadow-lg">
                <div className="py-[30px] px-5">
                  <div className=" flex items-center gap-4">
                    <img src={sliderimg2} alt="image" />
                    <div className="flex flex-col">
                      <p className="opacity-90 text-slate-900 text-xl font-semibold font-['Montserrat'] leading-normal">
                        Jaylon Vaccaro
                      </p>
                      <span>
                        <Starfive/>
                      </span>
                    </div>
                  </div>
                  <p className="text-zinc-900 sm:text-lg text-base  text-start font-medium font-['Montserrat'] leading-[34px]">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customerslider;
