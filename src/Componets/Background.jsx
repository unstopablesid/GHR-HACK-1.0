import VideoBG from "../assets/Background.mp4";
import Home from "./Home";
import Navbar from "./Navbar";
import Buttons from "./Buttons";

const Background = () => {
  return (
    <div className="App relative overflow-hidden h-screen w-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 h-full w-full object-cover"
      >
        <source src={VideoBG} type="video/mp4" />
        {/* Fallback message */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      {/* Navbar */}
      <Navbar />

      {/* Home Component */}
      <div className="relative z-10">
        <Home />
        <Buttons />
      </div>
    </div>
  );
};

export default Background;
