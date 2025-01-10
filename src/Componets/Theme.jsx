    import React, { useEffect, useRef } from "react";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";


    const themes = [
    {
        icon: "cloud-computing",
        title: "Cloud Computing",
        image: "../src/assets/ThemeLogo/Cloud.png",
    },
    {
        icon: "education",
        title: "Blockchain",
        image: "../src/assets/ThemeLogo/Blockchain.png",
    },
    {
        icon: "ai",
        title: "Artificial Intelligence",
        image: "../src/assets/ThemeLogo/Ai.png",
    },
    {
        icon: "iot",
        title: "IOT",
        image: "../src/assets/ThemeLogo/IOT.png",
    },
    {
        icon: "healthcare",
        title: "Healthcare",
        image: "../src/assets/ThemeLogo/HealthCarre.png",
    },
    {
        icon: "machine-learning",
        title: "Machine Learning",
        image: "../src/assets/ThemeLogo/machineLearning.png",
    },
    ];

    const HackathonThemes = () => {
    const cardRefs = useRef([]);

    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        themes.forEach((theme, index) => {
        const card = cardRefs.current[index];

        let animationProps = {
            opacity: 0,
            y: 100,
        };

        if (index === 0) {
            // First card: Coming from the left
            animationProps.x = -200;
        } else if (index === 1) {
            // Second card: Coming from the top
            animationProps.y = -200;
        } else if (index === 2) {
            // Third card: Coming from the right
            animationProps.x = 200;
        }

        // Animation for each card
        gsap.fromTo(
            card,
            animationProps,
            {
            opacity: 1,
            x: 0,
            y: 50,
            scrollTrigger: {
                trigger: card,
                start: "top 100%", // Start when top of the card is at 80% of the viewport
                end: "bottom 20%",
                scrub: true, // Smooth animation on scroll
            },
            }
        );
        });
    }, []);

    return (
        <section id="Theme" className="font-[Ghr4] bg-[#014EB6] text-white py-16">
        <div className="container mx-auto px-4">
            <h2 className="font-[Ghr4] text-5xl mb-12 text-center text-white">
            Hackathon Themes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
                <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)} // Store card reference
                className="theme-card h-72 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-lg p-6 flex flex-col items-center shadow-lg transition-transform transform hover:scale-105"
                >
                <img
                    src={theme.image}
                    alt={theme.title}
                    className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-center">
                    {theme.title}
                </h3>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    };

    export default HackathonThemes;
