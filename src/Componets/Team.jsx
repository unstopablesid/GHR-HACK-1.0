import React, { useState } from "react";
import "../Styles/Team.css"; // Keep your existing styles
import Vidya from "../assets/Team/Vidya-Baviskar.jpg";
import Kalpesh from "../assets/Team/Kalpesh-borde.jpg";
import Mrunal from "../assets/Team/Mrunal-Mahajan.jpg";
import Kartik from "../assets/Team/kartik-Chaudhari.jpg";
import Logo from "../assets/Logo/Linked.png";
import Aditi from "../assets/Team/Aditi Patil.jpg";
import Anushka from "../assets/Team/Anushka Anasane.jpg";
import Bhavesh from "../assets/Team/Bhavesh Chaudhari.jpg";
import Bhaveshk from "../assets/Team/Bhavesh-kanaiya.jpg";
import Bhumika from "../assets/Team/Bhumika Ingale.jpeg";
import Omkaar from "../assets/Team/DARKSOUL OMKAR.png";
import Devendra from "../assets/Team/DevendraPatil.png";
import Mayur from "../assets/Team/Me.jpg";
import Ghaurav from "../assets/Team/gaurav mahajan.jpg";
import Gautami from "../assets/Team/Gautami Upasani.jpeg";
import Jayesh from "../assets/Team/JAYESH MAHAJAN.jpg";
import KartikD from "../assets/Team/Kartik deshmukh.jpg";
import Khushi from "../assets/Team/khushi chhari.jpg";
import Krunal from "../assets/Team/Krunal-Badgujar.png";
import Leena from "../assets/Team/Leena Chaudhari.jpg";
import Neeraj from "../assets/Team/Neeraj.jpg";
import Piyush from "../assets/Team/Piyush Salunkhe.jpg";
// import Praful from "../assets/Team/Praful.jpg";
import Prathmesh from "../assets/Team/Prathamesh Misar.jpeg";
import Purva from "../assets/Team/Purva Tiwari.jpeg";
import Rohit from "../assets/Team/Rohit-pitrubhakt.jpg";
// import Rohit from "../assets/Team/Rohit-pitrubhakt.jpg";
import Sakshi from "../assets/Team/Sakshi Nimbalkar.jpg";
import Shravni from "../assets/Team/Shravani Kasar (2).jpg";
import Shivani from "../assets/Team/Shivani Deshpande.jpg";
import Shreyash from "../assets/Team/shreyash Ahirrao.jpg";
import ShreyadhB from "../assets/Team/Shreyash-badgujar.jpg";
import Yash from "../assets/Team/Yash.png";
import Mohit from "../assets/Team/Mohit.jpg";
import Lokesh from "../assets/Team/Lokesh Salunkhe .jpg";
import Lokesh2 from "../assets/Team/Lokesh Salunkhe.jpg";
import Himanshu from "../assets/Team/Himanshu.png";
import Disha from "../assets/Team/Disha.jpg";
import Litesh from "../assets/Team/Litesh.jpg";


// Team data grouped by category
const teamData = {
  Organizer: [
    { name: "Kartik Chaudhari", role: "Overall Coordinator", photo: Kartik, linkedin: "https://www.linkedin.com/in/kartik-chaudhari-87ab52241" },
    { name: "Kalpesh Borde", role: "Overall Coordinator", photo: Kalpesh, linkedin: "https://www.linkedin.com/in/kalpesh-borde-b18b76175/" },
    { name: "Vidya Baviskar", role: "Overall Coordinator", photo: Vidya, linkedin: "https://www.linkedin.com/in/vidyabaviskar" },
    { name: "Mrunal Mahajan", role: "Overall Coordinator", photo: Mrunal, linkedin: "https://www.linkedin.com/in/mrunal-mahajan-5a1651295/" },
  ],
  Technical: [
    { name: "Mayur Nikumbh", role: "Team Leader", photo: Mayur, linkedin: "#" },
    { name: "Lokesh Salunkhe", role: "Member", photo: Lokesh, linkedin: "#" },
    { name: "Khushi Chari", role: "Member", photo: Khushi, linkedin: "#" },
    { name: "Omkar Dolhare", role: "Member", photo: Omkaar, linkedin: "#" },
    { name: "Himanshu Kawle", role: "Member", photo: Himanshu, linkedin: "#" },
    { name: "Mohit Sharma", role: "Member", photo: Mohit, linkedin: "#" },

  ],
  Design: [
    { name: "Neeraj Jain", role: "Design Leader", photo: Neeraj, linkedin: "#" },
    { name: "Kartik Deshmukh", role: "Co-leader", photo: KartikD, linkedin: "#" },
    { name: "Bhumika Ingle", role: "Member", photo: Bhumika, linkedin: "#" },
    { name: "Anushka", role: "Member", photo: Anushka, linkedin: "#" },
],
Marketing: [
  { name: "Bhavesh Kanhaiya", role: "Team leader", photo: Bhaveshk, linkedin: "#" },
  { name: "Shivani Deshpande", role: "Co-leader", photo: Shivani, linkedin: "#" },
  { name: "Aditi patil", role: "Member", photo: Aditi, linkedin: "#" },
  { name: "Lokesh Salunkhe", role: "Member", photo: Lokesh2, linkedin: "#" },
  { name: "Purva Tiwari", role: "Member", photo: Purva, linkedin: "#" },
  { name: "Leena chaudhari", role: "Member", photo: Leena, linkedin: "#" },
  { name: "Sakshi Nimbalkar", role: "Member", photo: Sakshi, linkedin: "#" },
  { name: "Prathmesh Misal", role: "Member", photo: Prathmesh, linkedin: "#" },
  { name: "Bhavesh Chaudhari", role: "Member", photo: Bhavesh, linkedin: "#" },

],
  Finance: [
    { name: "Shreyash Badgujar", role: "Team leader", photo: ShreyadhB, linkedin: "#" },
    { name: "Rohit Pitrubhakt", role: "Member", photo: Rohit, linkedin: "#" },
    { name: "Gautami Upasani", role: "Member", photo: Gautami, linkedin: "#" },
  ],
  Logistic: [
    { name: "Krunal Badgujar", role: "Team Leader", photo: Krunal, linkedin: "#" },
    { name: "Jayesh Mahajan", role: "Member", photo: Jayesh, linkedin: "#" },
    { name: "Gaurav mahajan", role: "Member", photo: Ghaurav, linkedin: "#" },
    { name: "Shreyash Ahhirao", role: "Member", photo: Shreyash, linkedin: "#" },
  ],
  Operations: [
    { name: "Yashraj Patil", role: "Team Leader", photo: Yash, linkedin: "#" },
    { name: "Shravni Kasar", role: "Member", photo: Shravni, linkedin: "#" },
    { name: "Disha Suryavanshi", role: "Member", photo: Disha, linkedin: "#" },
    { name: "Litesh Nannaware ", role: "Member", photo: Litesh, linkedin: "#" },
  ],
};

const Team = () => {
  const [activeTab, setActiveTab] = useState("Organizer"); // Default tab

  return (
    <section id="Team" className="team-section">
      <h2 className="team-title">Meet Our Team</h2>

      {/* Tabs */}
      <div className="tabs-container">
        {Object.keys(teamData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`tab-button ${
              activeTab === category ? "active-tab" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Team Members */}
      <div className="team-container">
        {teamData[activeTab].map((member, index) => (
          <div key={index} className="team-card">
            <img
              src={member.photo}
              alt={member.name}
              className="team-photo"
            />
            <h3 className="team-name text-black">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link"
              >
                <img src={Logo} alt="LinkedIn" className="linkedin-icon mx-auto" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
