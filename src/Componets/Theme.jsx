import Cloud from "../assets/ThemeLogo/Cloud.png";
import Ai  from "../assets/ThemeLogo/Ai.png";
import Blockchain from "../assets/ThemeLogo/Blockchain.png";
import Helthcare from "../assets/ThemeLogo/Healthcarre.png";
import Iot from "../assets/ThemeLogo/IOT.png";
import Ml from "../assets/ThemeLogo/machineLearning.png";

const themes = [
    {
        icon: "cloud-computing",
        title: "Cloud Computing",
        image: Cloud, 
    },
    {
        icon: "education",
        title: "Blockchain",
        image: Blockchain,
    },
    {
        icon: "ai",
        title: "Artificial Intelligence",
        image: Ai,
    },
    {
        icon: "iot",
        title: "IOT",
        image: Iot,
    },
    {
        icon: "healthcare",
        title: "Healthcare",
        image:  Helthcare,
    },
    {
        icon: "machine-learning",
        title: "Machine Learning",
        image: Ml,
    },
  
];

const HackathonThemes = () => {
    
    return (
        <section id="Theme" className="font-[Ghr4] bg-[#014EB6] text-white py-16">
            <div  className="container mx-12 px-12">
                <h2 className="font-[Ghr4] text-5xl mb-12 text-center text-white">Hackathon Themes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {themes.map((theme, index) => (
                        <div
                            key={index}
                            className="theme-card h-60 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg p-6 flex flex-col items-center shadow-lg transition-transform transform hover:scale-105"
                        >
                            <img
                                src={theme.image}
                                alt={theme.title}
                                className="w-32 mb-4"
                            />
                            <h3 className="text-2xl font-semibold">{theme.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HackathonThemes;
