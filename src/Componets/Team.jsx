import "../Styles/Team.css"; // Custom styles
import Vidya from "../assets/Team/Vidya-Baviskar.jpg"
import Kalpesh from "../assets/Team/Kalpesh-borde.jpg"
import Mrunal from "../assets/Team/Mrunal-Mahajan.jpg"
import Kartik from "../assets/Team/kartik-Chaudhari.jpg"
import Logo from "../assets/Logo/Linked.png"


// Team data
const teamMembers = [
    { name: "Kartik Chaudhari", role: "Overall Coordinator", photo: Kartik , Logo: Logo ,linkedin: "https://www.linkedin.com/in/kartik-chaudhari-87ab52241" },
    { name: "Kalpesh Borde", role: "Overall Coordinator", photo: Kalpesh, linkedin: "https://www.linkedin.com/in/kalpesh-borde-b18b76175/",Logo: Logo  },
    { name: "Vidya Baviskar", role: "Overall Coordinator", photo: Vidya ,Logo: Logo, linkedin: "https://www.linkedin.com/in/vidyabaviskar" },
    { name: "Mrunal Mahajan", role: "Overall Coordinator", photo: Mrunal,Logo: Logo ,linkedin: "https://www.linkedin.com/in/mrunal-mahajan-5a1651295/" }
];

const Team = () => {
    return (
        <section id="Team" className="team-section bg-gray-100 md:flex md:justify-center md:align-center py-10">
        <h2 className="team-title text-4xl font-bold text-center mb-8 text-black md:text-sm">Meet Our Team</h2>
        <div className="team-container grid grid-cols-1  md:grid-cols-1 lg:grid-cols-5 gap-4 px-4 md:px-1">
            {teamMembers.map((member, index) => (
                <div key={index} className="team-card bg-white rounded-lg shadow-lg p-4 text-center">
                    <img
                        src={member.photo}
                        alt={`${member.name}`}
                        className="team-photo w-24 h-24 mx-auto rounded-full object-cover mb-4"
                    />
                    <h3 className="team-name text-xl font-semibold text-gray-800">{member.name}</h3>
                    <p className="team-role text-sm text-gray-600">{member.role}</p>
                    {member.linkedin && (
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin-link inline-block mt-4"
                        >
                            <img
                                src={Logo}
                                alt={`${member.name}'s LinkedIn`}
                                className="w-6 h-6 mx-auto"
                            />
                        </a>
                    )}
                </div>
            ))}
        </div>
    </section>
);
};

export default Team;
