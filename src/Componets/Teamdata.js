import Vidya from "../assets/Team/Vidya-Baviskar.jpg";
import Kalpesh from "../assets/Team/Kalpesh-borde.jpg";
import Mrunal from "../assets/Team/Mrunal-Mahajan.jpg";
import Kartik from "../assets/Team/kartik-Chaudhari.jpg";
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
import Prathmesh from "../assets/Team/Prathamesh Misar.jpeg";
import Purva from "../assets/Team/Purva Tiwari.jpeg";
import Rohit from "../assets/Team/Rohit-pitrubhakt.jpg";
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


// The `teamData` object contains information about the team members categorized by their roles.
// Each category (e.g., Organizers, Technical) is an array of objects where each object represents a team member.
// Each team member object includes the following properties:
// - name: The name of the team member.
// - role: The role of the team member within the team.
// - photo: The path to the team member's photo.
// - linkedin: The LinkedIn profile URL of the team member.

// Team Data
export const teamData = {
  Organizers: [
    { name: "Kartik Chaudhari", role: "Overall Coordinator", photo: Kartik, linkedin: "https://www.linkedin.com/in/kartik-chaudhari-87ab52241" },
    { name: "Kalpesh Borde", role: "Overall Coordinator", photo: Kalpesh, linkedin: "https://www.linkedin.com/in/kalpesh-borde-b18b76175/" },
    { name: "Vidya Baviskar", role: "Overall Coordinator", photo: Vidya, linkedin: "https://www.linkedin.com/in/vidyabaviskar" },
    { name: "Mrunal Mahajan", role: "Overall Coordinator", photo: Mrunal, linkedin: "https://www.linkedin.com/in/mrunal-mahajan-5a1651295/" },
  ],
  Technical: [
    { name: "Mayur Nikumbh", role: "Technical Head", photo: Mayur },
    { name: "Lokesh Sapkale", role: "Member", photo: Lokesh, linkedin: "" },
    { name: "Khushi Chhari", role: "Member", photo: Khushi, linkedin: "" },
    { name: "Omkar Dolhare", role: "Member", photo: Omkaar, linkedin: "" },
    { name: "Himanshu Kawle", role: "Member", photo: Himanshu, linkedin: "" },
    { name: "Mohit Sharma", role: "Member", photo: Mohit, linkedin: "" },

  ],
  Design: [
    { name: "Neeraj Rakhecha", role: "Design Head", photo: Neeraj, linkedin: "" },
    { name: "Kartik Deshmukh", role: "Design Head", photo: KartikD, linkedin: "" },
    { name: "Bhumika Ingale", role: "Member", photo: Bhumika, linkedin: "" },
    { name: "Anushka Anasane", role: "Member", photo: Anushka, linkedin: "" },
    { name: "Dipesh Fuse", role: "Member", photo: Dipesh, linkedin: ""},
    { name: "Rohit Mahajan", role: "Member", photo: RohitM, linkedin: "" },
],
Marketing: [
  { name: "Bhavesh Kanhaiya", role: "Marketing Head", photo: Bhaveshk, linkedin: "" },
  { name: "Shivani Deshpande", role: "Member", photo: Shivani, linkedin: "" },
  { name: "Lokesh Salunkhe", role: "Member", photo: Lokesh2, linkedin: "" },
  { name: "Aditi patil", role: "Member", photo: Aditi, linkedin: "" },
  { name: "Purva Tiwari", role: "Member", photo: Purva, linkedin: "" },
  { name: "Leena chaudhari", role: "Member", photo: Leena, linkedin: "" },
  { name: "Sakshi Nimbalkar", role: "Member", photo: Sakshi, linkedin: "" },
  { name: "Prathmesh Misar", role: "Member", photo: Prathmesh, linkedin: "" },
  { name: "Bhavesh Chaudhari", role: "Member", photo: Bhavesh, linkedin: "" },

],
  Finance: [
    { name: "Shreyash Badgujar", role: "Finance Head", photo: ShreyadhB, linkedin: "" },
    { name: "Rohit Pitrubhakt", role: "Member", photo: Rohit, linkedin: "" },
    { name: "Gautami Upasani", role: "Member", photo: Gautami, linkedin: "" },
  ],
  Logistic: [
    { name: "Krunal Badgujar", role: "Logistics Head", photo: Krunal, linkedin: "" },
    { name: "Jayesh Mahajan", role: "Member", photo: Jayesh, linkedin: "" },
    { name: "Gaurav Mahajan", role: "Member", photo: Ghaurav, linkedin: "" },
    { name: "Shreyash Ahhirao", role: "Member", photo: Shreyash, linkedin: "" },
  ],
  Operations: [
    { name: "Yashraj Patil", role: "Operation Head", photo: Yash, linkedin: "" },
    { name: "Shravni Kasar", role: "Member", photo: Shravni, linkedin: "" },
    { name: "Disha Suryavanshi", role: "Member", photo: Disha, linkedin: "" },
    { name: "Litesh Nannaware ", role: "Member", photo: Litesh, linkedin: "" },
  ],
};