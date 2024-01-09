import React from "react";
import worldairplane from "../assets/images/Air-Delivery.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import flight_img from "../assets/images/slider.webp";
import swipper_line from "../assets/images/swipper-line.png";

const Earth = () => {
  const first = React.useRef(null);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
fade:true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: false,
        },
      },
    ],
  };
  return (
    <div className="bg-[#010223] overflow-hidden">
      <div className=" max-w-[1040px] mx-auto px-3 py-[50px]">
        <div className=" flex flex-wrap flex-row -mx-3">
          <div data-aos="fade-right" className="lg:w-1/2 w-full px-3">
            <h2 className=" text-white sm:text-[40px] text-2xl font-bold sm:leading-[60px] leading-[30px] tracking-[0.6px]  uppercase lg:max-w-[496px]">
              Book Popular Flight Tickets
            </h2>
            <p className="text-[#A6A7B2]  text-base font-normal leading-[24px] lg:max-w-[496px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <img
              src={worldairplane}
              alt="worldairplane"
              className=" flex justify-center  w-full max-w-[315px] h-[315px]"
            />
          </div>
          <div data-aos="fade-left" className="lg:w-1/2 w-full px-3 relative ">
            <Slider {...settings} ref={first}>
              <div className=" d-flex justify-content-center align-items-center w-100">
                <img
                  src={flight_img}
                  alt="card"
                  className="xl:w-full lg:w-[60%] max-w-[280px]  object-fill   sm:max-w-[390px] "
                />
              </div>
            
              <div className=" d-flex justify-content-center align-items-center w-100">
                <img
                  src={flight_img}
                  alt="card"
                  className="xl:w-full lg:w-[60%] max-w-[280px]  object-fill   sm:max-w-[390px]"
                />
              </div>
             
              <div className=" d-flex justify-content-center align-items-center w-100">
                <img
                  src={flight_img}
                  alt="card"
                  className="xl:w-full lg:w-[60%] max-w-[280px]  object-fill   sm:max-w-[390px]"
                />
              </div>
              <div className=" d-flex justify-content-center align-items-center w-100">
                <img
                  src={flight_img}
                  alt="card"
                  className="xl:w-full lg:w-[60%] max-w-[280px]  object-fill   sm:max-w-[390px]"
                />
              </div>
              <div className=" d-flex justify-content-center align-items-center w-100">
                <img
                  src={flight_img}
                  alt="card"
                  className="xl:w-full lg:w-[60%] max-w-[280px]  object-fill   sm:max-w-[390px]"
                />
              </div>
            
            </Slider>
          
            <div className=" flight flex gap-[11px] absolute xl:right-[-12%] right-[3%] bottom-[-11.5%] sm:bottom-[0%] align-items-center flex-row sm:flex-col text-end justify-content-end">
            <div className=" relative">
            <img className=" absolute top-[-172px] right-[26px]  hidden lg:block" src={swipper_line} alt="swipper_line" /></div>
              <button
                className="  block bg-[#1A1B39] hover:bg-[#313EF7] duration-300 hover:shadow-[0_10px_14px_0px_#0B0F50;]  py-[12px] px-[16px] rounded-full"
                onClick={() => first?.current?.slickPrev()}
              >
                <svg
                  width="11"
                  height="18"
                  viewBox="0 0 11 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 1L2 9L10 17" stroke="white" stroke-width="2" />
                </svg>
              </button>
              <button
                className=" block bg-[#1A1B39] hover:bg-[#313EF7] duration-300 hover:shadow-[0_10px_14px_0px_#0B0F50;]  py-[12px] px-[16px] rounded-full "
                onClick={() => first?.current?.slickNext()}
              >
                <svg
                  width="11"
                  height="18"
                  viewBox="0 0 11 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 17L9 9L1 0.999999"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
              </button>
              
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earth;