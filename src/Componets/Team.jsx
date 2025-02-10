import React, { useState } from "react";
import "../Styles/Team.css"; // Keep your existing styles
import Vidya from "../assets/Team/Vidya-Baviskar.jpg";
import Kalpesh from "../assets/Team/Kalpesh-borde.jpg";
import Mrunal from "../assets/Team/Mrunal-Mahajan.jpg";
import Kartik from "../assets/Team/kartik-Chaudhari.jpg";
import Logo from "../assets/Logo/Linked.png";
import Aditi from "../assets/Team/Aditi Patil2.jpg";
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
import Dipesh from "../assets/Team/Dipesh Fuse.jpg";
import RohitM from "../assets/Team/Rohit Mahajan.jpg";


// Team data grouped by category
const teamData = {
   Lead_Organizer: [
    { name: "Kartik Chaudhari", role: "Overall Coordinator", photo: Kartik, linkedin: "https://www.linkedin.com/in/kartik-chaudhari-87ab52241" },
    { name: "Kalpesh Borde", role: "Overall Coordinator", photo: Kalpesh, linkedin: "https://www.linkedin.com/in/kalpesh-borde-b18b76175/" },
    { name: "Vidya Baviskar", role: "Overall Coordinator", photo: Vidya, linkedin: "https://www.linkedin.com/in/vidyabaviskar" },
    { name: "Mrunal Mahajan", role: "Overall Coordinator", photo: Mrunal, linkedin: "https://www.linkedin.com/in/mrunal-mahajan-5a1651295/" },
  ],
  Technical: [
    { name: "Mayur Nikumbh", role: "Team Leader", photo: Mayur, linkedin: "https://www.linkedin.com/in/mayur-nikumbh" },
    { name: "Lokesh Sapkale", role: "Member", photo: Lokesh, linkedin: "#" },
    { name: "Khushi Chari", role: "Member", photo: Khushi, linkedin: "https://www.linkedin.com/in/khushichhari" },
    { name: "Omkar Dolhare", role: "Member", photo: Omkaar, linkedin: "https://www.linkedin.com/in/omkar-dolhare-24760b2b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Himanshu Kawle", role: "Member", photo: Himanshu, linkedin: "#" },
    { name: "Mohit Sharma", role: "Member", photo: Mohit, linkedin: "https://www.linkedin.com/in/mr-mohit-sharma-541167297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },

  ],
  Design: [
    { name: "Neeraj Rakhecha", role: "Design Leader", photo: Neeraj, linkedin: "https://www.linkedin.com/in/neeraj-rakhecha-084b85316" },
    { name: "Kartik Deshmukh", role: "Co-leader", photo: KartikD, linkedin: "#" },
    { name: "Bhumika Ingle", role: "Member", photo: Bhumika, linkedin: "www.linkedin.com/in/bhumika-ingale-83209531b" },
    { name: "Anushka Anasane", role: "Member", photo: Anushka, linkedin: "https://www.linkedin.com/in/anushka-anasane-33202629b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Dipesh Fuse", role: "Member", photo: Dipesh, linkedin: ""},
    { name: "Rohit Mahajan", role: "Member", photo: RohitM, linkedin: "https://www.linkedin.com/in/rohit-mahajan-585a22340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
],
Marketing: [
  { name: "Bhavesh Kanhaiya", role: "Team leader", photo: Bhaveshk, linkedin: "https://www.linkedin.com/in/bhavesh-kanhaiya-689b65217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "Shivani Deshpande", role: "Co-leader", photo: Shivani, linkedin: "https://www.linkedin.com/in/shivani-deshpande-507355341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "Lokesh Salunkhe", role: "Member", photo: Lokesh2, linkedin: "#" },
  { name: "Aditi patil", role: "Member", photo: Aditi, linkedin: "https://www.linkedin.com/in/aditi-patil-23b613258" },
  { name: "Purva Tiwari", role: "Member", photo: Purva, linkedin: "https://www.linkedin.com/in/purva-tiwari-4b97b1297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "Leena chaudhari", role: "Member", photo: Leena, linkedin: "https://www.linkedin.com/in/leena-chaudhari-a14b17342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "Sakshi Nimbalkar", role: "Member", photo: Sakshi, linkedin: "https://www.linkedin.com/in/sakshi-nimbalkar-7770532a2" },
  { name: "Prathmesh Misar", role: "Member", photo: Prathmesh, linkedin: "#" },
  { name: "Bhavesh Chaudhari", role: "Member", photo: Bhavesh, linkedin: "https://www.linkedin.com/in/bhavesh-chaudhari-10737b31b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },

],
  Finance: [
    { name: "Shreyash Badgujar", role: "Team leader", photo: ShreyadhB, linkedin: "https://www.linkedin.com/in/shreyas-badgujar-a97058258" },
    { name: "Rohit Pitrubhakt", role: "Member", photo: Rohit, linkedin: "#" },
    { name: "Gautami Upasani", role: "Member", photo: Gautami, linkedin: "https://www.linkedin.com/in/gautami-upasani-2027962b2" },
  ],
  Logistic: [
    { name: "Krunal Badgujar", role: "Team Leader", photo: Krunal, linkedin: "https://www.linkedin.com/in/krunal-badgujar-45b3a125b?" },
    { name: "Jayesh Mahajan", role: "Member", photo: Jayesh, linkedin: "https://www.linkedin.com/in/jayesh-mahajan-9b4ba2278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Gaurav mahajan", role: "Member", photo: Ghaurav, linkedin: "https://www.linkedin.com/in/gaurav-mahajan-8663a3258" },
    { name: "Shreyash Ahhirao", role: "Member", photo: Shreyash, linkedin: "https://www.linkedin.com/in/shreyash-ahirrao-865a47288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  ],
  Operations: [
    { name: "Yashraj Patil", role: "Team Leader", photo: Yash, linkedin: "#" },
    { name: "Shravni Kasar", role: "Member", photo: Shravni, linkedin: "https://www.linkedin.com/in/shravani-kasar-5a5623258" },
    { name: "Disha Suryavanshi", role: "Member", photo: Disha, linkedin: "https://www.linkedin.com/in/disha-suryawanshi-8a5401345" },
    { name: "Litesh Nannaware ", role: "Member", photo: Litesh, linkedin: "#" },
  ],
};

const Team = () => {
  const [activeTab, setActiveTab] = useState("Lead_Organizer"); 

  return (
    <section id="Team" className="team-section">
      <h2 className="team-title">Meet Our Team</h2>

    
      <div className="tabs-container mb-2 flex flex-wrap justify-center">
        {Object.keys(teamData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`tab-button ${
              activeTab === category ? "active-tab" : ""
            } m-2 sm:mb-8 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-700`}
          >
            {category}
          </button>
        ))}
      </div>

   
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
