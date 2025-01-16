import { useRef, useEffect } from "react";
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
    <div className="highlights-container font-[Ghr4] p-4 md:p-8 lg:p-12">
      <div className="highlights-content flex flex-col md:flex-row items-center">
        <div ref={textRef} className="highlights-text z-20 md:w-1/2 lg:w-2/3 p-4">
          <h2 className="text-white text-left text-2xl md:text-3xl lg:text-4xl mb-4">Event Highlights</h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-[#f5f5f5] text-xl md:text-2xl">Duration:</strong> <span className="text-orange-500"> 28 hours </span> of non-stop innovation.
            </li>
            <li>
              <strong className="text-[#f5f5f5] text-xl md:text-2xl">Themes:</strong>EdTech Evolution,Blockchain Revolution,AI and Machine Learning,AR/VR Realities,HealthTech Innovations,Cybersecurity,Agritech,Social Impact Tech
            </li>
            <li>
              <strong className="text-[#f5f5f5] text-xl md:text-2xl">Networking Opportunities:</strong> Collaborate with industry experts, mentors, and peers.
            </li>
            <li>
              <strong className="text-[#f5f5f5] text-xl md:text-2xl">Workshops:</strong> Participate in hands-on workshops with cutting-edge technologies.
            </li>
            <li>
              <strong className="text-[#f5f5f5] text-xl md:text-2xl">Recognition:</strong> Certificates for all participants.
            </li>
            <li>
              <strong className="text-[#f5f5f5] text-xl md:text-2xl">Exciting Perks:</strong> Goodies, swag, free meals, and more.
            </li>
          </ul>
        </div>
        <img
          ref={imageRef}
          src={mantaRayImage}
          alt="Manta Ray"
          className="highlights-image w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0"
        />
      </div>
    </div>
  );
};

export default EventHighlights;
