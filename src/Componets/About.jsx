import React, { useEffect, useRef } from "react";
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

    // Animation for the image (coming from left)
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        x: -200, // Start from the left
        rotationY: 45,
      },
      {
        opacity: 1,
        x: 0,
        rotationY: 0,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%", // When the top of the element is at 80% of the viewport
          end: "bottom 20%",
          scrub: true, // Smooth animation on scroll
        },
      }
    );

    // Animation for the text (coming from right)
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        x: 200, // Start from the right
        rotationY: -45,
      },
      {
        opacity: 1,
        x: 0,
        rotationY: 0,
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
      <div className="pt-10 about-content">
        <img
          ref={imageRef}
          src={turtleImage}
          alt="Turtle"
          className="about-image z-10"
        />
        <div ref={textRef} className="about-text z-20">
          <h2 className="text-center text-white Heading">ABOUT</h2>
          <p>
            Get ready to witness <strong>GHRhack 1.0</strong>, our college's
            flagship event that brings together the brightest minds from across
            the nation for an exhilarating innovation marathon. This is your
            chance to be part of something extraordinary, where creativity meets
            technology, and ideas transform into impactful solutions. Let's
            make <strong>GHRhack 1.0</strong> an unforgettable milestone of
            innovation and teamwork! Join the organizing team and help drive
            this remarkable event to success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
