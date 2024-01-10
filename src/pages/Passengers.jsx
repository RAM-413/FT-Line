import React from "react";
import Travellers from "../components/Travellers";
import Customerslider from "../components/Customerslider";
import Memories from "../components/Memories";
import Backtop from "../components/Backtop";
const Passengers = () => {
  return (
    <div>
     <Travellers />
      <Customerslider />
      <Memories />
      <Backtop/>
    </div>
  );
};

export default Passengers;
