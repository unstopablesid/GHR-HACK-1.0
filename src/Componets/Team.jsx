import "../Styles/Team.css"; 
import Mayur from "../assets/Team/Me.jpg"
import Vidya from "../assets/Team/Vidya-Baviskar.jpg"
import Kalpesh from "../assets/Team/Kalpesh-borde.jpg"
import Mrunal from "../assets/Team/Mrunal-Mahajan.jpg"
import Kunal from "../assets/Team/Krunal-Badgujar.png"
import Bhavesh from "../assets/Team/Bhavesh-kanaiya.jpg"
import Shreyas from "../assets/Team/Shreyash-badgujar.jpg"
import Rohit from "../assets/Team/Rohit-pitrubhakt.jpg"
import Kartik from "../assets/Team/kartik-Chaudhari.jpg"


// Team data
const teamMembers =[
    { name: "Kartik Chaudhari", role: "Overall Coordinator", photo: Kartik },
    { name: "Vidya Baviskar", role: "Overall Coordinator", photo: Vidya, linkedin: "" },
    { name: "Kalpesh Borde", role: "Overall Coordinator", photo: Kalpesh ,linkedin: "https://www.linkedin.com/in/kalpesh-borde-0b1b3b1b7" },
    { name: "Mrunal Mahajan", role: "Operations Lead", photo: Mrunal },
    { name: "Mayur Nikumbh", role: "Technical Lead", photo: Mayur },
    { name: "Kunal Badgujar", role: "Logistics Lead", photo: Kunal },
    // { name: "Neeraj Rakhecha", role: "Design Team", photo: Neeraj },
    // { name: "Kartik Deshmukh", role: "Design Team", photo: KartikD },
    { name: "Bhavesh Kanhaiya", role: "Marketing Lead", photo: Bhavesh },
    { name: "Shreyas Badgujar", role: "Finance Lead", photo: Shreyas },
    { name: "Rohit Pitrubhakt", role: "Finance Lead", photo: Rohit , linkedin: "https://www.linkedin.com/in/rohit-pitrubhakt-5a2737257" },
];

const Team = () => {
  return (
    <section className="team-section Team">
      <h2 className="team-title font-[Ghr4] text-white">Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h3 className="team-name text-black font-[Ghr4]">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            ><img
                src="..\src\assets\Logo\Linked in.png"
                alt="LinkedIn"
                className="linkedin-icon cursor-pointer"/>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
