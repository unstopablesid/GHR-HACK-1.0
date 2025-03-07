import React from "react";
import TimelineImage from "../assets/Timeline/Date.png"; 
// import "../styles/Timeline.css";
import "../index.css";

const RegistrationTimeline = () => {
  return (
    <div id="Schedule" className="bg-gradient-to-b from-[#0d61ce] to-[#0d61ce] pt-32 md:h-50">
        <h1 className=" text-center font-[Ghr4] text-5xl ">Event Timeline</h1>
      <div className="flex justify-center items-center bg-gradient-to-b from-[#0d61ce] to-[#0d61ce] py-12 px-4 ">
      <img
        src={TimelineImage}
        alt="Registration Timeline"
        className="max-w-full h-auto px-5  md:px-20 "
      />
    </div>
    </div>
  );
};

export default RegistrationTimeline;


