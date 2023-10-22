import { Link } from "react-scroll";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Randy</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link spy={true} to="Home" activeClass="activeClass" smooth={true}>
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to="Portofolio" smooth={true}>
              <li>Portofolio</li>
            </Link>
            <Link spy={true} to="Testimonials" smooth={true}>
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button n-button">Contact us</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
