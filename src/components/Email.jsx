import React from "react";

const Email = () => {
  return (
    <div>
      <div className=" bg-[#F5F5FF] overflow-hidden"  data-aos-duration="3000" data-aos="fade-up-right">
        <div className="max-w-[1200px] mx-auto px-3 py-[30px] sm:py-[90px]">
          <h2 className="max-w-[534px] text-center text-slate-900 text-[25px] md:text-[40px] mx-auto font-bold font-['Montserrat'] capitalize leading-[30px] md:leading-[60px] tracking-wide">
            Subscribe Newsletter & get letest news
          </h2>
          <form className="max-w-[493px] min-h-[70px] mt-[40px] pl-5 pr-[11px] py-[11px] bg-white rounded-[150px]  mx-auto shadow border  items-center flex justify-between ">
            <input type="text" placeholder=" Enter your email " className="opacity-90 text-gray-400 sm:text-xl text-[14px] font-normal font-['Rubik'] leading-normal border-none outline-0 w-full pr-[10px]">
            </input>
              <button className="px-[25px] py-2.5 bg-indigo-600  rounded-[56px] border  gap-2.5 flex   hover:bg-white text-center duration-300 text-white text-base font-semibold font-['Montserrat'] leading-7  cursor-pointer hover:text-indigo-600">
                Subscribe
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
