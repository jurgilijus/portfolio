import React, { useState, useEffect } from "react";
import { workItems } from "./WorkItems";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WorkPopupModal from "../Work/WorkPopup/WorkPopupModal";

// CSS
import "./Work.css";

const showVariant = {
  initial: { opacity: 1, transition: { duration: 1 } },
  animate: { opacity: 0 },
};

function Work() {
  const control = useAnimation();
  const [ref, inView] = useInView(false);

  useEffect(() => {
    inView ? control.start("initial") : control.start("animate");
  }, [control, inView]);

  const [workModal, setWorkModal] = useState(false);
  const [workData, setWorkData] = useState([]);
  const getWorkData = (
    image,
    iconI,
    iconII,
    hrefDemo,
    hrefCode,
    description
  ) => {
    let tempData = [image, iconI, iconII, hrefDemo, hrefCode, description];
    setWorkData((item) => [1, ...tempData]);

    return setWorkModal(true);
  };

  return (
    <section name="work" className="work">
      <h4>Work</h4>
      <p className="work-p">Check out some of my recent work</p>
      <motion.div
        ref={ref}
        variants={showVariant}
        initial="hidden"
        animate={control}
        className="work-items"
      >
        {workItems.map((workItem) => (
          <div
            key={workItem.id}
            className="work-conteiner"
            onClick={() =>
              getWorkData(
                workItem.image,
                workItem.iconI,
                workItem.iconII,
                workItem.hrefDemo,
                workItem.hrefCode,
                workItem.description
              )
            }
          >
            <img
              className="work-image"
              src={workItem.image}
              alt={workItem.alt}
              loading="lazy"
            />
            <div className="overlay">
              <div className="text">
                <span>{workItem.title}</span>
                <div className="work-btn-location">
                  <a href={workItem.hrefDemo} target="_blank" rel="noreferrer">
                    <button className="btn">Demo</button>
                  </a>
                  <a href={workItem.hrefCode} target="_blank" rel="noreferrer">
                    <button className="btn">Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        {workModal === true ? (
          <WorkPopupModal
            image={workData[1]}
            iconI={workData[2]}
            iconII={workData[3]}
            hrefDemo={workData[4]}
            hrefCode={workData[5]}
            description={workData[6]}
            hide={() => setWorkModal(false)}
          />
        ) : (
          ""
        )}
      </motion.div>
    </section>
  );
}

export default Work;
