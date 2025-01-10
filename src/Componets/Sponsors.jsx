import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Sponsors() {
  const circleRefs = useRef([]);

  // Add circles dynamically to the reference array
  circleRefs.current = [];

  const addToRefs = (el) => {
    if (el && !circleRefs.current.includes(el)) {
      circleRefs.current.push(el);
    }
  };

  useEffect(() => {
    circleRefs.current.forEach((circle, index) => {
      let animationConfig = {};

      // Define animation directions based on circle index
      switch (index) {
        case 0: // First Circle: Animate from Left
          animationConfig = { x: -200, opacity: 0 };
          break;
        case 1: // Second Circle: Animate from Top
          animationConfig = { y: -200, opacity: 0 };
          break;
        case 2: // Third Circle: Animate from Bottom
          animationConfig = { y: 200, opacity: 0 };
          break;
        case 3: // Fourth Circle: Animate from Right
          animationConfig = { x: 200, opacity: 0 };
          break;
        default:
          break;
      }

      // Apply GSAP ScrollTrigger animation
      gsap.fromTo(
        circle,
        { ...animationConfig, scale: 0.8 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: circle,
            start: "top 85%", // Start animation when the circle is slightly visible
            end: "bottom 15%", // Allow the animation to complete within this range
            toggleActions: "play reverse play reverse", // Trigger on both scroll directions
            markers: false, // Enable markers for debugging during development
            scrub: false, // Remove scrubbing for smooth animations
            once: false, // Allow re-triggering on re-entry into the viewport
          },
        }
      );
    });

    // Clean up all animations and ScrollTriggers on unmount
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div className="bg-[#014EB6]">
      <div className="text-center py-10">
        <h1 className="text-white text-4xl font-bold">SPONSORS & PARTNERS</h1>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 ms-10 mt-10 me-5">
          <div
            ref={addToRefs}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-red-500 rounded-full mx-auto"
          ></div>
          <div
            ref={addToRefs}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-orange-500 rounded-full mx-auto"
          ></div>
          <div
            ref={addToRefs}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-yellow-500 rounded-full mx-auto"
          ></div>
          <div
            ref={addToRefs}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-lime-500 rounded-full mx-auto"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;