import React, { useState } from "react";

const problems = [
  {
    id: 1,
    title: "Problem Statement 1",
    domain: "Coming Soon.....",
    details: {
      background:
        "Coming Soon.....",
      statement:
        "Coming Soon.....",
        KeyFeatures:
        "Coming Soon.....",
    },
  },
  {
    id: 2,
    title: "Problem Statement 2",
    domain: "Coming Soon.....",
    details: {
      background:
        "Coming Soon.....",
      statement:
        "Coming Soon.....",
        KeyFeatures:
        "Coming Soon.....",
    },
  },
  {
    id: 3,
    title: "Problem Statement 3",
    domain: "Coming Soon.....",
    details: {
      background:
        "Coming Soon.....",
      statement:
        "Coming Soon.....",
        KeyFeatures:
        "Coming Soon.....",
    },
  },
  {
    id: 3,
    title: "Problem Statement 4",
    domain: "Coming Soon.....",
    details: {
      background:
        "Coming Soon.....",
      statement:
        "Coming Soon.....",
        KeyFeatures:
        "Coming Soon.....",
    },
  },
  {
    id: 5,
    title: "Problem Statement 5",
    domain: "Coming Soon.....",
    details: {
      background:
        "Coming Soon.....",
      statement:
        "Coming Soon.....",
        KeyFeatures:
        "Coming Soon.....",
    },
  },
  {
    id: 6,
    title: "Problem Statement 6",
    domain: "Coming Soon.....",
    details: {
      background:
        "Coming Soon.....",
      statement:
        "Coming Soon.....",
        KeyFeatures:
        "Coming Soon.....",
    },
  },
  {
    id: 7,
    title: "Problem Statement 7",
    domain: "Coming Soon.....",
    details: {
      background:
        "Coming Soon.....",
      statement:
        "Coming Soon.....",
        KeyFeatures:
        "Coming Soon.....",
    },
  },
  {
    id: 8,
    title: "Problem Statement 8",
    domain: "Coming Soon.....",
    details: {
      background:
        "Coming Soon.....",
      statement:
        "Coming Soon.....",
        KeyFeatures:
        "Coming Soon.....",
    },
  },
  {
    id: 9,
    title: "Problem Statement 9",
    domain: "Coming Soon.....",
    details: {
      background:
        "Coming Soon.....",
      statement:
        "Coming Soon.....",
      KeyFeatures:
        "Coming Soon.....",
    },
  },
  {
    id: 10,
    title: "Problem Statement 10",
    domain: "Coming Soon.....",
    details: {
      background:
        "Coming Soon.....",
      statement:
        "Coming Soon.....",
      KeyFeatures:
        "Coming Soon.....",
    },
  },

  // Add more problem objects here...
];

const ProblemStatements = () => {
  const [selectedProblem, setSelectedProblem] = useState(null);

  return (
    <div className="min-h-screen font-[Ghr4] text-white p-10" style={{backgroundColor: "#0681a3"}}>
      <h2 className="text-5xl text-white text-center">Problem Statements</h2>
      <p className="text-center text-2xl text-white mt-2">
        Check Out The Detailed Problem Statements <a href="" target="blank"><span className="underline">Here <i class="ri-external-link-line "></i></span></a>
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
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-5">
          <div className="bg-gray-900 p-6 rounded-lg max-w-2xl w-full relative">
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
              <div>
                <strong>Key Features:</strong> {selectedProblem.details.KeyFeatures}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemStatements;
