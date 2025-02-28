import { useRef, useEffect } from "react";
import "../Styles/EventHighlights.css";
import mantaRayImage from "../assets/images/manta-ray.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import blockchainAnimation from "../assets/event.json";

const EventHighlights = () => {
  const imageRef = useRef(null);
  const animationRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleScroll = () => {
      const textPosition = textRef.current.getBoundingClientRect().top;
      const imagePosition = imageRef.current.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (textPosition < screenPosition) {
        textRef.current.classList.add("fade-in-top");
      }
      if (imagePosition < screenPosition) {
        imageRef.current.classList.add("fade-in-top");
      }
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="highlights-container font-[Ghr4] p-4 md:p-8 lg:p-12">
      <div className="highlights-content flex flex-col md:flex-row items-center">
        <div ref={textRef} className="highlights-text z-20 md:w-1/2 lg:w-2/3 p-4">
          <h2 className="text-white font-[Ghr4] text-left text-2xl md:text-3xl lg:text-4xl mb-4">Event Highlights</h2>
          <ul className="space-y-4">
            <li>
              <span className="text-[#f5f5f5] text-xl md:text-2xl">Duration:</span> <span className="text-orange-500"> 28 hours </span> of non-stop innovation.
            </li>
            <li>
              <span className="text-[#f5f5f5] text-xl md:text-2xl">Themes:</span> EdTech Evolution, Blockchain Revolution, AI and Machine Learning, AR/VR Realities, HealthTech Innovations, Cybersecurity, Agritech, Social Impact Tech
            </li>
            <li>
              <span className="text-[#f5f5f5] text-xl md:text-2xl">Networking Opportunities:</span> Collaborate with industry experts, mentors, and peers.
            </li>
            <li>
              <span className="text-[#f5f5f5] text-xl md:text-2xl">Workshops:</span> Participate in hands-on workshops with cutting-edge technologies.
            </li>
            <li>
              <span className="text-[#f5f5f5] text-xl md:text-2xl">Recognition:</span> Certificates for all participants.
            </li>
            <li>
              <span className="text-[#f5f5f5] text-xl md:text-2xl">Exciting Perks:</span> Goodies, swag, free meals, and more.
            </li>
          </ul>
        </div>
        <div ref={animationRef} className="highlights-image z-10 w-full md:w-[70%] lg:w-[100%] xl:w-[55%] mb-4 md:mb-0 md:mr-[-30px] lg:mr-[-50px]">
  <Lottie animationData={blockchainAnimation} loop autoplay />
</div>

      </div>
    </div>
  );
};

export default EventHighlights;
