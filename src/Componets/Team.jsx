import React, { useState, useEffect } from "react";
import { teamData } from "./Teamdata.js";
import Logo from "../assets/Logo/Linked.png";

const Team = () => {
  const [activeTab, setActiveTab] = useState("Organizers");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulated loading effect
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (

    <section id="Team" className="team-section bg-gradient-to-b from-[#014EB6] to-[#011947] p-6">
      <h2 className="text-center text-white text-5xl font-[Ghr4] mb-6">Meet Our Team</h2>


      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {Object.keys(teamData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
              activeTab === category
                ? "bg-black text-white shadow-md"
                : "bg-white text-black hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>


      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center pt-1 p-[2rem] gap-5 sm:p-[1rem]">
          {teamData[activeTab].map((member, index) => (
            <div
              key={index}
              className="w-60 bg-white shadow-lg rounded-xl p-2 flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-[15rem] h-[17rem] object-cover rounded-lg"
              />
              <h3 className="text-black font-semibold text-lg mt-3">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2"
                >
                  <img src={Logo} alt="LinkedIn" className="w-6 h-6" />
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Team;
