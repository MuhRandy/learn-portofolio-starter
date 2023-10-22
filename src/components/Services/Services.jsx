import "./Services.css";
import HeartEmoji from "../../assets/img/HeartEmoji.png";
import Glasses from "../../assets/img/Glasses.png";
import Humble from "../../assets/img/Humble.png";
import Card from "../Card/Card";
import Resume from "./Muhammad Randy.pdf";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 1, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br />
          Quaerat nulla totam, beatae ratione quam soluta error? Nihil, harum?
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>

        {/* second card */}
        <motion.div
          initial={{ left: "-14rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, Javascript, React"}
          />
        </motion.div>

        {/* third card */}
        <motion.div
          initial={{ left: "24rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Lorem ipsum dolor sit."}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
