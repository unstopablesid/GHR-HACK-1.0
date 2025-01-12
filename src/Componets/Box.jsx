import { useEffect } from "react";
import TridentGold from "../assets/Prizes/Trident-Gold.png"; // Import image paths

const prizes = [
  { position: "2nd Prize", amount: "₹15,000", medal: "Silver", icon: TridentGold },
  { position: "1st Prize", amount: "₹30,000", medal: "Gold", icon: TridentGold },
  { position: "3rd Prize", amount: "₹10,000", medal: "Bronze", icon: TridentGold },
];

const PrizeCards = () => {
  // Using IntersectionObserver for scroll-triggered animations
  useEffect(() => {
    const prizeCards = document.querySelectorAll(".prize-card");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Trigger animations when the card comes into view
            const card = entry.target;
            if (card.classList.contains("prize-card-left")) {
              card.classList.add("show-left");
            } else if (card.classList.contains("prize-card-top")) {
              card.classList.add("show-top");
            } else if (card.classList.contains("prize-card-right")) {
              card.classList.add("show-right");
            }
            observer.unobserve(card);
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when 50% of the element is in the viewport
    );

    prizeCards.forEach(card => {
      observer.observe(card);
    });
  }, []);

  return (
    <section className="bg-[#014EB6] text-white py-16">
      <h1 className="text-5xl font-bold text-center py-8">Prizes</h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {prizes.map((prize, index) => (
          <div
            key={index}
            className={`prize-card w-full rounded-xl p-6 text-center shadow-lg bg-white text-black transition-transform duration-300 ease-in-out transform ${
              index === 0
                ? "prize-card-left"
                : index === 1
                ? "prize-card-top"
                : "prize-card-right"
            }`}
          >
            <div className="flex justify-center mb-4">
              <img src={prize.icon} alt={prize.medal} className="w-20" />
            </div>
            <h3 className="text-xl font-bold">{prize.position}</h3>
            <p className="text-3xl font-extrabold mt-2">{prize.amount}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrizeCards;
