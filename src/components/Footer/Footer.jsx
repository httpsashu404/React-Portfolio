import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#050414] bg-opacity-50 border-top text-white py-8">
      <div className="container mx-auto text-center">
        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center border-right space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" }, 
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#ff2255] text-[#00ff88] text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Copyright Text */}
        <p className="text-sm text-[#ffc400] mt-6">
          © 2025 Httpsashu404. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
