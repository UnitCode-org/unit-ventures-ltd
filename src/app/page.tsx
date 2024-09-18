"use client";

import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { ScrollProvider } from "@/contexts/ScrollContext";
import dynamic from "next/dynamic";

const SmoothScrollContext = dynamic(
  () => import("@/contexts/SmoothScrollContext"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <SmoothScrollContext>
      <ScrollProvider>
        <div className="flex flex-col items-center justify-center min-h-screen w-screen text-white">
          <Navbar />
          <Hero />
          <About />
          <Footer />
        </div>
      </ScrollProvider>
    </SmoothScrollContext>
  );
}
