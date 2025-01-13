import VideoBG from "../assets/Background.mp4";
// import Buttons from "./Buttons";
import Home from "./Home";
import Navbar from "./Navbar";

const Background = () => {
  return (
    <div className="App relative overflow-hidden flex h-[1--vyh] ">
      {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0   object-cover"
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
        
      </div>
    </div>
  );
};

export default Background;
