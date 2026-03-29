// src/components/StarBackground.jsx
import Star from "./Star";

const StarBackground = ({ count = 100 }) => {
  const stars = Array.from({ length: count }, () => ({
    size: Math.random() * 2 + 1,      // 1px to 3px
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,         // 0s to 5s
  }));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {stars.map((star, index) => (
        <Star key={index} {...star} />
      ))}
    </div>
  );
};

export default StarBackground;
