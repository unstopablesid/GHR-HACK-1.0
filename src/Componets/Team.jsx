// import React from "react";
import "../Styles/Team.css"; // Custom styles
import Mayur from "../assets/Team/Me.jpg"
import Vidya from "../assets/Team/Vidya-Baviskar.jpg"
import Kalpesh from "../assets/Team/Kalpesh-borde.jpg"
import Mrunal from "../assets/Team/Mrunal-Mahajan.jpg"
import Kunal from "../assets/Team/Krunal-Badgujar.png"
import Bhavesh from "../assets/Team/Bhavesh-kanaiya.jpg"
import Shreyas from "../assets/Team/Shreyash-badgujar.jpg"
import Rohit from "../assets/Team/Rohit-pitrubhakt.jpg"
import Kartik from "../assets/Team/kartik-Chaudhari.jpg"
import Logo from "../assets/Logo/Linked.png"
import Jain from "../assets/Team/Neeraj.jpg"


// Team data
const teamMembers = [
    { name: "Kartik Chaudhari", role: "Overall Coordinator", photo: Kartik , Logo: Logo ,linkedin: "https://www.linkedin.com/in/kartik-chaudhari-0b1b3b1b7" },
    { name: "Kalpesh Borde", role: "Overall Coordinator", photo: Kalpesh, linkedin: "https://www.linkedin.com/in/kalpesh-borde-0b1b3b1b7",Logo: Logo  },
    { name: "Vidya Baviskar", role: "Overall Coordinator", photo: Vidya ,Logo: Logo, linkedin: "https://www.linkedin.com/in/vidya-baviskar-0b1b3b1b7" },
    { name: "Mrunal Mahajan", role: "Operations Lead", photo: Mrunal,Logo: Logo ,linkedin: "https://www.linkedin.com/in/mrunal-mahajan-0b1b3b1b7" },
    { name: "Mayur Nikumbh", role: "Technical Lead", photo: Mayur ,Logo: Logo ,linkedin: "https://www.linkedin.com/in/mayur-nikumbh"},
    { name: "Kunal Badgujar", role: "Logistics Lead", photo: Kunal ,Logo: Logo ,linkedin: "https://www.linkedin.com/in/kunal-badgujar-0b1b3b1b7" },
    { name: "Bhavesh Kanhaiya", role: "Marketing Lead", photo: Bhavesh ,Logo: Logo ,linkedin: "https://www.linkedin.com/in/bhavesh-kanhaiya-0b1b3b1b7" },
    { name: "Shreyas Badgujar", role: "Finance Lead", photo: Shreyas ,Logo: Logo ,linkedin: "https://www.linkedin.com/in/shreyas-badgujar-0b1b3b1b7" },
    { name: "Rohit Pitrubhakt", role: "Finance Lead", photo: Rohit, linkedin: "https://www.linkedin.com/in/rohit-pitrubhakt-5a2737257" },
    { name: "Neeraj Rakhicha", role: "Design Lead", photo: Jain, linkedin: "https://www.linkedin.com/in/rohit-pitrubhakt-5a2737257" },
];

const Team = () => {
    return (
        <section id="Team" className="team-section Team">
            <h2 className="team-title font-[Ghr4] text-white">Meet Our Team</h2>
            <div className="team-container">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-card">
                        <img src={member.photo} alt={member.name} className="team-photo" />
                        <h3 className="team-name text-black font-[Ghr4]">{member.name}</h3>
                        <p className="team-role">{member.role}</p>
                        {member.linkedin && (
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="linkedin-link"
                            >
                                <img src={Logo} alt="" className="w-6 items-center LinkedIn"  />
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
