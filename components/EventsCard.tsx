import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";

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
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={thumbnail}
          alt={`${title} thumbnail`}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <Badge variant="secondary" className="bg-white/20 text-white">
            {category}
          </Badge>
        </div>
      </div>
      <CardHeader className="bg-gradient-to-r primary-gradient p-4 text-white">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <time dateTime={date}>
              {new Date(date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <div className="flex items-center">
            <ClockIcon className="mr-2 h-4 w-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="mr-2 h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
