import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Muhammad Randy</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portofolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="button n-button">Contact us</button>
      </div>
    </div>
  );
};

export default Navbar;
