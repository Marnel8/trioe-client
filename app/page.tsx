import { BentoGridComponent } from "@/components/BentoGrid";
import ElectronicsKits from "@/components/ElectronicsKits";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LearningModules from "@/components/LearningModules";
import { MobileNav } from "@/components/MobileNav";
import { Testimonials } from "@/components/Testimonials";
import { BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";
import React, { Suspense } from "react";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <div className="">
        <MobileNav />
      </div>
      <div id="hero">
        <Hero />
      </div>
      <div className="py-5">
        <Suspense fallback={<div>Loading...</div>}>
          <BentoGridComponent />
        </Suspense>
      </div>
      <div id="courses" className="py-5">
        <LearningModules />
      </div>
      <div id="kits" className="py-5">
        <ElectronicsKits />
      </div>
      <div id="testimonials" className="py-5">
        <Testimonials />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
