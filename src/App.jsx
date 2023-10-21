import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portofolio from "./components/Portofolio/Portofolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="App" style={{
      background: darkMode? 'black': '',
      color: darkMode? 'white': ''
    }}>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portofolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
