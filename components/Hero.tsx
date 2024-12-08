import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { RainbowButton } from "./ui/rainbow-button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import HeaderNav from "./HeaderNav";
import TrioeScene from "./TrioeScene";

const Hero = () => {
  return (
    <section className="bg-hero-image bg-cover bg-center bg-no-repeat h-[90vh] 3xl:h-[80vh] rounded-lg p-4">
      <HeaderNav />
      <div className="flex items-center justify-between">
        <div className="hero-content text-white flex-1">
          <p className="title text-black ">
            Tinkering Resources for Internet of Everything <br />
            <span className="inline-flex gap-2">
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
          <p className="subtext tracking-wider">
            It's an online platform that teaches Internet of Things (IoT)
            technology. It encourages hands-on learning, where users actively
            use technology to explore and innovate, especially within the
            Internet of Everything (IoE) field. Essentially, it's a practical
            tool for understanding and building IoE systems.
          </p>
          <div className="flex gap-4 py-5">
            <RainbowButton
              className={cn("bg-primary-gradient text-sm rounded-full px-10")}
            >
              Start Learning
            </RainbowButton>
            <RainbowButton
              className={cn("bg-primary-gradient text-sm rounded-full px-10")}
            >
              Explore Kits
            </RainbowButton>
            {/* <ArrowRight className="ml-2" size={18} /> */}
          </div>
        </div>
        <div className="flex-1 relative h-[400px]">
          <TrioeScene />
        </div>
      </div>
    </section>
  );
};

export default Hero;
