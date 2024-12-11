import { BentoGridComponent } from "@/components/BentoGrid";
import ElectronicsKits from "@/components/ElectronicsKits";
import Hero from "@/components/Hero";
import LearningModules from "@/components/LearningModules";
import MarqueePromos from "@/components/MarqueePromos";
import { MobileNav } from "@/components/MobileNav";
import { BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";
import React, { Suspense } from "react";

const Home = () => {
  return (
    <div>
      <div className="">
        <MobileNav />
      </div>
      <Hero />
      <div className="py-5">
        <Suspense fallback={<div>Loading...</div>}>
          <BentoGridComponent />
        </Suspense>
      </div>
      <div className="py-5">
        <LearningModules />
      </div>
      <div className="py-5">
        <ElectronicsKits />
      </div>
    </div>
  );
};

export default Home;
