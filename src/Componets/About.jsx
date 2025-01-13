import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/about.css";
import turtleImage from "../assets/images/Turtle.png"; // Replace with your image path

const AboutSection = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in animation for the image
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        y: -50, // Start position (50px above)
      },
      {
        opacity: 1,
        y: 0, // End position (original position)
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%", // When the top of the element is at 80% of the viewport
          end: "bottom 20%",
          scrub: true, // Smooth animation on scroll
        },
      }
    );

    // Fade-in animation for the text
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: -50, // Start position (50px above)
      },
      {
        opacity: 1,
        y: 0, // End position (original position)
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // When the top of the element is at 80% of the viewport
          end: "bottom 20%",
          scrub: true, // Smooth animation on scroll
        },
      }
    );
  }, []);

  return (
    <div ref={aboutRef} className="about-container font-[Ghr4]">
      <div className="about-content">
        <img
          ref={imageRef}
          src={turtleImage}
          alt="Turtle"
          className="about-image z-10"
        />
        <div ref={textRef} className="about-text">
          <h2 className="text-center text-white font-[Ghr4]">ABOUT THE EVENT</h2>
          <p>
            GHRHACK 1.0 is the flagship hackathon of G H Raisoni College of Engineering Management, Jalgaon, aimed at fostering innovation, collaboration, and creativity among tech enthusiasts.Scheduled for 8th and 9th March 2025, this 28-hour offline hackathon provides a platform for students,developers,and innovators from across the country to showcase their technical prowess and problem-solving abilities.With the theme Code the Unexplored,GHRHACK 1.0 challenges participants to tackle real-world problems,explore cutting-edge technologies,and push the boundaries of innovation.The event promises to be a hub for groundbreaking ideas,networking opportunities and knowledge exchange,all within an environment of healthy competition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
