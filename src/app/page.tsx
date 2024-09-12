"use client";

import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { ScrollProvider } from "@/contexts/ScrollContext";

export default function Home() {
  return (
    <ScrollProvider>
      <div className="flex flex-col items-center justify-center min-h-screen w-screen">
        <Navbar />
        <Hero />
        <About />
        <Footer />
      </div>
    </ScrollProvider>
  );
}
