import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // show button after scrolling down 200px (adjust if needed)
      setVisible(window.pageYOffset > 200);
    };

    // check initial
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      tabIndex={0}
      className={
        // fixed to right, vertically centered, no margin (m-0), and nice styling
        `fixed right-0 top-1/2 transform -translate-y-1/2 m-0 z-50
         p-3 rounded-l-md shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2
         transition-transform duration-200 ease-in-out
         ${
           visible
             ? "translate-x-0 opacity-100"
             : "translate-x-full opacity-0 pointer-events-none"
         }`
      }
    >
      {/* Up arrow icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-dark bg-[#00ff88] h-10 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
