// import React from "react";
import "../Styles/Box.css"; // Add styles here or use Tailwind CSS
import TridentGold from "../assets/Prizes/Trident-Gold.png"; // Import images here

const prizes = [
    {
        position: "2nd Prize",
        amount: "₹15,000",
        medal: "Silver",
        icon: TridentGold, // Replace with actual paths
        borderColor: "border-grayamber-500",
    },
    {
        position: "1st Prize",
        amount: "₹30,000",
        medal: "Gold",
        icon: TridentGold,
        borderColor: "border-Amber-700",
    },
    {
        position: "3rd Prize",
        amount: "₹10,000",
        medal: "Bronze",
        icon: TridentGold,
    },
];

const PrizeCards = () => {
    return (
        <section className="bg-[#014EB6] text-white py-18 font-[Ghr4]">
            <h1 className="text-5xl font-[Ghr4] text-center py-8" >Prize</h1>
            <div className="container mx-auto flex justify-center gap-6">
                
                {prizes.map((prize, index) => (
                    <div
                        key={index}
                        className={`prize-card w-60  rounded-xl p-6 text-center shadow-lg bg-white text-black  hover:scale-105 hover:shadow-2xl transition-transform duration-300`}
                    >
                        <div className="flex justify-center mb-4">
                            <img src={prize.icon} alt={prize.medal} className="w-22" />
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
