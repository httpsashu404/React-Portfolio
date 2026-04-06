import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [hovered, setHovered] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRefs = useRef({});

  // scroll detect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = Object.keys(navRefs.current);

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const section = document.getElementById(id);

        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // smooth scroll
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Feedback" },
  ];

  const current = hovered || activeSection;
  const currentRef = navRefs.current[current];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[1vw] lg:px-[10vw] ${
        isScrolled
          ? "bg-black bg-opacity-10 backdrop-blur-md shadow-md"
          : "bg-black"
      }`}
    >
      <div className="text-white py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <div className="text-lg font-semibold cursor-pointer">
            <span className="text-[#00ff88]">
              <h4>Httpsashu</h4>
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="relative hidden md:flex">
          <ul className="flex space-x-8 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                ref={(el) => (navRefs.current[item.id] = el)}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                className={`cursor-pointer text-[#00ff88] hover:text-[#ff2255] ${
                  activeSection === item.id ? "text-[#ff2255]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* 🔥 Sliding Underline */}
          <span
            className="absolute bottom-0 h-[2px] bg-[#00ff88] transition-all duration-300"
            style={{
              width: currentRef?.offsetWidth || 0,
              left: currentRef?.offsetLeft || 0,
            }}
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#ff2255] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#00ff88] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-80 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer text-[#00ff88] hover:text-[#ff2255] ${
                  activeSection === item.id ? "text-[#ff2255]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;