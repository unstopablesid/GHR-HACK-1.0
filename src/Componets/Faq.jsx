import { useState } from "react";
import "../Styles/FAQ.css"; // Optional: Add styles here or use inline styles

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "How do i register for the hackthon", answer: "Click on Register Here with Devfolio or Scan the QR on the website" },
    { question: "Is there any registration fees?", answer: "No,Registration is completely free" },
    { question: "What is the ideal Team size", answer: "Team should be consist of 2-4 members" },
    { question: "Why should I participate in GHRhack 1.0?", answer: "Winners get cash prizes worth INR 80k+, and all participants will have excellent networking opportunities, learning new skills, and get cool swags." },
    { question: "Who can participate ?", answer: "The hackathon is open to all BE/Btech, BCA, MCA, BSc(CS), and postgraduate students as well." },
    { question: "When and How the team will be shortlisted?", answer: "The team shortlisting starts on 11th February 2025 on individuals resume, profile and innovative idea abstract provided by them." },
    { question: "Does the hackathon include accomodation and meals for the participants?", answer: "Yes, accomodation and meals for 2 days are provided free of cost for all participants." },
    { question: "Does GHRhack provide Internet facility during hackathon?", answer: "Yes, we provide a high-speed internet connection for all participants." },
    

  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="FAQ" className="faq  bg-[#011947]">
    <div className="faq-container bg-[#011947]">
       <h1 className="text-center font-[Ghr4] uppercase leading-[1] mt-16 mb-10 text-4xl text-white">FAQ'<span className="lowercase">s</span></h1>
      <ul className="faq-list cursor2">
        {faqs.map((faq, index) => (
          <li key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
            <button className="cursor2 faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="icon">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default FAQ;
