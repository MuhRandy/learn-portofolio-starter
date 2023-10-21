import "./Intro.css";
import Github from "../../assets/img/github.png";
import LinkedIn from "../../assets/img/linkedin.png";
import Instagram from "../../assets/img/instagram.png";
import Vector1 from "../../assets/img/vector1.png";
import Vector2 from "../../assets/img/vector2.png";
import Boy from "../../assets/img/Boy.png";
import Thumbup from "../../assets/img/Thumbup.png";
import Crown from "../../assets/img/Crown.png";
import GlassesImoji from "../../assets/img/GlassesImoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Muhammad Randy</span>
          <span>
            A passionate front end web developer. I am a beginner in the front
            end web developer and still worked with a varied web developer
            framework like tailwind and react js.
          </span>
        </div>

        <button className="button i-button">Hire Me!</button>

        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={GlassesImoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
        >
          <FloatingDiv image={Crown} text1={"Web"} text2={"Developer"} />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0" }}
          transition={transition}
        >
          <FloatingDiv image={Thumbup} text1={"Best Design"} text2={"Award"} />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
