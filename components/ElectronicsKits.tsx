"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PageHeader from "./PageHeader";
import { RainbowButton } from "./ui/rainbow-button";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "lucide-react";

const kits = [
  {
    id: 1,
    name: "DRM KIT",
    description:
      "Perfect for beginners, this kit includes an Arduino board and essential components.",
    image: "/samples/KITS_new (2).png",
    difficulty: "Beginner",
    route: "/kits/drm",
    learnRoute: "/learn/drm",
  },
  {
    id: 2,
    name: "STEAM KIT",
    description:
      "A powerful single-board computer kit for advanced projects in IoT and robotics.",
    image: "/samples/PROMOTION_6.png",
    difficulty: "Beginner",
    route: "/kits/steam",
    learnRoute: "/learn/steam",
  },
  {
    id: 3,
    name: "AGRI-AQUA KIT",
    description:
      "Create stunning visual displays with this programmable LED matrix kit.",
    image: "/samples/KITS_new (1).png",
    difficulty: "Advanced",
    route: "/kits/agriaqua",
    learnRoute: "/learn/agriaqua",
  },
];

const ElectronicsKits = () => {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center">
      <PageHeader title="ELECTRONICS KITS" />
      <div className="py-5 flex flex-wrap justify-center lg:flex-nowrap gap-5">
        {kits.map((kit) => (
          <Card
            key={kit.id}
            className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <CardHeader className="p-0">
              <div className="relative h-48 md:h-[300px] w-full">
                <Image
                  src={kit.image}
                  alt={kit.name}
                  layout="fill"
                  className="object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{kit.name}</h3>
                <Badge variant={"secondary"}>{kit.difficulty}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{kit.description}</p>
            </CardContent>
            <CardFooter className="p-4">
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  asChild
                  size="sm"
                  className="pointer-events-auto"
                >
                  <a href={`/kits/${kit.id}$`}>
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                {/* <RainbowButton 
                  onClick={() => router.push(kit.learnRoute)}
                  className="flex-1 mt-4 sm:mt-5 p-5 rounded-full text-sm sm:text-base tracking-wide"
                >
                  Start Learning
                </RainbowButton> */}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button variant="outline" size="lg">
          View All Kits
        </Button>
      </div>
    </section>
  );
};

export default ElectronicsKits;
