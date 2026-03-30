import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.png";

const About = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Ashutosh Kumar
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#00ff88] leading-tight">
            <ReactTypingEffect
              text={[
                "Freelancer Developer",
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
          {/* About Me Paragraph */}
          <p className="text-left sm:text-lg md:text-lg text-justify text-gray-400 mr-5 mt-8 leading-relaxed">
            I'm Ashutosh Kumar from Bihar. As a passionate MERN Developer, I
            specialize in building dynamic and scalable web applications. My
            goal is to deliver efficient, high-quality website and impactful
            digital experiences that meet users’ needs.
          </p>
          {/* Resume Button */}
          <div className="flex flex-wrap items-center justify-between mb-2">
            <a
              href="https://drive.google.com/file/d/1yCQXYo6Vu_JHCHCimqtcf4rIoMNGjEXx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-black py-2 px-6 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "#00ff88",
                boxShadow: "#00ff8866",
              }}
            >
              Resume
            </a>
            <div
              rel="noopener noreferrer"
              className="outline-btn btn text-black py-2 px-6 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "#00ff88",
                boxShadow: "#00ff8866",
              }}
            >
              {[{ name: "Contact", id: "contact" }].map((item, index) => (
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
