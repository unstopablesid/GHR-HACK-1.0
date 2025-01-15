import React, { useEffect } from "react";
import "../Styles/Buttons.css";
import Logo from "../assets/Logo/Dev.png"

const Buttons = () => {
  return (
    <div className="button-container pb-32 flex flex-col items-center space-y-4">
      {/* Devfolio Button */}
      <a href="https://ghrhack.devfolio.co/"><div
        className=" text-[#3770ff] apply-button rounded w-full max-w-xs h-12"
      ><img src={Logo} className="w-8" alt="" />Register Here </div></a>

      {/* Discord Button */}
      <a
        href="https://discord.gg/ecSMDvnQky"
        target="_blank"
        rel="noopener noreferrer"
        className="button discord-btn flex items-center justify-center w-full max-w-xs h-12 bg-blue-600 text-white rounded"
      >
        <i className="fab fa-discord text-xl md:text-sm mr-2"></i> Join Discord Server
      </a>
    </div>
  );
};

export default Buttons;
