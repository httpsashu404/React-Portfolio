import { useRef, useState, useEffect } from "react";
import { projects } from "../../constants";

const Work = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // ✅ Detect screen size and set slides per view
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1280)
        setSlidesPerView(4); // xl and up
      else if (window.innerWidth >= 768)
        setSlidesPerView(2); // md - lg
      else setSlidesPerView(1); // mobile
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  // ✅ Track scroll position for active dot
  useEffect(() => {
    const slider = sliderRef.current;
    const handleScroll = () => {
      const index = Math.round(
        slider.scrollLeft /
          (slider.scrollWidth / Math.ceil(projects.length / slidesPerView)),
      );
      setCurrentIndex(index);
    };
    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, [slidesPerView]);

  // ✅ Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      const slider = sliderRef.current;
      const totalDots = Math.ceil(projects.length / slidesPerView);
      const nextIndex = currentIndex === totalDots - 1 ? 0 : currentIndex + 1;
      const scrollWidth = slider.scrollWidth / totalDots;
      slider.scrollTo({
        left: nextIndex * scrollWidth,
        behavior: "smooth",
      });
      setCurrentIndex(nextIndex);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, slidesPerView]);

  // ✅ Calculate number of "dot pages"
  const totalDots = Math.ceil(projects.length / slidesPerView);

  return (
    <section
      id="work"
      className="py-24 pb-20 px-[10vw] md:px-[5vw] lg:px-[2vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-[#00ff88] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid (Slider) */}
      <div
        ref={sliderRef}
        className="carousel-container scroll-smooth no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory py-4"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="snap-start flex-shrink-0 w-full sm:w-full md:w-1/2 xl:w-1/4 max-w-[400px] border-1 border-[#00ff88] bg-tranparent rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-green-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4 transition-shadow duration-200">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-30 object-cover rounded-xl border-1 border-[#00ff88]"
              />
            </div>
            <div className="px-3">
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <div className="mb-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-gray-400 px-1">
                    {tag} <span className="text-[#ff2255]">|</span>
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-between mb-2">
                <a
                  href={project.webapp}
                  target="__blank"
                  className="inline-block px-3 py-1 text-md font-medium text-black rounded-md shadow-md transition-all duration-300"
                  style={{
                    backgroundColor: "#00ff88",
                    margin: "0.25rem",
                    padding: "0.25rem 0.75rem",
                  }}
                >
                  Live
                </a>

                <a
                  href={project.github}
                  target="__blank"
                  className="inline-block px-3 py-1 text-md font-medium text-black rounded-md shadow-md transition-all duration-300"
                  style={{
                    backgroundColor: "#ffc400",
                    margin: "0.25rem",
                    padding: "0.25rem 0.75rem",
                  }}
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Responsive Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalDots }).map((_, idx) => (
          <button
            key={idx}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-[#00ff88] scale-110" : "bg-gray-500"
            }`}
            onClick={() => {
              const slider = sliderRef.current;
              const scrollWidth = slider.scrollWidth / totalDots;
              slider.scrollTo({
                left: idx * scrollWidth,
                behavior: "smooth",
              });
            }}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Work;
