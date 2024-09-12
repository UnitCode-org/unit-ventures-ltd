"use client";

import { useScroll } from "@/contexts/ScrollContext";
import useHorizontalFadeAnimation from "@/hooks/useHorizontalFadeAnimation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const About: React.FC = () => {
  const { aboutRef } = useScroll() ?? {
    aboutRef: null,
    scrollToHero: () => {},
    scrollToAbout: () => {},
  };

  const fadeIn1 = useHorizontalFadeAnimation();
  const fadeIn2 = useHorizontalFadeAnimation();
  const fadeIn3 = useHorizontalFadeAnimation();

  return (
    <section
      ref={aboutRef}
      className="flex flex-col justify-center items-center min-h-screen w-full max-w-screen-2xl bg-black text-white mt-12"
    >
      {/* what we do */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full px-6 md:px-10">
        <div className="col-span-1 md:border-r border-neutral-500 flex justify-start">
          <h2 className="md:text-xl md:mt-1 mb-8">WHAT WE DO</h2>
        </div>
        <div className="col-span-2 pl-0 md:pl-8 mb-24 md:mb-48 flex flex-col items-center md:items-start">
          <h1 className="font-normal text-3xl md:text-4xl mb-4">
            We create{" "}
            <span className="bg-neutral-300 text-black italic pr-1.5 pt-0.5">
              custom software
            </span>{" "}
            and provide{" "}
            <span className="bg-neutral-300 text-black italic pr-1.5 py-0.5">
              IT&nbsp;consultancy
            </span>{" "}
            to help businesses grow through innovative tech solutions.
          </h1>
        </div>
      </div>

      {/* custom mobile application */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full px-6 md:px-10">
        <div className="col-span-1 md:border-r border-neutral-500 flex justify-start">
          <div className="flex flex-col-reverse md:flex-row items-start justify-between w-full mb-8 md:mb-auto">
            <h2 className="text-lg md:text-xl md:mt-1">
              CUSTOM <br />
              MOBILE APPLICATION
            </h2>
            <div className="flex flex-row items-center gap-x-1 mr-4">
              <h1 className="font-albert-sans font-normal md:text-2xl mb-4 md:mb-0">
                01
              </h1>
              <ArrowRight size={28} className="text-2xl hidden md:block" />
            </div>
          </div>
        </div>
        <motion.div
          className="col-span-2 pl-0 md:pl-8 mb-24 md:mb-48 flex flex-col items-center md:items-start"
          ref={fadeIn1.ref}
          animate={fadeIn1.controls}
        >
          <h1 className="font-normal text-3xl md:text-4xl mb-8">
            We develop custom mobile apps that boost customer engagement and
            business growth, ensuring they are intuitive, scalable, and secure.
          </h1>
          <Image
            src="/images/about/mobile.webp"
            alt="mobile"
            width={2600}
            height={1800}
            quality={100}
            className="w-full"
          />
        </motion.div>
      </div>

      {/* web */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full px-6 md:px-10">
        <div className="col-span-1 md:border-r border-neutral-500 flex justify-start">
          <div className="flex flex-col-reverse md:flex-row items-start justify-between w-full mb-8 md:mb-auto">
            <h2 className="text-lg md:text-xl md:mt-1">
              WEB PLATFORM <br />
              DEVELOPMENT
            </h2>
            <div className="flex flex-row items-center gap-x-1 mr-4">
              <h1 className="font-albert-sans font-normal md:text-2xl mb-4 md:mb-0">
                02
              </h1>
              <ArrowRight size={28} className="text-2xl hidden md:block" />
            </div>
          </div>
        </div>
        <motion.div
          className="col-span-2 pl-0 md:pl-8 mb-24 md:mb-48 flex flex-col items-center md:items-start"
          ref={fadeIn2.ref}
          animate={fadeIn2.controls}
        >
          <h1 className="font-normal text-3xl md:text-4xl mb-8">
            We build scalable, high-performance web platforms that streamline
            operations and optimize workflows for your business.
          </h1>
          <Image
            src="/images/about/web.webp"
            alt="web"
            width={2600}
            height={1800}
            quality={100}
            className="w-full"
          />
        </motion.div>
      </div>

      {/* consultancy */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full px-6 md:px-10">
        <div className="col-span-1 md:border-r border-neutral-500 flex justify-start">
          <div className="flex flex-col-reverse md:flex-row items-start justify-between w-full mb-8 md:mb-auto">
            <h2 className="text-lg md:text-xl md:mt-1">
              IT CONSULTANCY <br />
              SERVICES
            </h2>
            <div className="flex flex-row items-center gap-x-1 mr-4">
              <h1 className="font-albert-sans font-normal md:text-2xl mb-4 md:mb-0">
                03
              </h1>
              <ArrowRight size={28} className="text-2xl hidden md:block" />
            </div>
          </div>
        </div>
        <motion.div
          className="col-span-2 pl-0 md:pl-8 mb-40 md:mb-80 flex flex-col items-center md:items-start"
          ref={fadeIn3.ref}
          animate={fadeIn3.controls}
        >
          <h1 className="font-normal text-3xl md:text-4xl mb-8">
            We provide strategic guidance on IT infrastructure, cybersecurity,
            cloud computing, and digital transformation, aligning your tech with
            your long-term goals.
          </h1>
          <Image
            src="/images/about/consultancy.webp"
            alt="consultancy"
            width={2600}
            height={1800}
            quality={100}
            className="w-full"
          />
        </motion.div>
      </div>

      {/* venture partners */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 w-full px-6 md:px-10">
        <div className="col-span-1 md:border-r border-neutral-500">
          <h2 className="text-lg md:text-xl md:mt-1 mb-10 md:mb-4">
            OUR VENTURE PARTNERS
          </h2>
          <p className="font-normal pr-8 md:text-lg text-neutral-400 mb-12 md:mb-0">
            Unit Ventures is a global collective of diverse cultures, bringing
            together some of the brightest minds in blockchain technology.
          </p>
        </div>
        <div
          className="col-span-2 pl-0 md:pl-8 mb-40 md:mb-80 flex flex-col items-start"
        >
          <h1 className="font-normal text-xl md:text-4xl mb-4">
            Michael Healy <span className="text-neutral-400">Dubai</span>
          </h1>
          <h1 className="font-normal text-xl md:text-4xl mb-4">
            Ekaterina Miroshnikova{" "}
            <span className="text-neutral-400">New York</span>
          </h1>
          <h1 className="font-normal text-xl md:text-4xl mb-4">
            Roy Weissbach <span className="text-neutral-400">Hong Kong</span>
          </h1>
          <h1 className="font-normal text-xl md:text-4xl mb-4">
            Marc David <span className="text-neutral-400">Hong Kong</span>
          </h1>
          <h1 className="font-normal text-xl md:text-4xl mb-4">
            Jeff Chan <span className="text-neutral-400">Hong Kong</span>
          </h1>
          <h1 className="font-normal text-xl md:text-4xl mb-4">
            Lucy Coulden <span className="text-neutral-400">London</span>
          </h1>
        </div>
      </div> */}
    </section>
  );
};

export default About;
