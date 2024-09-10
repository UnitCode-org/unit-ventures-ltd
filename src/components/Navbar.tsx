"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [openMobileSheet, setOpenMobileSheet] = useState(false);

  const fadeInFromTop = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };

  return (
    <>
      {/* Mobile Navbar */}
      <motion.div
        {...fadeInFromTop}
        className="flex md:hidden flex-row gap-4 items-center justify-between fixed top-0 left-0 w-full z-50 backdrop-blur-md p-6"
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
            // hideCloseButton
            className="w-screen h-screen flex flex-col"
            side={"top"}
          >
            <div className="flex justify-between items-center">
              <div className="opacity-75">
                <Image
                  src="/images/logo/unit-club.svg"
                  width={28}
                  height={28}
                  alt="logo"
                />
              </div>
              <Button
                variant="secondary"
                className="rounded-full px-3 py-1.5 h-auto"
                onClick={() => setOpenMobileSheet(false)}
              >
                <X size={18} />
              </Button>
            </div>
            <div className="flex flex-col gap-10 text-center flex-grow justify-center pb-8">
              <span className="font-albert-sans font-semibold text-white text-4xl">
                HOME
              </span>
              <span className="font-albert-sans font-semibold text-white text-4xl">
                ABOUT
              </span>
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
            <span className="font-medium text-unit-gray-40 hover:text-white transition-colors">
              HOME
            </span>
            <span className="font-medium text-unit-gray-40 hover:text-white transition-colors">
              ABOUT
            </span>
          </div>
          <Button>LET&apos;S COLLABORATE</Button>
          <Image
            src="/images/logo/logo-gray.webp"
            width={32}
            height={32}
            alt="logo"
            className="absolute left-1/2 transform -translate-x-1/2 top-8"
          />
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;
