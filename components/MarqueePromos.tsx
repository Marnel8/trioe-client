import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";
import { promotions } from "@/constants";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const firstRow = promotions.slice(0, promotions.length / 2);

const PromotionCard = ({ img, id }: { img: string; id: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-md min-h-[200px]",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <AspectRatio ratio={7 / 9}>
        <Image src={img} alt={id} fill className="object-cover" />
      </AspectRatio>
    </figure>
  );
};

const MarqueePromos = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((promotion) => (
          <PromotionCard
            key={promotion.id}
            {...promotion}
            img={promotion.img}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default MarqueePromos;
