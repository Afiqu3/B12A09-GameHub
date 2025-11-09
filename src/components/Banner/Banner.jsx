import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import game1Img from "../../assets/game-1.jpg";
import game2Img from "../../assets/game-2.jpg";
import game3Img from "../../assets/game-3.webp";

const slides = [
  {
    id: 1,
    src: game1Img,
    title: "Explore Epic Adventures",
    subtitle: "Dive into immersive worlds and conquer every quest.",
    button: "Play Now",
  },
  {
    id: 2,
    src: game2Img,
    title: "Join the Battle Arena",
    subtitle: "Compete with the best players across the globe.",
    button: "Join Now",
  },
  {
    id: 3,
    src: game3Img,
    title: "Experience Next-Level Graphics",
    subtitle: "Feel the power of ultra-realistic gameplay.",
    button: "Discover More",
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  // const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-6xl lg:mx-auto w-full overflow-hidden text-white lg:my-15">
      <div className="absolute inset-0 bg-black/50"></div>
      <div
        className="relative flex flex-col items-center justify-center h-fit"
        // onMouseEnter={() => setPaused(true)}
        // onMouseLeave={() => setPaused(false)}
      >
        {/* Image Slides */}
        <div className="relative lg:w-300 w-150 h-fit lg:h-100 overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].id}
              className=""
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 1, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img
                src={slides[index].src}
                alt={slides[index].title}
                className="lg:w-300 w-150 h-fit lg:h-fit object-cover"
              />

              <div className="absolute inset-0 bg-black/50"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].id + "-text"}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-xl lg:text-5xl md:text-4xl font-extrabold mb-4 bg-linear-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
                {slides[index].title}
              </h1>
              <p className="text-base lg:text-xl mb-6 max-w-2xl mx-auto text-gray-200">
                {slides[index].subtitle}
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#9f62f2] text-white font-semibold rounded-lg shadow-md hover:bg-[#632ee3] transition"
              >
                {slides[index].button}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>


        <div className="absolute bottom-8 flex gap-3">
          {slides.map((_, i) => (
            <motion.div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-[#9f62f2]" : "bg-gray-400"
              }`}
              layoutId={i === index ? "indicator" : undefined}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
