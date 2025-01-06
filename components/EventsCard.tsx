import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import { Separator } from "./ui/separator";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  thumbnail: string;
}

export function EventCard({
  title,
  date,
  time,
  location,
  description,
  category,
  thumbnail,
}: EventCardProps) {
  return (
    <Card className="w-full 4xl:w-[1500px] rounded-none overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col justify-start items-center lg:items-start gap-4 p-4 sm:p-6 lg:p-8 w-full lg:w-auto lg:min-w-[250px] border-b lg:border-b-0 lg:border-r border-gray-200">
          <div className="flex flex-row  justify-between w-full items-center gap-4 lg:gap-6">
            <div className="flex flex-col items-center  w-full">
              <p className="text-xs sm:text-sm">Monday</p>
              <p className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                07
              </p>
              <p className="text-xs sm:text-sm">Jan 2025</p>
            </div>
            <Separator className="w-3 h-3 lg:w-5 lg:h-3" />
            <div className="flex flex-col items-center  w-full">
              <p className="text-xs sm:text-sm">Thursday</p>
              <p className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                11
              </p>
              <p className="text-xs sm:text-sm">Jan 2025</p>
            </div>
          </div>
          <Separator className="w-full h-0.5" />
          <div className="text-center  w-full">
            <p className="text-xs sm:text-sm tracking-wide">
              The Venetian Resort Hotel Las Vegas
            </p>
          </div>
          <Separator className="w-full h-0.5" />
          <div className="w-full text-center ">
            <p className="text-xs sm:text-sm">08:00 AM - 05:00 PM</p>
          </div>
          <Separator className="w-full h-0.5" />
          <div className="w-full">
            <h1 className="text-center  text-sm sm:text-base lg:text-lg xl:text-xl font-semibold">
              Consumer Electronics Show
            </h1>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
            <Image
              src="/samples/CES 2025 Banner.png"
              alt="Consumer Electronics Show"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
