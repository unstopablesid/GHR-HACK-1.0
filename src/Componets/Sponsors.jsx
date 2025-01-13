
import DevfolioLogo from "../assets/Sponser/DEVFOLIO.jpg";

import Polygon from '../assets/Sponser/Polygon.jpg';
import ETH from '../assets/Sponser/ETHindia.jpg';

const Sponsors = () => {
  return (
    <div className="bg-[#014EB6] text-white py-16 ">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4  md:px-10">
            <img src={ETH} alt="ETHINDIA LOGO" className=" mx-auto w-[20rem] rounded-xl " />
            <img src={Polygon} alt="POLYGON LOGO" className="mx-auto w-[20rem] rounded-xl" />
          </div>
        </div>
      </div>

  );
};

export default Sponsors;
