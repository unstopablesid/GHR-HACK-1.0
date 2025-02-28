import React from "react";
import { teamData } from "./Teamdata.js";
import Sanjay from "../assets/Mentors/Snajay Shekhawat.jpeg";
import Sonal from "../assets/Mentors/Sonal-Patil.jpeg";
import shreyas from "../assets/Mentors/shreyas-raisoni.jpeg";
import Sunil from "../assets/Mentors/Sunil-Raisoni.jpeg"
import Preeti from "../assets/Mentors/Preeti-Agarwal.jpeg";
import Swati from "../assets/Mentors/Swati patil.jpg";

const Mentors = () => {
  return (
    <div className="bg-[#014EB6] font-[Ghr4] text-white py-10 px-5 md:px-20">
      <div className="text-center">
        <h1 className="text-5xl mb-10 ">Our Mentors</h1>
        <h2 className="text-orange-400 font-bold text-lg">Chief Patron</h2>
          <div className="grid md:grid-cols-2 gap-10 mb-8">
            <div className="text-center">
             
              <img src={Sunil} alt="Sunil Raisoni" className="mx-auto justify-center rounded-full mb-2 w-[18rem]" />
              <p className="font-semibold text-xl">Honrable Shri Sunil Raisoni</p>
              <p>Chairman, Raisoni Education</p>
            </div>
            <div className="text-center">
              
              <img src={shreyas} alt="Shreyas Raisoni" className="mx-auto justify-center rounded-full mb-2 w-[18rem]" />
              <p className="font-semibold text-xl">Honrable Shri Shreyash Raisoni</p>
              <p>Executive Director, GHRCEM, Jalgaon</p>
            </div>
          </div>

          {/* Patrons and Conveners */}
          <h2 className="text-orange-400 font-bold text-lg text-center">Patron</h2>
        <div className="grid md:grid-cols-2 gap-10 mb-8">
        
          <div>
            
            <img src={Preeti} alt="Preeti agarwag" className="mx-auto justify-center rounded-full mb-2 w-[18rem]" />
            <p className="font-semibold text-xl">Dr Preeti Agarwal</p>
            <p>Director, GHRCEM, Jalgaon</p>
           
          </div>
          <div>
            <img src={Sanjay} alt="Sanjay shekhawat" className="mx-auto mt-2 justify-center rounded-full mb-2 w-[18rem]" />
            <p className="font-semibold text-xl mt-2">Dr Sanjay Shekhawat</p>
            <p>Dean Academics, GHRCEM, Jalgaon</p>
          </div>
        
        
        </div>
        <h2 className="text-orange-400 font-bold text-lg text-center">Convener</h2>
        <div className="grid md:grid-cols-2 gap-10 mb-8">
        
        <div>
            
            <img src={Sonal} alt="Shreyas Raisoni" className="mx-auto justify-center rounded-full mb-2 w-[18rem]" />
            <p className="font-semibold text-xl">Dr Sonal Patil</p>
            <p>HoD, CSE/IT Department</p>
          </div>
          <div>
            
            <img src={Swati} alt="Swati patil" className="mx-auto justify-center rounded-full mb-2 w-[18rem]" />
            <p className="font-semibold text-xl mt-2">Dr Swati Patil</p>
            <p>HoD, AI/DS/AIML Department</p>
          </div>
        
        </div>
        {/* Faculty co-ordinator */}
        <div className="mb-[5rem]">
          <h2 className="text-orange-400 font-bold text-lg mt-8 mb-2">Faculty Coordinator</h2>
          <div className="grid md:grid-cols-1 gap-2">
            <div>
              <p className="font-semibold ">Dr Nilesh Ingle</p>
              <p>Mob No: <span className="font-bold">8668297264</span></p>
            </div>
          </div>
          
        </div>  

        {/* Coordinators */}
        <div className="mb-8"> 
          <h2 className="text-orange-400 font-bold text-lg mb-4">Coordinators</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <p className="font-semibold">Dr Chetan Chaudhari</p>
              <p>Mob No: <span className="font-bold">8668928098</span></p>
            </div>
            <div>
              <p className="font-semibold">Prof Tushar Wagh</p>
              <p>Mob No: <span className="font-bold">9890713565</span></p>
            </div>
            <div>
              <p className="font-semibold">Prof Shital Jadhav</p>
              <p>Mob No: <span className="font-bold">7588010659</span></p>
            </div>
            <div>
              <p className="font-semibold">Prof Yogita Dhande</p>
              <p>Mob No: <span className="font-bold">9359120510</span></p>
            </div>
          </div>
          
        </div>
          
      </div>
    </div>
  );
};

export default Mentors;
