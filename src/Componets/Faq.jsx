import { useState } from "react";
import "../Styles/FAQ.css"; // Optional: Add styles here or use inline styles

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "How do i register for the hackthon", answer: "Click on any registration now button on the website" },
    { question: "What is the participation fee", answer: "Just some enthusiast and open mind are enough me, dont charge any fee" },
    { question: "What if i dont have a team or idea ?", answer: "Well have a team formation and ideation events to help you find a team." },
    { question: "Is there any registration fees?", answer: "No,Registration is completely free" },
    { question: "Who can participate ?", answer: "Anyone is Welcome to apply-student or working proffesional , Wether you want to inovate or just enjoy a fun weekend you are welcome" },
    { question: "Does GHR-HACK provide Internet facility during hackathon?", answer: "Yes, we provide a high-speed internet connection for all participants." },
    { question: "What is the ideal Team size", answer: "Team should be consist of 2-4 members" },
    { question: "What is the code of conduct", answer: "To ensure a positive experience for all participants we follow the SIH code of conduct" },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="FAQ" className="faq  bg-[#011947]">
    <div className="faq-container bg-[#011947]">
       <h1 className="text-center font-[Ghr4] uppercase leading-[1] text-4xl text-white">FAQ</h1>
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
