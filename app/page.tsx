import { BentoGridComponent } from "@/components/BentoGrid";
import ElectronicsKits from "@/components/ElectronicsKits";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LearningModules from "@/components/LearningModules";
import { Testimonials } from "@/components/Testimonials";
import TheTeam from "@/components/TheTeam";
import TrioeVideo from "@/components/TrioeVideo";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

import React, { Suspense } from "react";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <div id="hero">
        <Hero />
      </div>
      <div className="py-5 px-5">
        <Suspense fallback={<div>Loading...</div>}>
          <BentoGridComponent />
        </Suspense>
      </div>
      <div id="video" className="relative">
        <Suspense fallback={<div>Loading...</div>}>
          <TrioeVideo />
        </Suspense>
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
          )}
        />
      </div>
      <div id="courses" className="py-5 px-5 relative">
        <Suspense fallback={<div>Loading...</div>}>
          <LearningModules />
        </Suspense>
        <DotPattern
          width={20}
          height={20}
          cx={16}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
          )}
        />
      </div>
      <div id="kits" className="py-5 px-5 relative">
        <Suspense fallback={<div>Loading...</div>}>
          <ElectronicsKits />
        </Suspense>
        <DotPattern
          width={20}
          height={20}
          cx={16}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
          )}
        />
      </div>
      <div id="team" className="py-5 px-5">
        <Suspense fallback={<div>Loading...</div>}>
          <TheTeam />
        </Suspense>
      </div>
      <div id="testimonials" className="py-5 px-5">
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
