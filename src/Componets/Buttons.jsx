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
          key: "https://ghrhack.devfolio.co/", 
          container: ".apply-button",
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="button-container pb-32 flex flex-col items-center space-y-4">
      {/* Devfolio Button */}
      <div
        className="apply-button rounded w-full max-w-xs h-12"
        data-hackathon-slug="ghrhack"
        data-button-theme="light"
      ></div>

      {/* Discord Button */}
      <a
        href="https://discord.gg/ykhxjbC26F"
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
