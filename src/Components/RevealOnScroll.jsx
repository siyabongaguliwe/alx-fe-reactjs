// RevealOnScroll.jsx
import React, { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        if (top < window.innerHeight) {
          ref.current.classList.add("visible");
        } else {
          ref.current.classList.remove("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className="reveal-on-scroll">
      {children}
    </div>
  );
};
