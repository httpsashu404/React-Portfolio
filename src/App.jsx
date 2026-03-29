import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./ScrollToTop";
import StarBackground from "./components/StarBackground";

const App = () => {
  return (
    <div className="bg-[#050414]">
      <div className="relative">
        <StarBackground count={150} /> {/* 150 stars */}
      </div>
      <ScrollToTopButton />
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
