import React, { useEffect } from "react";
import "../Styles/Buttons.css";

const Buttons = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    script.onload = () => {
      if (window.Devfolio) {
        window.Devfolio.Button.init({
          key: "your-devfolio-public-key", // Replace with your Devfolio public key
          container: ".apply-button",
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="button-container">
      {/* Devfolio Button */}
      <div
        className="apply-button"
        data-hackathon-slug="ghrhack"
        data-button-theme="light"
        
      ></div>

      {/* Discord Button */}
      <a
        href="https://discord.gg/ykhxjbC26F"
        target="_blank"
        rel="noopener noreferrer"
        className="button discord-btn"
      >
        <i className="fab fa-discord text-xl"></i> Join Discord Server
      </a>
    </div>
  );
};

export default Buttons;
