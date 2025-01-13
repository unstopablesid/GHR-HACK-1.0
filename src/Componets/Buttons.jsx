// import React from "react";
import "../Styles/Buttons.css"; // Add the CSS styles
import Dev from "../assets/Logo/Dev.png"

const Buttons = () => {
  return (
    <div className="button-container">
      {/* Devfolio Button */}
      <a
        href="https://ghrhack.devfolio.co/"
        target="_blank"
        rel="noopener noreferrer"
        className="button devfolio-btn"
      >
         <img src={Dev} className="w-6 rounded-sm mr-2" alt="" />Register Here
      </a>

      {/* Discord Button */}
      <a
        href="https://discord.gg/ykhxjbC26F"
        target="_blank"
        rel="noopener noreferrer"
        className="button discord-btn"
      >
        <i className="fab fa-discord"></i> Discord Server
      </a>
    </div>
  );
};

export default Buttons;
