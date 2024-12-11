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
import ShinyButton from "./ui/shiny-button";
import { RainbowButton } from "./ui/rainbow-button";

const kits = [
  {
    id: 1,
    name: "Arduino Starter Kit",
    description:
      "Perfect for beginners, this kit includes an Arduino board and essential components.",
    image: "/samples/PROMOTION_1.jpg",
    difficulty: "Beginner",
  },
  {
    id: 2,
    name: "Raspberry Pi 4 Kit",
    description:
      "A powerful single-board computer kit for advanced projects in IoT and robotics.",
    image: "/samples/PROMOTION_2.jpg",
    difficulty: "Intermediate",
  },
  {
    id: 3,
    name: "LED Matrix Kit",
    description:
      "Create stunning visual displays with this programmable LED matrix kit.",
    image: "/samples/PROMOTION_3.jpg",
    difficulty: "Intermediate",
  },
];

const ElectronicsKits = () => {
  return (
    <section>
      <PageHeader title="ELECTRONICS KITS" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 max-w-[1500px]">
        {kits.map((kit) => (
          <Card
            key={kit.id}
            className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={kit.image}
                  alt={kit.name}
                  layout="fill"
                  objectFit="cover"
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
              <RainbowButton className="w-full p-4 sm:p-6 rounded-full text-sm sm:text-base">
                {" "}
                Learn More
              </RainbowButton>
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
