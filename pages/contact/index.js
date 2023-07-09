//components
import Circles from "/components/Circles";

//icon
import { BsArrowRight } from "react-icons/bs";

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container flex items-center justify-center h-full py-32 mx-auto text-center xl:text-left">
        {/* text& form */}
        <div className="flex flex-col w-full max-w-[700px] ">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-12 text-center h2"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.div>
          <form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col flex-1 w-full gap-6 mx-auto"
            action="https://formspree.io/f/xgejeyzp" method="POST"
          >
          {/* go to https://formspree.io/ and setup an account */}
             
            {/* input & group */}
            <div className="flex w-full gap-x-6">
              <input type="text" placeholder="name" className="input" name="Name" required />
              <input type="text" placeholder="email" className="input" name="Email"  required/>
            </div>
            <input type="text" placeholder="subject" className="input" name="Subject" required/>
            <textarea placeholder="message" className="textarea" name="Message" required></textarea>
            <button type="submit" className="border rounded-full btn border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
