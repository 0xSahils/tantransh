/* eslint-disable react/jsx-key */
import React, { useState } from "react";

//icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiDiscover,
} from "react-icons/si";

// about data

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Data Structures and ALgorithms",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "AI/ML Model Making",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "Awards",
    info: [
      {
        title: "Lorem ipsum dolor sit amet.",
        stage: "$$$$$",
      },
      {
        title: "Lorem ipsum dolor sit amet.",
        stage: "$$$$$",
      },
    ],
  },

  {
    title: "credentials",
    info: [
      {
        title: "Whats the idea?",
        stage: "short answer",
      },
      {
        title: "Is it institute verified ?",
        stage: "yes",
      },
      {
        title: "Possible arrangements ?",
        stage: "feverything ",
      },
    ],
  },
];

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counters

import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  // console.log(index);
  return (
    <div className="h-[180vh]  md:h-full py-32 text-center bg-primary/30 xl:text-left">
      <Circles />
      {/*Avatar img*/}
      <div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </div>
      <div className="container flex flex-col items-center h-full mx-auto xl:flex-row gap-x-6">
        {/*text*/}
        <div className="flex flex-col justify-start flex-1">
          <h2 className="h2">
            Trust me, <span className="text-accent">it works</span> on my
            machine!
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl;px-0">
            HackXLR8 is a National level hackathon,conducted by Robotics CLub of
            IET Lucknow in collaboration Incubation Center and E-Cell,IET
            Lucknow. With a prize pool of 1.05 Lakh, you will get one to
            experiance the most engaging and fun coding ride. <br />
            <button className="px-4 py-2 mt-3 text-white transition border rounded-lg shadow-md cursor-pointer bg-accent border-accent hover:bg-primary hover:border-accent hover:text-white">
              <a
                href="https://tailwindcss.com/docs/box-decoration-break#basic-usage"
                target="_blank"
              >
                {" "}
                Register Now!
              </a>
            </button>
          </p>
          {/*counters*/}
          <div
          // variants={fadeIn("right", 0.6)}
          // initial="hidden"
          // whileInView={"show"}
          // viewport={{ once: false, amount: 0.7 }}
          // className="hidden mx-auto mb-8 md:flex md:max-w-xl xl:max-w-none xl:mx-0"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience*/}
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl text-accent">
                  <CountUp start={0} end={800} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  No of Participating Students
                </div>
              </div> */}
              {/*clients*/}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl text-accent">
                  <CountUp start={0} end={30} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Teams
                </div>
              </div>
              {/*projects*/}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl text-accent">
                  <CountUp start={0} end={100} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Participants
                </div>
              </div>
              {/*awards*/}
              <div className="relative flex-1">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl text-accent">
                  <CountUp start={0} end={100} duration={5} /> K
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Prize Pool
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*info*/}
        {/* <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        > */}
        <div>
          <div className="flex mx-auto mb-4 gap-x-4 xl:gap-x-8 xl:mx-0">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={` ${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent  after:transition-all after:duration-300"
                  }
                  cursor-pointer capitalize xl;text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-center py-2 xl:py-6 gap-y-2 xl:gap-y-4 xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex flex-col items-center flex-1 md:flex-row max-w-max gap-x-2 text-white/60"
                >
                  {/*title*/}
                  <div className="mb-2 font-light md:mb:0">{item.title}</div>
                  <div className="hidden md:flex"></div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/*icons*/}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          {/* </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
