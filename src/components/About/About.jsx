import { useState } from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/photo.png";

const About = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeClick = () => {
    setShowPrompt(true);
  };

  const handlePasswordSubmit = () => {
    if (inputPassword === import.meta.env.VITE_RESUME_PASSWORD) {
      window.open(
        "https://drive.google.com/file/d/1yCQXYo6Vu_JHCHCimqtcf4rIoMNGjEXx/view?usp=sharing",
        "_blank",
      );
      setShowPrompt(false);
      setInputPassword("");
    } else {
      alert("Wrong Password ❌");
    }
  };

  return (
    <section
      id="about"
      className="bg-transparent py-4 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Ashutosh Kumar
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#00ff88] leading-tight">
            <ReactTypingEffect
              text={[
                "Freelance Developer",
                "MERN Developer",
                "Fullstack Developer",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#ff2255]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-left sm:text-lg md:text-lg text-justify text-gray-400 mr-5 leading-relaxed">
            I'm specializing in building modern,
            scalable, and high-performance web applications. I create clean,
            responsive, and user-friendly websites using the latest
            technologies, including AI-based solutions. I focus on quality code,
            smooth user experience, and delivering reliable digital products for
            clients and businesses.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-between mb-2">
            {/* Resume Button */}
            <button
              onClick={handleResumeClick}
              className="inline-block text-black py-2 px-6 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "#00ff88",
                boxShadow: "#00ff8866",
              }}
            >
              Resume
            </button>

            {/* Feedback Button */}
            <div
              className="outline-btn btn text-black py-2 px-6 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "#00ff88",
                boxShadow: "#00ff8866",
              }}
            >
              {[{ name: "Feedback", id: "contact" }].map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleScroll(item.id)}
                  className="text-lg sm:text-base font-bold"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Password Modal */}
          {showPrompt && (
            <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
              {" "}
              <div className="bg-white p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-3">Enter Password 🔒</h3>
                <input
                  type="password"
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  className="border p-2 rounded w-full mb-3"
                  placeholder="Enter password"
                  required
                />
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={handlePasswordSubmit}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => setShowPrompt(false)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-[#00ff8866] rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Ashutosh Kumar"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_15px_#00ff88]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
