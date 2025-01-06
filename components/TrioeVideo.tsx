"use client";
import React, { useState } from "react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import PageHeader from "./PageHeader";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

const carourselItems = [
	{
		videoSrc: "https://www.youtube.com/embed/zVInmh4o5qw?si=rQ_tG8emsKrjxEnM",
		thumbnailSrc: "/images/video_thumbnail.png",
		thumbnailAlt: "Hero Video",
	},
	{
		videoSrc: "https://www.youtube.com/embed/qTVZSD4MLCY?si=MWPvRgIBN1ySSlVM",
		thumbnailSrc: "/tutorials/install_arduino.png",
		thumbnailAlt: "Hero Video",
	},
	{
		videoSrc: "https://www.youtube.com/embed/_jajsQC_8bc?si=UXtQgtJBNOWWDezB",
		thumbnailSrc: "/tutorials/drivers.png",
		thumbnailAlt: "Hero Video",
	},
	{
		videoSrc: "https://www.youtube.com/embed/QvCzm0lGt94?si=aTCR5yETCl38KAHq",
		thumbnailSrc: "/tutorials/trioe_library.png",
		thumbnailAlt: "Hero Video",
	},
	{
		videoSrc: "https://www.youtube.com/embed/KEfmvTeGOdI?si=G75a33xBMxa-YTr1",
		thumbnailSrc: "/tutorials/hello_world.png",
		thumbnailAlt: "Hero Video",
	},
];

const TrioeVideo = () => {
	const [selectedVideo, setSelectedVideo] = useState(carourselItems[0]);
	return (
		<div className="flex flex-col items-center justify-center rounded-xl">
			<PageHeader title="MEDIA HIGHLIGHTS" />
			<div className="space-y-5 flex flex-col items-center ustify-center">
				<div className="relative mt-5 max-w-[1200px]">
					<HeroVideoDialog
						className="dark:hidden block transition-transform duration-300 md:basis-1/3   lg:basis-1/4 w-full"
						animationStyle="from-center"
						videoSrc={selectedVideo.videoSrc}
						thumbnailSrc={selectedVideo.thumbnailSrc}
						thumbnailAlt={selectedVideo.thumbnailAlt}
					/>
					<HeroVideoDialog
						className="hidden dark:block transition-transform duration-300 md:basis-1/3 lg:basis-1/4 w-full"
						animationStyle="from-center"
						videoSrc={selectedVideo.videoSrc}
						thumbnailSrc={selectedVideo.thumbnailSrc}
						thumbnailAlt={selectedVideo.thumbnailAlt}
					/>
				</div>
				<Carousel
					opts={{
						align: "start",
					}}
					className="w-full "
				>
					<CarouselContent>
						{carourselItems.map((_, index) => (
							<CarouselItem key={index} className="basis-1/3 md:basis-1/4">
								<div className="p-1">
									<Card
										className={`relative ${
											selectedVideo === carourselItems[index] &&
											"ring-2 ring-offset-2 ring-offset-background"
										} transition-all duration-200`}
									>
										<Button
											onClick={() => setSelectedVideo(carourselItems[index])}
											asChild
											variant="ghost"
											className={
												"p-6 w-full h-full flex aspect-square items-center justify-center cursor-pointer"
											}
										>
											<CardContent>
												<Image
													src={carourselItems[index].thumbnailSrc}
													alt={carourselItems[index].thumbnailAlt}
													fill
													className="object-contain"
												/>
											</CardContent>
										</Button>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</div>
	);
};

export default TrioeVideo;
