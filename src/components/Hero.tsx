"use client";

import { useScroll } from "@/contexts/ScrollContext";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const { heroRef } = useScroll() ?? {
    heroRef: null,
    scrollToHero: () => {},
    scrollToAbout: () => {},
  };

  return (
    <section
      ref={heroRef}
      className="flex justify-center items-center min-h-screen w-full max-w-screen-2xl bg-black text-white"
    >
      <motion.div
        className={`flex flex-col items-center`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="font-albert-sans text-center my-2 px-6 text-sm md:text-base"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          WE EMPOWER BUSINESSES THROUGH CUSTOM MOBILE
          <br className="hidden md:block" />
          APPLICATIONS, WEB PLATFORMS, AND STRATEGIC IT
          <br className="hidden md:block" />
          CONSULTANCY SERVICES.
        </motion.p>
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="w-96 lg:w-108 h-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <source src="/videos/logo.mp4" type="video/mp4" />
        </motion.video>
        <motion.h1
          className="font-albert-sans font-semibold text-center text-6xl lg:text-7xl xl:text-8xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          UNIT VENTURES
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default Hero;
