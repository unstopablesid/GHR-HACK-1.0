import  { useRef, useEffect } from "react";
import "../Styles/EventHighlights.css";
import mantaRayImage from "../assets/images/manta-ray.png";

const EventHighlights = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="highlights-container font-[Ghr4]">
      <div className="highlights-content">
        <div ref={textRef} className="highlights-text z-20 ">
          <h2 className="text-white text-left">Event Highlights</h2>
          <ul>
            <li>
              <strong className="text-[#f5f5f5] text-2xl">Duration:</strong> 28 hours of non-stop innovation.
            </li>
            <li>
              <strong className="text-[#f5f5f5] text-2xl" >Tracks:</strong> EdTech Evolution,Blockchain Revolution,AI and Machine Learning,AR/VR Realities,HealthTechInnovations,Cybersecurity,Agritech,SocialImpact Tech
            </li>
            <li>
              <strong className="text-[#f5f5f5] text-2xl">Networking Opportunities:</strong> Collaborate with
              industry experts, mentors, and peers.
            </li>
            <li>
              <strong className="text-[#f5f5f5] text-2xl">Workshops:</strong> Participate in hands-on workshops with
              cutting-edge technologies.
            </li>
            <li>
              <strong className="text-[#f5f5f5] text-2xl">Recognition:</strong> Certificates for all participants.
            </li>
            <li>
              <strong className="text-[#f5f5f5] text-2xl">Exciting Perks:</strong> Goodies, swag, free meals, and
              more.
            </li>
          </ul>
        </div>
        <img
          ref={imageRef}
          src={mantaRayImage}
          alt="Manta Ray"
          className="highlights-image"
        />
      </div>
    </div>
  );
};

export default EventHighlights;

