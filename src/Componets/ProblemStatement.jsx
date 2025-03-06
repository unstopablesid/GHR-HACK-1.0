import React, { useState } from "react";

const problems = [
  {
    id: 1,
    title: "Problem Statement 1",
    domain: "@EdTech @Social Impact @Health-Tech @Artificial Intelligence and Machine Learning",
    details: {
      background:
        "Studies indicate that 76% of university students and 56% of university graduates cite lack of motivation as the biggest obstacle to learning. Many students find themselves struggling with self-doubt, fear of failure, and a lack of confidence, which directly impacts their academic performance and overall engagement. For students transitioning from High School to Higher Education, the challenge becomes even more pronounced. The shift to a more demanding academic environment, coupled with increased independence, can lead to hesitation in participation, difficulty in social integration, and fear of taking on new challenges. Traditional educational methods primarily focus on academic performance and often neglect the psychological and emotional aspects of learning, leaving students unprepared to manage their motivation, productivity, and personal growth. As a result, many students avoid challenging tasks, experience negative thinking, and struggle to develop a growth mindset. Without proper guidance and support, they remain disengaged, which not only affects their academic success but also limits their potential to explore extracurricular opportunities and career growth",
      statement:
        "There is a need for an motivational and productivity platform that provides a structured roadmap, tracks mental well-being, and integrates adaptive learning paths tailored to individual needs. The platform should feature chat-bot support, reward-based engagement and daily and weekly challenges that progress from basic to advanced levels. Additionally, it should facilitate public speaking tasks to help introverted students build confidence and organize inspirational community meetups(Q&A sessions and Webinars) to foster peer learning and motivation. By leveraging behavioral analytics, gamification, this solution aims to empower students with personalized strategies to enhance their growth mindset, productivity, and overall learning experience. ",
        
    },
  },
  {
    id: 2,
    title: "Problem Statement 2",
    domain: "@Web3 or Blockchain @ Artificial Intelligence & Machine Learning",
    details: {
      background:
        "In today’s digital economy, data has become one of the most valuable assets, yet it is largely controlled by centralized entities such as tech giants, financial institutions, and data brokers. These organizations collect, store, and monetize vast amounts of user data, often without transparency, fair compensation, or adequate security measures. This centralized approach leads to several critical issues,including data breaches,unauthorized access,privacy violations and monopolistic control over valuable digital information. ",
      statement:
        "With the rise of Web3, blockchain technology, and decentralized finance,there is a growing need for a secure, and transparent way to exchange and monetize data while ensuring ownership, privacy, and fair value distribution. A Decentralized Data Exchange addresses these concerns by leveraging blockchain, NFTs, and AI to create an autonomous and efficient data-sharing ecosystem By decentralizing data exchange, this platform not only enhances privacy and security but also democratizes data ownership, empowering users to monetize their information on their own terms while fostering innovation across multiple industries, including finance, healthcare, supply chain, and digital content creation This solution enables individuals and businesses to retain full control over their data, decide who can access it, and get fairly compensated through tokenized transactions this platform introduces a unique, verifiable way to trade and license digital assets.",
        
    },
  },
  {
    id: 3,
    title: "Problem Statement 3",
    domain: "@ Agritech @ Artificial Intelligence & Machine Learning ",
    details: {
      background:
        "Agricultural technology (AgriTech) is transforming farming practices worldwide, offering data-driven solutions, precision farming techniques, and improved market access. However, many rural farmers struggle to adopt these digital tools due to limited digital literacy, lack of awareness, and inadequate training. This gap prevents them from leveraging advanced agricultural techniques, government schemes, and profitable market opportunities, ultimately leading to inefficient farming practices, lower productivity, and financial instability. Traditional training methods are often inaccessible, complex, or not tailored to regional languages and farming conditions, making it difficult for farmers to integrate technology into their daily agricultural activities. Without localized, farmer-friendly digital literacy solutions, many small-scale farmers remain disconnected from modern innovations, sustainable practices, and financial growth opportunities. By bridging the digital literacy gap, an innovative solution can empower farmers with user friendly, localized, and accessible technology, ensuring they make informed decisions, optimize their yields, and improve their overall financial well-being in an increasingly tech-driven agricultural landscape.",
        statement:
        "Existing training methods are often complex, inaccessible, or not tailored to regional languages and farming conditions, further hindering adoption. To address this gap, a farmer-centric digital literacy solution is required, integrating localized language support, interactive learning modules, virtual assistance, and mobile-friendly interfaces. This solution will empower farmers with easy-to-use technology, real-time guidance, and personalized learning paths, enabling them to make informed decisions, improve productivity, and achieve financial stability in an increasingly technology-driven agricultural sector.",
        
    },
  },
  {
    id: 4,
    title: "Problem Statement 4",
    domain: "@Social Impact @Healthtech @ Artificial Intelligence & Machine Learning ",
    details: {
      background:
        "Communication barriers between the hearing and speech-impaired community and the general population create significant challenges in education, employment, and daily interactions. Traditional sign language interpreters are not always available, and written communication may not fully capture the nuances of sign language, making real-time conversations difficult. Advancements in computer vision and natural language processing offer a promising solution by enabling automated translation of sign language gestures into text or speech. By leveraging gesture recognition, deep learning models, and language processing, a system can accurately interpret sign language in real-time, bridging the communication gap between sign language users and non-signers. A sign language translation system can empower individuals with speech and hearing disabilities by providing an accessible, real-time communication tool. This solution can be integrated into smartphones, computers, and public service kiosks, fostering inclusivity and improving accessibility across various sectors such as education, healthcare, and workplaces.",
      statement:
        "Existing communication methods for individuals with hearing and speech impairments are often inadequate, as sign language interpreters are not always available, and written communication fails to capture the full depth of sign language. This creates barriers in education, employment, and daily interactions, limiting accessibility and inclusivity. To address this challenge, a software solution leveraging computer vision and natural language processing is required to automatically translate sign language gestures into text or speech in real-time. The system will use gesture recognition and deep learning models to accurately interpret sign language, enabling seamless communication between sign language users and non-signers. Designed for scalability and integration into multiple platforms, such as smartphones, computers, this solution will enhance accessibility across key sectors, promoting inclusivity and independent communication for the hearing and speech-impaired community.",
    },
  },
  {
    id: 5,
    title: "Problem Statement 5",
    domain: "@Cyber Security @ Web3/Blockchain ",
    details: {
      background:
        "Blockchain technology offers decentralization, transparency, and security, but it also introduces unique vulnerabilities. Smart contract exploits, such as reentrancy attacks and logic flaws, have led to significant financial losses. Consensus protocol threats, including 51% attacks and Sybil attacks, can compromise network integrity. Supply chain attacks, like malicious code injections and oracle manipulations, pose additional risks. These security challenges demand a robust and scalable framework to protect blockchain applications. A comprehensive security model should include secure smart contract development, resilient consensus mechanisms, and strong supply chain security. Formal verification, static analysis, and runtime monitoring can help mitigate smart contract risks. Hybrid consensus models and reputation-based staking enhance network security. Regular dependency audits and multi-signature verification strengthen supply chain resilience. Implementing these measures ensures trust, reliability, and long-term security in decentralized applications.",
      statement:
        "Despite the benefits of decentralization, transparency, and security, blockchain-based applications are vulnerable to various attacks, including smart contract exploits, consensus protocol threats, and supply chain attacks. Reentrancy attacks, 51% attacks, Sybil attacks, and oracle manipulations pose significant risks to network integrity and financial security. Existing security measures often lack scalability and fail to address evolving attack vectors comprehensively. There is a critical need for a robust and scalable security framework that integrates secure smart contract development, resilient consensus mechanisms, and supply chain security. The framework should incorporate formal verification, runtime monitoring, hybrid consensus models, and multi-signature verification to enhance trust, reliability, and long-term security in decentralized ecosystems.",
       
    },
  },
  {
    id: 6,
    title: "Problem Statement 6",
    domain: "@Artificial Intelligence & Machine Learning @Social Impact ",
    details: {
      background:
        "Workplace safety is essential in environments where workers face potential hazards every day. Field engineers and workers often visit high-risk sites where wearing proper Personal Protective Equipment (PPE) is critical to prevent injuries. Despite safety protocols, human errors like forgetting to wear helmets, goggles, or protective shoes can happen — putting lives at risk. Regular manual monitoring is difficult and may not catch every unsafe condition in time, highlighting the need for a smarter, more responsive safety system. ",
      statement:
        "Ensuring workers follow safety protocols is a constant challenge, especially in hazardous areas. Missing essential PPE like helmets or gloves can lead to serious accidents or injuries. The goal is to create a system that automatically checks for missing safety gear through CCTV cameras and alerts the safety team when unsafe conditions are detected. This would help prevent accidents by allowing quick interventions and promoting a safer work culture. ",
      
    },
  },
  {
    id: 7,
    title: "Problem Statement 7",
    domain: "@ AR/VR Realities @ Artificial Intelligence & Machine Learning",
    details: {
      background:
        "The rise of e-commerce has transformed the way consumers shop for clothing, eyewear, and accessories, offering convenience and a vast range of options. However, one of the biggest challenges in online shopping is the high return rate, primarily due to issues related to incorrect size, fit, and appearance. Unlike physical stores, where customers can try on products before purchasing, online shoppers must rely on static images, size charts, and product descriptions, which often fail to provide an accurate representation of how an item will look or fit in real life. This lack of real-time visualization and personalization leads to frequent dissatisfaction, increased return rates, and logistical inefficiencies for both customers and retailers. Returns not only incur financial losses due to processing, restocking, and reverse logistics but also contribute to environmental waste through excessive shipping and discarded products. To address these challenges, there is a growing need for innovative, technology-driven solutions that enhance the virtual shopping experience. ",
      statement:
        "To enhance customer confidence, reduce return rates, and improve the overall shopping experience, there is a need for an intelligent virtual try-on solution that leverages augmented reality, machine learning-based size prediction, and real-time user personalization. By integrating computer vision and recommendation models, the solution can analyze a customer’s body measurements, facial features, and personal preferences to offer a highly accurate visualization of the product in real time. This will not only allow users to make informed purchasing decisions but also enable retailers to optimize inventory management, minimize return-related losses, and contribute to a more sustainable e-commerce ecosystem.",
   
    },
  },
  {
    id: 8,
    title: "Problem Statement 8",
    domain: " @Social Impact @ Artificial Intelligence & Machine Learning",
    details: {
      background:
        "Discrimination and offensive activities on social media have become widespread, affecting individuals based on their race, gender, religion, and other social identities. Hate speech, cyberbullying, misinformation, and online harassment have escalated, creating a toxic digital environment that promotes division, exclusion, and psychological harm. Despite content moderation efforts, harmful activities continue to thrive due to the vast scale of social media and the difficulty of real-time monitoring. In professional settings, biased hiring practices and workplace discrimination prevent equal access to opportunities, while online platforms often serve as breeding grounds for discriminatory content, harassment, and exclusionary behaviors. The lack of effective monitoring, reporting mechanisms, and awareness further worsens the issue, making it challenging to ensure a safe and inclusive digital space. To address these challenges, there is a growing need for a tech-driven solution that can detect, prevent, and raise awareness about offensive online activities. Leveraging AI, data analytics, and real-time monitoring, such a solution can identify hate speech, misinformation, and harassment, flag biased hiring practices, and promote positive engagement, ultimately fostering a more respectful and inclusive online community. ",
      statement:
        "Existing moderation tools on social media platforms struggle to accurately detect and mitigate offensive activities such as hate speech, cyberbullying, misinformation, and discriminatory content. The inability to effectively monitor and control such content leads to psychological harm, social division, and the spread of false narratives. To address this issue, a software solution leveraging AI, natural language processing, and real-time monitoring is required. This system will detect, flag, and report harmful content, analyze user interactions for patterns of toxicity, and provide automated interventions to promote safer online spaces. Additionally, the solution will include educational modules and reporting tools to empower users to take action against digital abuse, fostering a healthier and more inclusive digital environment. ",
        
    },
  },
  
];

const ProblemStatements = () => {
  const [selectedProblem, setSelectedProblem] = useState(null);

  return (
    <div className="min-h-screen font-[Ghr4] text-white p-20 " style={{backgroundColor: "#0681a3"}}>
      <h2 className="text-5xl text-white text-center">Problem Statements</h2>
      <p className="text-center text-2xl text-white mt-2">
        Check Out The Detailed Problem Statements <a href="https://drive.google.com/file/d/1WvTnJgr6z7ehv_pzBJRbrsCANZiiw-O1/view?usp=sharing" target="blank"><span className="underline">Here <i class="ri-external-link-line "></i></span></a>
      </p>
      <div className="grid md:grid-cols-3 p-14 gap-6 mt-8">
        {problems.map((problem) => (
          <div
            key={problem.id}
            className="bg-gray-900 p-4 rounded-lg cursor-pointer"
            onClick={() => setSelectedProblem(problem)}
          >
            <h3 className="text-center mt-3 text-2xl">{problem.title}</h3>
            <p className="text-center text-sm text-gray-300">ID: {problem.id}</p>
            <p className="text-sm text-gray-400">{problem.domain}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProblem && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center  p-20 z-20 overflow-y-auto">
          <div className="bg-gray-900 p-6 mt-[15rem] rounded-lg max-w-2xl w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setSelectedProblem(null)}
            >
              ✖
            </button>
            <h3 className="text-xl font-bold bg-purple-600 px-4 py-1 inline-block rounded-md">
              {selectedProblem.title}
            </h3>
            <p className="mt-2 text-purple-400">Domain: {selectedProblem.domain}</p>
            <div className="mt-4 bg-gray-800 p-4 rounded-lg">
              <div className="mb-2">
                <strong>Background:</strong> {selectedProblem.details.background}
              </div>
              <div className="mb-2">
                <strong>Problem Statement:</strong> {selectedProblem.details.statement}
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemStatements;
