import Banner from "../assets/images/Banner.png";
import Date from "../assets/images/Date.png";
import "../Styles/Home.css";
import Buttons from "./Buttons";

const Home = () => {
  return (
    <div className="background py-8" >
        <div className=" flex mb-8 items-center justify-center"> 
          <img src={Banner} alt="Banner" className="Banner mt-32 h-54 w-full items-center justify-center" />
        </div>
        <div className="flex items-center justify-center"> 
        <img src={Date} alt="Date" className="Date w-96 h-16 items-center justify-center" /> 
        </div>
        <Buttons />
    </div>
  )
}

export default Home
