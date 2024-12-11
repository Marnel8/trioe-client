import Image from "next/image";
import React from "react";

const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="relative">
      <h1 className="text-2xl sm:text-2xl md:text-3xl xl:text-4xl font-bold relative">
        {title}
      </h1>

      {/* Small dot grid */}
      <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 md:-top-6 md:-left-6 -z-10">
        <Image
          src="/images/DOT_GRID_SM.svg"
          alt="Hero Background"
          width={80}
          height={80}
          className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]"
        />
      </div>

      {/* Large dot grid */}
      <div className="absolute -bottom-[80px] -right-4 sm:-bottom-[90px] sm:-right-5 md:-bottom-[100px] md:-right-6 -z-10">
        <Image
          src="/images/DOT_GRIDS_LG.svg"
          alt="Hero Background"
          width={200}
          height={200}
          className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]"
        />
      </div>
    </div>
  );
};

export default PageHeader;
