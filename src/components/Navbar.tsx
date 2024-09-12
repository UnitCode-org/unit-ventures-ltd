"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useScroll } from "@/contexts/ScrollContext";

function Navbar() {
  const [openMobileSheet, setOpenMobileSheet] = useState(false);

  const fadeInFromTop = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };

  const scroll = useScroll();

  const handleHomeClick = () => {
    scroll?.scrollToHero();
    setOpenMobileSheet(false);
  };

  const handleAboutClick = () => {
    scroll?.scrollToAbout();
    setOpenMobileSheet(false);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <motion.div
        {...fadeInFromTop}
        className="flex md:hidden flex-row gap-4 items-center justify-between fixed top-0 left-0 w-full z-50 backdrop-blur-lg py-6 px-6 md:px-10 text-white"
      >
        <Image
          src="/images/logo/logo-gray.webp"
          width={28}
          height={28}
          alt="logo"
        />
        <Sheet open={openMobileSheet} onOpenChange={setOpenMobileSheet}>
          <SheetTrigger asChild>
            <Button
              variant="secondary"
              className="rounded-full px-3 py-1.5 h-auto"
              onClick={() => setOpenMobileSheet(true)}
            >
              <Menu size={18} />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-screen h-screen flex flex-col bg-black"
            side={"top"}
          >
            <div className="flex justify-between items-center">
              <Image
                src="/images/logo/logo-gray.webp"
                width={28}
                height={28}
                alt="logo"
              />
              <Button
                variant="secondary"
                className="rounded-full px-3 py-1.5 h-auto"
                onClick={() => setOpenMobileSheet(false)}
              >
                <X size={18} />
              </Button>
            </div>
            <div className="flex flex-col gap-10 text-center flex-grow justify-center pb-8">
              <span
                className="font-albert-sans font-semibold text-white text-4xl"
                onClick={handleHomeClick}
              >
                HOME
              </span>
              <span
                className="font-albert-sans font-semibold text-white text-4xl"
                onClick={handleAboutClick}
              >
                ABOUT
              </span>
              <Button size="lg" className="w-fit mx-auto">
                LET&apos;S COLLABORATE
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </motion.div>

      {/* Desktop Navbar */}
      <motion.div
        {...fadeInFromTop}
        className="flex justify-center items-center w-full fixed top-0 left-0 z-50 backdrop-blur-md"
      >
        <div className="hidden md:flex flex-row gap-4 items-center justify-between w-full max-w-screen-2xl py-6 px-8 z-10 relative">
          <div className="grow basis-0 flex items-center gap-10">
            <span
              className="font-medium text-unit-gray-40 hover:text-white transition-colors mt-1 cursor-pointer"
              onClick={handleHomeClick}
            >
              HOME
            </span>
            <span
              className="font-medium text-unit-gray-40 hover:text-white transition-colors mt-1 cursor-pointer"
              onClick={handleAboutClick}
            >
              ABOUT
            </span>
          </div>
          <Button>LET&apos;S COLLABORATE</Button>
          <Image
            src="/images/logo/logo-gray.webp"
            width={32}
            height={32}
            alt="logo"
            className="absolute left-1/2 transform -translate-x-1/2 top-7"
          />
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;
