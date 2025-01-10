"use client";
import React from "react";
import { RainbowButton } from "./ui/rainbow-button";
import { cn } from "@/lib/utils";

import Link from "next/link";
import Socials from "./socials";
import TypingAnimation from "./ui/typing-animation";

const Hero = () => {
	return (
		<section className="py-4 lg:px-[40px] overflow-hidden min-h-screen flex items-center justify-center">
			<div className="flex items-center justify-center">
				<div className="hero-content text-white flex-1">
					<TypingAnimation
						duration={50}
						className="text-[14px] md:max-w-[600px] text-gray-500 xl:text-lg text-center lg:text-left tracking-wider font-geist font-medium"
					>
						Introducing
					</TypingAnimation>
					<TypingAnimation
						duration={100}
						delay={1000}
						className="text-6xl md:text-8xl tracking-wider text-black text-center lg:text-left font-geist font-bold "
					>
						TRIOE
					</TypingAnimation>
					<TypingAnimation
						duration={50}
						delay={1700}
						className="text-[14px] md:max-w-[600px] text-gray-500 xl:text-lg text-center tracking-wider font-geist font-medium"
					>
						Tinkering Resources for Internet of Everything.
					</TypingAnimation>
					{/* <div className="relative w-full aspect-square sm:aspect-video md:aspect-[4/3] lg:aspect-[16/9] border border-gray-300 rounded-lg overflow-hidden">
						<TrioeScene />
					</div> */}
					<div className="flex flex-col sm:flex-row gap-4 py-3 justify-center items-center lg:justify-start">
						<Link href="#courses">
							<RainbowButton
								className={cn(
									"bg-primary-gradient text-sm rounded-full px-5 w-[200px] tracking-wide"
								)}
							>
								Start Learning
							</RainbowButton>
						</Link>
						<Link href="#kits" className="bg-white border rounded-full">
							<RainbowButton
								className={cn(
									"bg-none text-black border text-sm rounded-full px-5 w-[200px] tracking-wide"
								)}
							>
								Explore Kits
							</RainbowButton>
						</Link>
					</div>
					<div className="flex justify-center lg:justify-start items-center gap-4">
						<Socials color="" size={20} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
