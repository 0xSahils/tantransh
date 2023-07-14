import React from 'react';
import { motion } from "framer-motion";
const problemStatements = [
  {
    id: 1,
    title: 'Problem Statement 1',
    prizes: [
      {
        id: 1,
        name: 'Prize 1',
        description: 'Description of Prize 1',
      },
    ],
  },
  {
    id: 2,
    title: 'Problem Statement 2',
    prizes: [
      {
        id: 3,
        name: 'Prize 2',
        description: 'Description of Prize 2',
      },
     
    ],
  },
  {
    id: 3,
    title: 'Problem Statement 3',
    prizes: [
      {
        id: 5,
        name: 'Prize 3',
        description: 'Description of Prize 3',
      },
    ],
  },
];

const AwardsPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container px-6 py-8 mx-auto">
        <motion.h1 className="mb-10 text-4xl font-bold text-accent">Awards</motion.h1>
        {problemStatements.map((problem) => (
          <div key={problem.id} className="mb-8">
            <h2 className="mb-4 text-xl font-bold">{problem.title}</h2>
            <ul>
              {problem.prizes.map((prize) => (
                <li key={prize.id} className="mb-2">
                  <h3 className="text-lg font-semibold">{prize.name}</h3>
                  <p>{prize.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsPage;
