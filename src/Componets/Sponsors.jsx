
import DevfolioLogo from "../assets/Sponser/DEVFOLIO.jpg";

import Polygon from '../assets/Sponser/Polygon.jpg';
import Quillai from '../assets/Sponser/QuillAI.jpg';
import ETH from '../assets/Sponser/ETHindia.jpg';
import info from '../assets/Sponser/Info Planet White Logo A.png';
import TheDevArmy from '../assets/Sponser/TheDevArmy.jpg';
import Regal from "../assets/Sponser/Regal-palace.jpeg";
import nic from "../assets/Sponser/nik.png";
const Sponsors = () => {
  return (
    <div id="Sponsers" className="bg-[#014EB6] text-white py-16 ">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 font-[Ghr4] text-white">Our Sponsors</h2>
        </div>

        <div className="space-y-12 text-center font-[Ghr4]">
          <div className="text-center"></div>
            <h3 className="text-3xl font-semibold mb-4">Gold Sponsor</h3>
            <img src={DevfolioLogo} alt="DEVFOLIO LOGO" className="mx-auto w-[20rem] rounded-xl" />
          </div>
        </div>

        <div className="mt-16 align-center justify-center text-center font-[Ghr4]">
          <h3 className="text-3xl font-semibold text-center mb-6">Silver Sponsors</h3>
          <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-[24rem]">
            <img src={ETH} alt="ETHINDIA LOGO" className=" mx-auto w-[20rem] rounded-xl " />
            <img src={Polygon} alt="POLYGON LOGO" className="mx-auto w-[20rem] rounded-xl" />
            <img src={nic} alt="Nic enterprices LOGO" className="mx-auto h-[4.9rem] rounded-xl" />
          </div>
        </div>
        <div className="mt-16 align-center justify-center text-center font-[Ghr4]">
          <h3 className="text-3xl font-semibold text-center mb-6">Education Partners</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4 md:px-10">
            
            <img src={info} alt="LOGO" className=" mx-auto w-[10rem] rounded-xl " />
            
            
          </div>
        </div>
        <div className="mt-16 align-center justify-center text-center font-[Ghr4]">
          <h3 className="text-3xl font-semibold text-center mb-6">Food Partners</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4 md:px-10">
            
            
            <img src={Regal} alt="LOGO" className=" mx-auto w-[10rem] rounded" />
            
          </div>
        </div>
        {/* <div className="mt-16 align-center justify-center text-center font-[Ghr4]">
          <h3 className="text-3xl font-semibold text-center mb-6">Community Partners</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4 md:px-10">
          <img src={TheDevArmy} alt="TheDevArmy" className=" mx-auto w-[10rem] rounded-xl " />
            
          </div>
        </div> */}
        
      </div>
      

  );
};

export default Sponsors;
