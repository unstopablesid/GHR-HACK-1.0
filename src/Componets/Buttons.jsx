// import React from "react";
import "../Styles/Buttons.css"; // Add the CSS styles

const Buttons = () => {
  return (
    <div className="button-container">
      {/* Devfolio Button */}
      <a
        href="https://devfolio.co/"
        target="_blank"
        rel="noopener noreferrer"
        className="button devfolio-btn"
      >
        <i className="fas fa-external-link-alt"></i> Register Here
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
