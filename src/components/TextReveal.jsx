import { motion } from "framer-motion";

/* animation credit to https://brad-carter.medium.com/how-to-animate-a-text-reveal-effect-in-react-with-framer-motion-ae8ddd296f0d */
const line1 = "Hello, my name is";
const line2 = "Sophie Rong";

const sentence = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { delay: 0, staggerChildren: 0.08 } },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const TextReveal = () => (
  <motion.h1 variants={sentence} initial="hidden" animate="visible">
    <div className="line-1">
      {line1.split("").map((char, index) => {
        return (
          <motion.span key={char + "-" + index} variants={letter}>
            {char}
          </motion.span>
        );
      })}
      <br />
      <b className="line-2">
        <motion.div>
          {line2.split("").map((char, index) => {
            return (
              <motion.span
                key={char + "-" + index}
                variants={letter}
                exit={{
                  transition: {
                    delay: 0.3,
                  },
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </motion.div>
      </b>
    </div>
  </motion.h1>
);

export default TextReveal;
