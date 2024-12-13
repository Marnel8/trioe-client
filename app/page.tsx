import { BentoGridComponent } from "@/components/BentoGrid";
import ElectronicsKits from "@/components/ElectronicsKits";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LearningModules from "@/components/LearningModules";
import { Testimonials } from "@/components/Testimonials";
import TheTeam from "@/components/TheTeam";
import TrioeVideo from "@/components/TrioeVideo";

import React, { Suspense } from "react";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <div id="hero">
        <Hero />
      </div>
      <div className="py-5">
        <Suspense fallback={<div>Loading...</div>}>
          <BentoGridComponent />
        </Suspense>
      </div>
      <div id="video">
        <Suspense fallback={<div>Loading...</div>}>
          <TrioeVideo />
        </Suspense>
      </div>
      <div id="courses" className="py-5">
        <Suspense fallback={<div>Loading...</div>}>
          <LearningModules />
        </Suspense>
      </div>
      <div id="kits" className="py-5">
        <Suspense fallback={<div>Loading...</div>}>
          <ElectronicsKits />
        </Suspense>
      </div>
      <div id="team" className="py-5">
        <Suspense fallback={<div>Loading...</div>}>
          <TheTeam />
        </Suspense>
      </div>
      <div id="testimonials" className="py-5">
        <Suspense fallback={<div>Loading...</div>}>
          <Testimonials />
        </Suspense>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
