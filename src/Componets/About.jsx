import React, { useEffect, useRef } from "react";
import "../Styles/about.css";
import turtleImage from "../assets/images/Turtle.png"; // Replace with the path to your image

const AboutSection = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      {
        threshold: 0.5, // Trigger animation when 50% of the element is visible
      }
    );

    // Observe both image and text
    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={aboutRef} className="about-container font-[Ghr4]">
      <div className="pt-40 about-content">
        <img
          ref={imageRef}
          src={turtleImage}
          alt="Turtle"
          className="about-image z-10 hidden-before-animate"
        />
        <div
          ref={textRef}
          className="about-text z-20 hidden-before-animate"
        >
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
