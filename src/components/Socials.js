import { motion } from "framer-motion";

function Socials() {
  const drop = {
    hidden: { opacity: 0, y: -100 },

    visible: (i) => {
      const delay = i;
      return {
        opacity: 1,
        y: 0,

        transition: {
          type: "spring",
          damping: 27,
          stiffness: 500,
          delay,
        },
      };
    },
  };

  return (
    <ul className="socials">
      <motion.li
        initial={"hidden"}
        animate={"visible"}
        variants={drop}
        custom={3}
      >
        <a href="https://www.linkedin.com/in/benoit-desnos-727ab6158/">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </motion.li>
      <motion.li
        initial={"hidden"}
        animate={"visible"}
        variants={drop}
        custom={3.2}
      >
        <a href="https://github.com/BenoitDesnos">
          <i className="fa-brands fa-github"></i>
        </a>
      </motion.li>
      <motion.li
        initial={"hidden"}
        animate={"visible"}
        variants={drop}
        custom={3.4}
      >
        <a href="../assets/pdf/CV-BD-2022.pdf">
          <i className="fa-solid fa-file-lines"></i>
        </a>
      </motion.li>
    </ul>
  );
}

export default Socials;
