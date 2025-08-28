import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Slide from "./slide"; // ✅ make sure it's Slide.tsx not Silder.tsx


const images = [
  { src: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Dog" },
  { src:"https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Nature" },
  { src: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Mountains" },
];

// Clone first slide at the end for infinite effect
const slides = [...images, images[0]];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  // Auto-slide every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Reset instantly to first when reaching cloned slide
  useEffect(() => {
    if (currentIndex === slides.length - 1) {
      setTimeout(() => {
        setTransition(false); // disable animation for jump
        setCurrentIndex(0);
      }, 1000); // matches transition duration

      setTimeout(() => {
        setTransition(true); // re-enable
      }, 1000);
    }
  }, [currentIndex]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: `${slides.length * 100}%`,
          transform: `translateX(-${currentIndex * 100}%)`, // ✅ FIXED
          transition: transition ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 100%",
              height: "100vh",
            }}
          >
            <Slide image={slide.src} title={slide.title} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ImageSlider;
