import React, { useEffect } from "react";
import "../Styles/RegistrationDetails.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RegistrationDetails = () => {
    useEffect(() => {
      
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".animated-circle-container", // Parent container
                start: "top 50%", // Trigger when the top of the container reaches the center of the viewport
                end: "bottom 50%", // Ends when the bottom of the container reaches the center of the viewport
                toggleActions: "restart reverse restart reverse", // Ensures reset on scroll up and down
                markers: false, // Set to true for debugging
                onEnter: () => {
                    // Start animation when the container enters the viewport
                    timeline.play();
                },
                onLeave: () => {
                    // Reset the animation when leaving the viewport
                    timeline.reverse();
                },
                onEnterBack: () => {
                    // Start animation again when scrolling up
                    timeline.play();
                },
                onLeaveBack: () => {
                    // Reset the animation when scrolling back up
                    timeline.reverse();
                },
            },
        });

        timeline
            .fromTo(
                ".left-circle, .top-circle, .right-circle",
                {
                    opacity: 0,
                    scale: 0.8,
                    x: (i, el) => (el.classList.contains("left-circle") ? "-100%" : el.classList.contains("right-circle") ? "100%" : "0"),
                    y: (i, el) => (el.classList.contains("top-circle") ? "-100%" : "0"),
                },
                {
                    opacity: 1,
                    scale: 1,
                    x: "0",
                    y: "0",
                    duration: 1,
                    stagger: 0.2,
                    ease: "power4.out",
                }
            );

        return () => {            
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className=" bg-[#014EB6] flex justify-center items-center min-h-screen registration">
            <div className="text-center text-white py-10">
                <h1 className="text-4xl font-bold mb-10">REGISTRATION DETAILS</h1>
                <div className="animated-circle-container flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10">
                    <div className="flex flex-col items-center animated-circle left-circle">
                        <div className="bg-white rounded-full p-8 mb-4 w-64 h-64 flex justify-center items-center mt-10">
                            <i className="fas fa-qrcode text-black text-9xl"></i>
                        </div>
                        <h2 className="text-xl font-bold text-black">How to Register</h2>
                        <p>Scan the QR code or <br /> visit Our website</p>
                    </div>
                    <div className="text-8xl text-white">
                        <i className="fas fa-chevron-right"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <div className="flex flex-col items-center animated-circle top-circle">
                        <div className="bg-white rounded-full p-8 mb-4 w-64 h-64 flex justify-center items-center mt-10">
                            <i className="fas fa-dollar-sign text-black text-9xl"></i>
                        </div>
                        <h2 className="text-xl font-bold text-black">No Fees</h2>
                        <p>Free registration for all</p>
                        <p>Participants</p>
                    </div>
                    <div className="text-8xl text-white">
                        <i className="fas fa-chevron-right"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <div className="flex flex-col items-center animated-circle right-circle">
                        <div className="bg-white rounded-full p-8 mb-4 w-64 h-64 flex justify-center items-center mt-10">
                            <i className="fas fa-user-graduate text-black text-9xl"></i>
                        </div>
                        <h2 className="text-xl font-bold text-black">Eligibility</h2>
                        <p>Open to students and</p>
                        <p>professionals nationwide</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationDetails;