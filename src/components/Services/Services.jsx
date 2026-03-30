import { useState, useEffect } from "react";
import { services } from "../../constants";

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  // Detect number of visible slides based on screen width
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width >= 1024)
        setVisibleCount(4); // lg
      else if (width >= 768)
        setVisibleCount(3); // md
      else if (width >= 640)
        setVisibleCount(2); // sm
      else setVisibleCount(1); // xs
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === services.length - visibleCount ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [visibleCount]);

  // Calculate total dots based on visible items
  const totalDots = Math.max(services.length - visibleCount + 1, 1);

  return (
    <section className="py-20" id="services">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">SERVICES</h2>
        <div className="w-32 h-1 bg-[#00ff55] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I provide a wide range of web development services to help businesses
          grow online.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${current * (100 / visibleCount)}%)`,
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
            >
              <div className="bg-transparent border-1 border-[#00ff88] p-8 rounded-xl shadow-md flex flex-col items-center hover:shadow-green-500/50 hover:-translate-y-2 transition-transform duration-300">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-xl text-[#00ff88] font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-[00ff8866] text-left">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === current ? "bg-[#00ff88]" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
