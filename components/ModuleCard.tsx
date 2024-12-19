"use client";

import Image from "next/image";
import React from "react";
import ShinyButton from "./ui/shiny-button";
import { useRouter } from "next/navigation";

const ModuleCard = ({
  title,
  description,
  imageSrc,
  learnRoute,
}: {
  title: string;
  description: string;
  imageSrc: string;
  learnRoute: string;
}) => {
  const router = useRouter();
  return (
    <div className="rounded-xl p-6 z-10 w-full max-w-[500px] max-h-[600px] bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="w-full h-[200px] sm:h-[240px] md:h-[270px] rounded-xl relative bg-module-image bg-cover bg-center">
        <div className="absolute bg-white w-full h-[220px] sm:h-[260px] md:h-[290px] rounded-xl max-w-[93%] left-1/2 top-3 sm:top-5 -translate-x-1/2 shadow-md">
          <Image
            src={imageSrc}
            alt="module-card"
            fill
            className="object-cover rounded-xl m-auto shadow-md"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-[40px] sm:mt-[50px] md:mt-[60px]">
        <h3 className="text-2xl sm:text-3xl font-bold">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-500">{description}</p>
      </div>
      <ShinyButton
        className="w-full mt-4 sm:mt-5 p-4 rounded-full text-sm sm:text-base"
        onClick={() => router.push(learnRoute)}
      >
        Start Learning
      </ShinyButton>
    </div>
  );
};

export default ModuleCard;
