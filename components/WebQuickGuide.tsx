import React from "react";
import PageHeader from "./PageHeader";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const steps = [
	{
		number: 1,
		title: "Learn",
		description:
			"Understand electronics fundamentals and deepen your skills through TRIOE’s detailed module discussions.",
		image: "/gifs/learn.gif",
	},
	{
		number: 2,
		title: "Explore",
		description:
			"Discover endless possibilities with easy-to-follow tutorials and hands-on kits from TRIOE.",
		image: "/gifs/explore.gif",
	},
	{
		number: 3,
		title: "Innovate",
		description:
			"Use the TRIOE board and kits to bring your creative ideas to life and start building.",
		image: "/gifs/innovate.gif",
	},
];
const WebQuickGuide = () => {
	return (
		<div className="container mx-auto max-w-6xl">
			<PageHeader title="HOW TRIOE WEBSITE WORKS" />
			<div className="py-5">
				<div className=" items-center justify-center gap-5 hidden lg:flex">
					{steps.map((step) => (
						<Card key={step.number} className="border-none shadow-none ">
							<CardContent className="flex flex-col items-center text-center pt-6">
								<div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center mb-6">
									<span className="text-xl font-bold text-primary">
										{step.number}
									</span>
								</div>

								<h3 className="text-xl font-semibold mb-3">{step.title}</h3>

								<p className="text-muted-foreground mb-20 max-w-xs">
									{step.description}
								</p>

								<div className="relative w-48 h-48">
									<Image
										src={step.image || "/placeholder.svg"}
										alt={`Step ${step.number}: ${step.title}`}
										fill
										className="object-contain"
									/>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
				<Carousel
					opts={{
						align: "start",
					}}
					className="flex items-center justify-center gap-5 lg:hidden"
				>
					<CarouselContent>
						{steps.map((step) => (
							<CarouselItem
								key={step.number}
								className="basis-1/1 sm:basis-1/2 lg:basis-1/3"
							>
								<CardContent className="flex flex-col items-center text-center pt-6">
									<div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center mb-6">
										<span className="text-xl font-bold text-primary">
											{step.number}
										</span>
									</div>

									<h3 className="text-xl font-semibold mb-3">{step.title}</h3>

									<p className="text-muted-foreground mb-20 max-w-xs">
										{step.description}
									</p>

									<div className="relative w-48 h-48">
										<Image
											src={step.image || "/placeholder.svg"}
											alt={`Step ${step.number}: ${step.title}`}
											fill
											className="object-contain"
										/>
									</div>
								</CardContent>
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

export default WebQuickGuide;
