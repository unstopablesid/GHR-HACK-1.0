import React, { useEffect } from "react";

const PrizeCard = () => {
  useEffect(() => {
    const card = document.querySelector(".prize-card-3d");

    const handleMouseMove = (e) => {
      const { offsetX, offsetY, target } = e;
      const { clientWidth, clientHeight } = target;

      const xRotation = ((offsetY - clientHeight / 2) / clientHeight) * 20;
      const yRotation = ((offsetX - clientWidth / 2) / clientWidth) * -20;

      card.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    };

    const resetTransform = () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", resetTransform);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", resetTransform);
    };
  }, []);

  return (
    <section  className="bg-[#014EB6] text-white py-16  flex items-center justify-center">
      <div id="Prize" className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center py-8">
          <span className="text-white">Exciting Prizes</span> Await!
        </h1>
        <div className="prize-card-3d relative mx-auto bg-gradient-to-r from-[#58B7E6] to-[#316680] p-8 rounded-2xl shadow-2xl max-w-sm text-center transform transition-transform duration-500">
          <i className="fas fa-trophy text-white text-6xl mb-4 animate-bounce"></i>
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Cash Prizes Worth
          </h2>
          <p className="text-5xl font-extrabold "> <h1 className="text-[#FFC831]">₹80,000+</h1></p>

        </div>
      </div>
    </section>
  );
};

export default PrizeCard;