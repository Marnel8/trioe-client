import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
          ABOUT TRIOE
        </h1>
        <p className="mb-12 text-center text-xl text-gray-600">
          TRIOE is a platform for learning and building IoT projects.
        </p>
        <div className=" flex flex-col lg:flex-row gap-10 h-screen w-full overflow-hidden bg-gradient-to-r">
          <div className="relative h-full w-full">
            <Image
              src="/images/1.png"
              alt="TRIOE"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-full w-full">
            <Image
              src="/images/2.png"
              alt="TRIOE"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
