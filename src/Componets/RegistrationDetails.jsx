import React, { useEffect } from "react";
import "../Styles/RegistrationDetails.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Registration from "../assets/Timeline/Registration QR.png"

gsap.registerPlugin(ScrollTrigger);

const RegistrationDetails = () => {
    useEffect(() => {
      
        const timeline = gsap.timeline({
            scrollTrigger: {
            trigger: ".animated-circle-container",
            start: "top 75%", 
            end: "bottom 25%", 
            toggleActions: "play none none reverse", 
            markers: false,
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
        <div className=" bg-[#014EB6] flex justify-center items-center min-h-screen registration font-[Ghr4]">
            <div className=" text-center text-white py-10">
                <h1 className="text-4xl  mb-10 ">REGISTRATION DETAILS</h1>
                <div className="animated-circle-container flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10">
                    <div className="flex flex-col items-center animated-circle left-circle">
                        <div className="bg-white rounded-full p-8 mb-4 w-64 h-64 flex justify-center items-center mt-10">
                            <img src={Registration} className="w-40" alt="" />
                        </div>
                        <h2 className="text-2xl  text-white">How to Register</h2>
                        <p>Scan the QR code</p>
                    </div>
                    <div className="text-8xl text-white">
                        <i className="fas fa-chevron-right"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <div className="flex flex-col items-center animated-circle top-circle">
                        <div className="bg-white rounded-full p-8 mb-4 w-64 h-64 flex justify-center items-center mt-10">
                            <i className="fas fa-dollar-sign text-black text-9xl"></i>
                        </div>
                        <h2 className="text-2xl  text-white">No Fees</h2>
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
                        <h2 className="text-2xl  text-white">Eligibility</h2>
                        <p>Open to students and</p>
                        <p>professionals nationwide</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationDetails;