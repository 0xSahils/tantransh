// next head
import Head from "next/head";

// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-primary/60">
      <Head>
        <title>Tantransh24</title>
        {/* <link rel="icon" href="/logo.png" /> */}
        <link href="/tanlogo.png" rel="icon" type="image/x-icon" />
        <style>
          {`
            ::-webkit-scrollbar {
              width: 8px;
            }

            ::-webkit-scrollbar-thumb {
              background-color: var(--color-accent);
              border-radius: 4px;
            }

            ::-webkit-scrollbar-track {
              background-color: var(--color-primary);
            }

            ::-webkit-scrollbar-thumb:hover {
              background-color: var(--color-accent-hover);
            }
          `}
        </style>
      </Head>
      {/* text */}
      <div className="w-full h-screen bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container flex flex-col justify-center h-full mx-auto text-center xl:pt-40 xl:text-left">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="h1"
          >
            Tantransh24
            <br />
            <span className="text-4xl"> presented by</span>{" "}
            <span className="text-accent ">Kriti Society</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="max-w-sm mx-auto mb-10 xl:max-w-xl xl:mx-0 xl:mb-16 text-lg"
          >
            Experience the excitement at tantransh fest, where fun meets
            technology <br className="block md:hidden" />
            <span className="text-xl text-white font-semibold">
              {" "}
              on 15-16 April,2024
            </span>
          </motion.p>
          {/* btn */}
          <div className="relative flex justify-center xl:hidden">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="absolute w-full h-full bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat mix-blend-color-dodge translate-z-0"></div>
        {/* Particles */}
        <ParticlesContainer />
        {/* Avatar image*/}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
