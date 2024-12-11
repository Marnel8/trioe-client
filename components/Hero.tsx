import Image from "next/image";
import React, { Suspense } from "react";
import { Button } from "./ui/button";
import { RainbowButton } from "./ui/rainbow-button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import HeaderNav from "./HeaderNav";
import TrioeScene from "./TrioeScene";

const Hero = () => {
  return (
    <section className="bg-hero-image bg-cover bg-center bg-no-repeat rounded-lg py-4 lg:px-[40px] ">
      {/* <HeaderNav /> */}
      <div className="flex items-center justify-between">
        <div className="hero-content text-white flex-1">
          <p className="xl:text-[55.58px] text-[25px] md:text-[35px] font-bold text-black text-center lg:text-left ">
            Tinkering Resources for Internet of Everything <br />
            <span className="inline-flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-start md:gap-2 max-w-[200px]">
              with{" "}
              <Image
                src="/images/LOGO_WITH_TEXT.png"
                alt="logo"
                width={190}
                height={100}
                className="object-contain"
              />
            </span>
          </p>
          <p className="text-[10px] text-gray-500 xl:subtext text-center lg:text-left tracking-wider">
            It's an online platform that teaches Internet of Things (IoT)
            technology. It encourages hands-on learning, where users actively
            use technology to explore and innovate, especially within the
            Internet of Everything (IoE) field. Essentially, it's a practical
            tool for understanding and building IoE systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 py-5 justify-center lg:justify-start">
            <RainbowButton
              className={cn(
                "bg-primary-gradient text-sm rounded-full px-10 w-full sm:w-auto"
              )}
            >
              Start Learning
            </RainbowButton>
            <RainbowButton
              className={cn(
                "bg-primary-gradient text-sm rounded-full px-10 w-full sm:w-auto"
              )}
            >
              Explore Kits
            </RainbowButton>
            {/* <ArrowRight className="ml-2" size={18} /> */}
          </div>
        </div>
        <div className="hidden lg:flex-1 relative h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] xl:-top-5 lg:block">
          {" "}
          {/* Added flex and items-center */}
          <Suspense fallback={<div>Loading...</div>}>
            <TrioeScene />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Hero;
