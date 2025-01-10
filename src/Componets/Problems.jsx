
import '../Styles/Problem.css';
import { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const problemStatements = [
  {
    id: 'UHCK_AI001',
    title: 'AI Bot with Voice Assistant',
    description:
      'Develop an AI bot with a Voice assistant that listens to end-user questions/queries and replies back with a proper response...',
    organization: 'XR Couture',
    sector: 'Artificial Intelligence',
  },
  {
    id: 'UHCK_XR001',
    title: 'Kids Financial Literacy Metaverse Challenge',
    description:
      'A metaverse challenge to develop tools to teach kids about financial literacy in an engaging way...',
    organization: 'XR Couture',
    sector: 'Metaverse',
  },
  {
    id: 'UHCK_XR001',
    title: 'Kids Financial Literacy Metaverse Challenge',
    description:
      'A metaverse challenge to develop tools to teach kids about financial literacy in an engaging way...',
    organization: 'XR Couture',
    sector: 'Metaverse',
  },
  
  {
    id: 'UHCK_XR001',
    title: 'Kids Financial Literacy Metaverse Challenge',
    description:
      'A metaverse challenge to develop tools to teach kids about financial literacy in an engaging way...',
    organization: 'XR Couture',
    sector: 'Metaverse',
  },
  
  {
    id: 'UHCK_XR001',
    title: 'Kids Financial Literacy Metaverse Challenge',
    description:
      'A metaverse challenge to develop tools to teach kids about financial literacy in an engaging way...',
    organization: 'XR Couture',
    sector: 'Metaverse',
  },
  {
    id: 'UHCK_XR001',
    title: 'Kids Financial Literacy Metaverse Challenge',
    description:
      'A metaverse challenge to develop tools to teach kids about financial literacy in an engaging way...',
    organization: 'XR Couture',
    sector: 'Metaverse',
  },
  // Add more problem statements here...
];

const ProblemStatements = () => {
  const [selectedProblem, setSelectedProblem] = useState(null);

  const handleOpenModal = (problem) => {
    setSelectedProblem(problem);
  };

  const handleCloseModal = () => {
    setSelectedProblem(null);
  };

  return (

    <div className='mb-0 pt-20 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% '>
        <Navbar />
 
    <div className="problem-statements-container mb-20  ">
      <h1 className='text-black mb-10 text-5xl font-[Ghr4]'>Problem Statements</h1>
      <div className="problem-grid">
        {problemStatements.map((problem) => (
          <div
            key={problem.id}
            className="problem-card"
            onClick={() => handleOpenModal(problem)}
          >
            <div className="problem-title">{problem.title}</div>
            <div className="problem-id">{problem.id}</div>
          </div>
        ))}
      </div>

      {selectedProblem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              &times;
            </button>
            <h2 className='text-xl  text-[#f00]'>{selectedProblem.title}</h2>
            <p>
              <strong>Problem Statement ID:</strong> {selectedProblem.id}
            </p>
            <p>
              <strong>Name of Organization:</strong> {selectedProblem.organization}
            </p>
            <p>
              <strong>Sector / Domain:</strong> {selectedProblem.sector}
            </p>
            <p>
              <strong>Description:</strong> {selectedProblem.description}
            </p>
          </div>
        </div>
      )}
    </div>
    <div className="footer">
    <Footer/>
    </div>
    </div>
  );
};

export default ProblemStatements;
