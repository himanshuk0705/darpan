"use client";
import React, {  useRef} from "react";
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger, Flip } from "gsap/all";
import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Events from "@/components/sections/events";
import Joinform from "@/components/sections/joinform";
import Leads from "@/components/sections/leads";
import Footer from "@/components/footer";
import JoinQR from "@/components/sections/qr";

export default function Home() {
 
  

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Flip);
  const heightref = useRef<HTMLDivElement>(null);

  return (
    <div ref={heightref} className="select-none ">
      <Navbar />
      <div className="min-h-screen overflow-y-scroll no-scrollbar  bg-black overflow-hidden">
        <Hero />
        <About />
        <Events />
        <Leads />
        {/* <JoinQR/> */}
        <Footer />
      </div>
    </div>
  );
}
