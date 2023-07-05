//components
import TestimonialSlider from "../../components/TestimonialSlider";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="h-full py-32 text-center bg-primary/30">
      <div className="container flex flex-col justify-center h-full mx-auto">
        {/*title*/}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mb-8 h2 xl:mb-0"
        >
          Message From <span className="text-accent">Faculties.</span>
        </motion.h2>
        {/*slider*/}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
