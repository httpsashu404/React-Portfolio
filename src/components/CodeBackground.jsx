import { useEffect, useRef } from "react";

const CodeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;
    const setSize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    setSize();
    window.addEventListener("resize", setSize);

    // Coding words pool
    const words = [
      "const", "let", "var", "function", "return",
      "=>", "async", "await", "<div>", "{ }",
      "map()", "useEffect", "useState", "props",
      "class", "export", "import", "npm", "node",
      "React", "Tailwind", "API", "JSON"
    ];

    const particles = [];

    const createParticle = () => {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        speedY: 0.3 + Math.random() * 0.7,
        speedX: (Math.random() - 0.5) * 0.5,
        text: words[Math.floor(Math.random() * words.length)],
        size: 14 + Math.random() * 10,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`,
        opacity: 0.1 + Math.random() * 0.1
      };
    };

    // initial particles
    for (let i = 0; i < 120; i++) {
      particles.push(createParticle());
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.font = `${p.size}px monospace`;

        // glow effect
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;

        ctx.fillText(p.text, p.x, p.y);

        // movement
        p.y += p.speedY;
        p.x += p.speedX;

        // reset when out of screen
        if (p.y > height) {
          p.y = 0;
          p.x = Math.random() * width;
        }
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default CodeBackground;