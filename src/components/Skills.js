import aboutData from "../data/about.json";
import { /* useAnimation */ motion } from "framer-motion";
/* import { useInView } from "react-intersection-observer"; */

function Skills() {
  const visible = {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  };

  const right = {
    hidden: { opacity: 0, x: 100 },
    visible,
  };
  const left = {
    hidden: { opacity: 0, x: -100 },
    visible,
  };

  return (
    <section className="about">
      <ul id="1">
        {aboutData.map((element, index) => (
          <motion.li
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={index % 2 ? left : right}
            key={element.header}
            className="about__item"
          >
            <img
              src={element.logo}
              alt="decor d'item"
              className="about__item__logo"
            />
            <h3 className="about__item__header">{element.header}</h3>
            <p className="about__item__description">{element.description}</p>
            {element.images &&
              element.images.map((image) => (
                <img
                  key={image}
                  src={image}
                  className="about__item__images"
                  alt="compétences"
                />
              ))}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
