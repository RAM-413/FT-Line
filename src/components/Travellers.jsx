import React from "react";
import map_img1 from "../assets/images/map-img1.webp";
import map_img2 from "../assets/images/map-img2.webp";
import map_img3 from "../assets/images/map-img3.webp";
import map_img4 from "../assets/images/map-img4.webp";
import circle_1 from "../assets/images/circle-1.webp";
import circle_2 from "../assets/images/circle-2.webp";
import circle_3 from "../assets/images/circle-3.webp";
import circle_4 from "../assets/images/circle4.webp";

const mycard = [
  {
    padding: "customAni2",
    mapimage: map_img1,
    circleimage: circle_1,
    names: "Raju Mullah",
    mail: "@rajumulllah",
  },
  {
    padding: "customAni",
    mapimage: map_img2,
    circleimage: circle_2,
    names: "Zaire Vetrovs",
    mail: "@zairevetrovs",
  },
  {
    padding: "customAni2",
    mapimage: map_img3,
    circleimage: circle_3,
    names: "Marcus Dias",
    mail: "@marcusdias",
  },
  {
    padding: "customAni",   
    mapimage: map_img4,
    circleimage: circle_4,
    names: "Davis Schleifer",
    mail: "@davisschleifer",
  },
];
const Travellers = () => {
  const cardarray = mycard.map((mycard) => (
    <div key={mycard.circleimage} className="flex justify-center items center">
      <div className=" max-w-[282px] min-h-[420px] rounded-[213px] bg-white  shadow-[0_100px_200px_0_rgba(1,23,54,0.05)]  group">
        <img className="" src={mycard.mapimage} alt="half" />
        <div className="flex justify-center">
          <img
            className=" translate-y-[-21%]"
            src={mycard.circleimage}
            alt="small"
          />
        </div>
        <p className=" text-2xl font-semibold leading-[150%] font-[Montserrat] text-center text-[#011736]">
          {mycard.names}
        </p>
        <p className=" text-base  font-[Montserrat] font-medium leading-[150%] text-[#979797] text-center">
          {mycard.mail}
        </p>
      </div>
    </div>
  ));
  return (
    <div className=" max-w-[1200px] mx-auto px-3 py-[40px] sm:py-[90px] ">
      <h2 className="md:text-[40px] text-[30px] font-bold leading-[150%] text-center text-[#011736] font-[Montserrat]">
        Best travelars of this month
      </h2>
      <div className=" grid lg:grid-cols-4 sm:grid-cols-2  justify-center gap-9 items-center pt-[40px]"  >
        {cardarray}
      </div>
    </div>
  );
};

export default Travellers;
