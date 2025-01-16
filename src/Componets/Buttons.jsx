import React from "react";
import "../Styles/Buttons.css";
import Logo from "../assets/Logo/Dev.png";
import Brochure from "../assets/Download/Brochure.pdf";

const Buttons = () => {
  return (
    <div className="button-container pb-32 flex flex-col items-center space-y-4">
      {/* Devfolio Button */}
      <a href="https://ghrhack.devfolio.co/">
        <div className="text-[#3770ff] apply-button rounded w-full max-w-xs h-10 md:h-12 flex items-center justify-center">
          <img src={Logo} className="w-6 md:w-8 mr-2" alt="" />
          <span className="text-sm md:text-base">Register Here</span>
        </div>
      </a>

      {/* Discord Button */}
      <a
        href="https://discord.gg/ecSMDvnQky"
        target="_blank"
        rel="noopener noreferrer"
        className="button discord-btn flex items-center justify-center w-full max-w-xs h-10 md:h-12 bg-blue-600 text-white rounded"
      >
        <i className="fab fa-discord text-lg md:text-xl mr-2"></i>
        <span className="text-sm md:text-base">Join Discord Server</span>
      </a>

      {/* Download Brochure Button */}
      <a
        href={Brochure}
        download
        rel="noopener noreferrer"
        className="button brochure-btn flex items-center justify-center w-full max-w-xs h-10 md:h-12 bg-green-600 text-white rounded"
      >
        <i className="fas fa-file-download text-lg md:text-xl mr-2"></i>
        <span className="text-sm md:text-base">Download Brochure</span>
      </a>
    </div>
  );
};

export default Buttons;
