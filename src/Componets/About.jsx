import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import "../Styles/about.css";
import blockchainAnimation from "../assets/blockchain.json"; // Path to your Lottie JSON file

const AboutSection = () => {
  const aboutRef = useRef(null);
  const animationRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in animation for Lottie Animation
    gsap.fromTo(
      animationRef.current,
      { opacity: 0, y: -50 }, // Start position (above)
      {
        opacity: 1,
        y: 0, // End position (original position)
        scrollTrigger: {
          trigger: animationRef.current,
          end: "bottom 20%",
          scrub: true, // Smooth scrolling effect
        },
      }
    );

    // Fade-in animation for the text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: -50 }, // Start position (above)
      {
        opacity: 1,
        y: 0, // End position (original position)
        scrollTrigger: {
          trigger: textRef.current,
          end: "bottom 50%",
        },
      }
    );
  }, []);

  return (
    <div ref={aboutRef} className="about-container font-[Ghr4] pt-8 px-4 md:px-8 lg:px-16 ">
      <div className="about-content flex flex-col md:flex-row items-center">
        
       {/* Lottie Animation (Replacing Image) */}
{/* Lottie Animation (Replacing Image) */}
<div ref={animationRef} className="about-image z-10 w-full md:w-[70%] lg:w-[100%] xl:w-[55%] mb-4 md:mb-0 md:mr-[-30px] lg:mr-[-50px] sm:none">
  <Lottie animationData={blockchainAnimation} loop autoplay />
</div>


        {/* Text Content */}
        <div ref={textRef} className="about-text md:ml-12 lg:ml-16 xl:ml-16 text-center md:text-left">
        <h2 className=" text-white font-[Ghr4] text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 lg:mb-10 md:text-left">ABOUT THE EVENT</h2>
          <p className="text-sm md:text-base lg:text-lg md:ml-0">
            GHRhack 1.0 is the flagship hackathon of G H Raisoni College of Engineering and Management, Jalgaon, aimed at fostering innovation, collaboration, and creativity among tech enthusiasts. Scheduled for 8th and 9th March 2025, this 28-hour offline hackathon provides a platform for students, developers, and innovators from across the country to showcase their technical skills and problem-solving abilities. With the theme Code the Unexplored, GHRhack 1.0 challenges participants to tackle real-world problems, explore cutting-edge technologies, and push the boundaries of innovation. The event promises to be a hub for groundbreaking ideas, networking opportunities and knowledge exchange, all within an environment of healthy competition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
