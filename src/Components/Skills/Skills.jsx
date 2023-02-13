import React, { useEffect, useState } from "react";
import { skillsItems } from "./SkillsItems";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// CSS
import "./Skills.css";
import PopupModal from "./PopupModal/PopupModal";

const showVariant = {
  initial: { opacity: 1, transition: { duration: 1 } },
  animate: { opacity: 0 },
};

function Skills() {
  const control = useAnimation();
  const [ref, inView] = useInView(false);

  const [model, setModel] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (image, title, text) => {
    const tempData = [image, title, text];
    setTempData((item) => [1, ...tempData]);
    return setModel(true);
  };

  useEffect(() => {
    inView ? control.start("initial") : control.start("animate");
  }, [control, inView]);

  return (
    <section name="skills" className="skills">
      <h4>Skills</h4>
      <p>These are the technologies I'm working with right now</p>

      <motion.div
        ref={ref}
        variants={showVariant}
        initial="hidden"
        animate={control}
        className="skills-items"
      >
        {skillsItems.map((skillsItem) => (
          <div
            onClick={() =>
              getData(skillsItem.title, skillsItem.image, skillsItem.text)
            }
            key={skillsItem.id}
            className="skills-item"
          >
            <img
              src={skillsItem.image}
              alt={skillsItem.alt}
              className="skills-icon"
              loading="lazy"
            />
            <p className="skills-text">{skillsItem.title}</p>
          </div>
        ))}
        {model === true ? (
          <PopupModal
            title={tempData[1]}
            image={tempData[2]}
            text={tempData[3]}
            hide={() => setModel(false)}
          />
        ) : (
          ""
        )}
      </motion.div>
    </section>
  );
}

export default Skills;
