import  { useState } from "react";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
  FaRegCommentDots,
} from "react-icons/fa";
import { HiX } from "react-icons/hi";

const FloatingMenu = () => {
  const [open, setOpen] = useState(false);

  const whatsappLink = "https://wa.me/917763992074?text=Hello Ashutosh";
  const linkedinLink = "https://linkedin.com/in/ashutosh-kumar-0b03472ba/";
  const githubLink = "https://github.com/httpsashu404";

  return (
    <div className="fixed bottom-2 right-2 flex flex-col items-center z-50">
      {/* Icons */}
      <div
        className={`flex flex-col items-center space-y-2 mb-2 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        {/* WhatsApp */}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-white bg-green-500 shadow-lg hover:scale-110 transition duration-300">
            <FaWhatsapp className="text-white text-lg" />
          </div>
        </a>

        {/* LinkedIn */}
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-white bg-blue-600 shadow-lg hover:scale-110 transition duration-300">
            <FaLinkedinIn className="text-white text-lg" />
          </div>
        </a>
        {/* GitHub */}
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-white bg-black shadow-lg hover:scale-110 transition duration-300">
            <FaGithub className="text-white text-lg" />
          </div>
        </a>
      </div>

      {/* Toggle Button with Tooltip */}
      <div className="relative group">
        {/* Tooltip */}
        <span className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
          Contact Us
        </span>

        <button
          onClick={() => setOpen(!open)}
          className="w-11 h-11 sm:w-12 sm:h-12 bg-[#00ff88] border-white border-2 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition duration-300"
        >
          {open ? (
            <HiX className="text-black text-xl" />
          ) : (
            <FaRegCommentDots className="text-black text-xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default FloatingMenu;
