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
        <div ref={textRef} className="highlights-text z-20">
          <h2 className="text-white">Event Highlights</h2>
          <ul>
            <li>
              <strong>Duration:</strong> 28 hours of non-stop innovation.
            </li>
            <li>
              <strong>Tracks:</strong> Artificial Intelligence, Blockchain,
              Sustainability, FinTech, Healthcare, Open Innovation.
            </li>
            <li>
              <strong>Networking Opportunities:</strong> Collaborate with
              industry experts, mentors, and peers.
            </li>
            <li>
              <strong>Workshops:</strong> Participate in hands-on workshops with
              cutting-edge technologies.
            </li>
            <li>
              <strong>Recognition:</strong> Certificates for all participants.
            </li>
            <li>
              <strong>Exciting Perks:</strong> Goodies, swag, free meals, and
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

