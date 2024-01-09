  import React, { useState } from "react";
  import navlogo from "../assets/images/nav-logo.webp";

  const Topnav = () => {
      const [first, setfirst] = useState(false);
      function MobileView() {
        setfirst(!first);
        if (first === false) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
      }
      function CloseView() {
        setfirst(false);
        document.body.classList.remove("overflow-hidden");
      }
    return (
      <div >
            <div className="flex justify-between items-center  px-3  overflow-hidden">
            <div   className="my-5">
              <img src={navlogo} alt="" />
            </div>
            <ul 
              className={` ${
                first ? "left-0" : "left-[-100%]"
              } flex items-center lg:gap-[50px] gap-[20px] duration-300 mobileview2  max-lg:justify-center max-lg:flex-col max-lg:text-white max-lg:w-full max-lg:h-full  max-lg:fixed max-lg:top-0 max-lg:z-20 max-lg:bg-gray-700`}
            >
              <li>
                <a
                  onClick={CloseView}
                  href="#"
                  className='text-white cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 text-base font-semibold font-["Montserrat"] leading-7'
                >
                  All Flight
                </a>
              </li>
              <li>
                <a
                  onClick={CloseView}
                  href="#"
                  className='text-white cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 text-base font-semibold font-["Montserrat"] leading-7'
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  onClick={CloseView}
                  href="#"
                  className='text-white cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 text-base font-semibold font-["Montserrat"] leading-7'
                >
                  Passengers
                </a>
              </li>
              <li>
                <a
                  onClick={CloseView}
                  href="#"
                  className='text-white cursor-pointer transition after:duration-500 after:w-0 hover:after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0 py-2.5 after:h-[2px] after:rounded-full after:bg-indigo-600 hover:text-indigo-600 text-base font-semibold font-["Montserrat"] leading-7'
                >
                  Your Orders
                </a>
              </li>
              <li>
                <a
                  onClick={CloseView}
                  href="#"
                  className="text-white border font-[Montserrat] duration-300  font-base border-[#fff] py-[10px] px-10 rounded-[59px]  hover:bg-blue-600 hover:text-white hover:border-transparent"
                >
                  Let’s Fly
                </a>
              </li>
            </ul>
            <label className=" lg:hidden" onClick={MobileView}>
              {first ? (
                <div className="z-20 relative">
                  <span className="flex bg-white absolute -left-7 duration-300 top-1 rotate-45 h-[2px] w-6"></span>
                  <span className="flex bg-white absolute -left-7 duration-300 -rotate-45 h-[2px] w-6 mt-1"></span>
                </div>
              ) : (
                <div className="z-20 relative">
                  <span className="flex bg-white h-[2px] duration-300 w-6"></span>
                  <span className="flex bg-white h-[2px] duration-300 w-6 mt-1"></span>
                  <span className="flex bg-white h-[2px] duration-300 w-6 mt-1"></span>
                </div>
              )}
            </label>
          </div>
      </div>
    )
  }

  export default Topnav