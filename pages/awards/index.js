import React from "react";
// import Avatar from "../components/Avatar";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const problemStatements = [
  {
    id: 1,
    title: "Problem Statement 1",
    prizes: [
      {
        id: 1,
        name: "Prize 1",
        description: "Description of Prize 1",
      },
    ],
  },
  {
    id: 2,
    title: "Problem Statement 2",
    prizes: [
      {
        id: 3,
        name: "Prize 2",
        description: "Description of Prize 2",
      },
    ],
  },
  {
    id: 3,
    title: "Problem Statement 3",
    prizes: [
      {
        id: 5,
        name: "Prize 3",
        description: "Description of Prize 3",
      },
    ],
  },
];

const Awards = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container px-6 py-8 mx-auto">
        <motion.h1
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mb-10 text-4xl font-bold text-accent"
        >
          Awards
        </motion.h1>
        <div className="flex">
          <div className="w-3/4">
            {problemStatements.map((problem) => (
              <motion.div
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                key={problem.id}
                className="mb-8"
              >
                <h2 className="mb-4 text-xl font-bold">{problem.title}</h2>
                <ul>
                  {problem.prizes.map((prize) => (
                    <li key={prize.id} className="mb-2">
                      <h3 className="text-lg font-semibold">{prize.name}</h3>
                      <p>{prize.description}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="w-1/4">
            <motion.div
              whileHover={{ backgroundColor: "#DB2777", color: "#FFFFFF", scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-6 transition rounded-lg shadow-md cursor-pointer duration- "
            >
              <motion.h3
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4 text-xl font-bold transform hover:text-black"
              >
                Perks
              </motion.h3>
              <ul>
                <li className="mb-2">Perk 1</li>
                <li className="mb-2">Perk 2</li>
                <li className="mb-2">Perk 3</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <Avatar /> */}
    </div>
  );
};

export default Awards;

