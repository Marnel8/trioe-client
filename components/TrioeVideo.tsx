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
import Safari from "./ui/safari";

const carourselItems = [
	{
		videoSrc: "https://www.youtube.com/embed/zVInmh4o5qw?si=rQ_tG8emsKrjxEnM",
		thumbnailSrc: "/images/video_thumbnail.png",
		thumbnailAlt: "Hero Video",
	},
	{
		videoSrc: "https://www.youtube.com/embed/44EAy6Vq2uc?si=eZNkaubczM_S0r-s",
		thumbnailSrc: "/tutorials/intro.png",
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
	{
		videoSrc: "https://www.youtube.com/embed/mKqg2fUm9VE?si=gKT935R8MhjFV3Em",
		thumbnailSrc: "/tutorials/blinking.png",
		thumbnailAlt: "Hero Video",
	},
];

const TrioeVideo = () => {
	const [selectedVideo, setSelectedVideo] = useState(carourselItems[0]);
	return (
		<div className="flex flex-col items-center justify-center rounded-xl ">
			<PageHeader
				title="MEDIA HIGHLIGHTS"
				description="Showcasing TRIOE’s features and tutorials to quickly get started."
			/>
			<div className="space-y-5 flex flex-col items-center justify-center w-full">
				{/* <div className="relative">
					<Safari
						url="www.trioe.dev"
						className="size-full"
						// videoSrc={`${selectedVideo.videoSrc}`}
						videoSrc="https://videos.pexels.com/video-files/27180348/12091515_2560_1440_50fps.mp4"
						// imageSrc={selectedVideo.thumbnailSrc}
					/>
				</div> */}
				<div className="relative mt-5 w-full max-w-[1200px]">
					<HeroVideoDialog
						className="dark:hidden block transition-transform duration-300"
						animationStyle="from-center"
						videoSrc={selectedVideo.videoSrc}
						thumbnailSrc={selectedVideo.thumbnailSrc}
						thumbnailAlt={selectedVideo.thumbnailAlt}
					/>
					<HeroVideoDialog
						className="hidden dark:block transition-transform duration-300"
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
					className="w-full max-w-[1200px] px-8 md:px-0"
				>
					<CarouselContent>
						{carourselItems.map((item, index) => (
							<CarouselItem
								key={index}
								className="basis-1/2 sm:basis-1/3 md:basis-1/4"
							>
								<div className="p-1">
									<Card
										className={`relative ${
											selectedVideo === item &&
											"ring-2 ring-offset-2 ring-offset-background"
										} transition-all duration-200`}
									>
										<Button
											onClick={() => setSelectedVideo(item)}
											asChild
											variant="ghost"
											className="p-2 w-full h-full flex aspect-square items-center justify-center cursor-pointer"
										>
											<CardContent className="p-0">
												<div className="relative w-full h-full">
													<Image
														src={item.thumbnailSrc}
														alt={item.thumbnailAlt}
														fill
														className="object-contain"
													/>
												</div>
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
