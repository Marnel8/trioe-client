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
		<Card className="w-full rounded-none">
			<div className="flex flex-col sm:flex-row">
				<div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start gap-3 p-10 sm:max-w-[15%] w-full sm:w-auto border-b  sm:border-b-0 sm:border-r border-gray-200">
					<div className="flex flex-row sm:flex-col w-full justify-between items-center gap-3 sm:gap-1 ">
						<p className="text-sm sm:text-base">Sun</p>
						<p className="font-roboto-bold text-4xl sm:text-5xl md:text-6xl">
							08
						</p>
						<p className="text-sm sm:text-base">Dec 2024</p>
					</div>
					<Separator className="hidden sm:block my-3" />
					<div className="text-center ">
						<p className="text-xs sm:text-sm tracking-wide">
							SMX Convention Center
						</p>
					</div>
					<Separator className="hidden sm:block my-3" />
					<div>
						<p className="text-xs sm:text-sm text-center">
							08:00 AM - 05:00 PM
						</p>
					</div>
					<Separator className="hidden sm:block my-3" />
					<div>
						<h1 className="text-center">Consumer Electronics Show</h1>
					</div>
					<div className="flex-1">
						<div className="bg-gradient-to-r primary-gradient h-full"> </div>
					</div>
				</div>
				<div className="flex-1 relative h-[700px] w-full">
					<Image
						src={`/images/event1.png`}
						alt={`event1`}
						fill
						className="object-cover "
					/>
				</div>
			</div>
		</Card>
	);
}

// <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
//   <div className="relative h-48 w-full">
//     <Image
//       src={thumbnail}
//       alt={`${title} thumbnail`}
//       fill
//       className="object-cover"
//     />
//     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
//       <Badge variant="secondary" className="bg-white/20 text-white">
//         {category}
//       </Badge>
//     </div>
//   </div>
//   <CardHeader className="bg-gradient-to-r primary-gradient p-4 text-white">
//     <CardTitle className="text-xl font-bold">{title}</CardTitle>
//   </CardHeader>
//   <CardContent className="flex-grow p-4">
//     <p className="mb-4 text-sm text-gray-600">{description}</p>
//     <div className="space-y-2 text-sm text-gray-500">
//       <div className="flex items-center">
//         <CalendarIcon className="mr-2 h-4 w-4" />
//         <time dateTime={date}>
//           {new Date(date).toLocaleDateString("en-US", {
//             weekday: "long",
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//           })}
//         </time>
//       </div>
//       <div className="flex items-center">
//         <ClockIcon className="mr-2 h-4 w-4" />
//         <span>{time}</span>
//       </div>
//       <div className="flex items-center">
//         <MapPinIcon className="mr-2 h-4 w-4" />
//         <span>{location}</span>
//       </div>
//     </div>
//   </CardContent>
// </Card>
