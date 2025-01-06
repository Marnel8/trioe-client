"use client";
import Image from "next/image";
import React, { Suspense } from "react";
import { RainbowButton } from "./ui/rainbow-button";
import { cn } from "@/lib/utils";

const TrioeScene = dynamic(() => import("../components/TrioeScene"), {
	ssr: false,
	loading: () => <Loader />,
});
import Link from "next/link";
import Socials from "./socials";
import dynamic from "next/dynamic";
import Loader from "./loader/Loader";

const Hero = () => {
	return (
		<section className="bg-hero-image bg-cover bg-center bg-no-repeat py-4 lg:px-[40px] overflow-hidden">
			{/* <div className="md:absolute top-0 right-[-400px] w-full md:h-full">
				<Image
					src="/images/HERO_ACCENT.svg"
					alt="logo"
					fill
					priority
					className="object-contain"
				/>
			</div> */}
			{/* <HeaderNav /> */}
			<div className="flex items-center justify-between ">
				<div className="hero-content text-white flex-1">
					<p className="lg:text-[35px] 2xl:text-[45.58px] 3xl:text-[55px] text-[25px] md:text-[25px] tracking-wider text-black text-center lg:text-left font-black">
						Tinkering Resources for Internet of Everything <br />
						<span className="inline-flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-start md:gap-2 max-w-[200px]">
							with{" "}
							<Image
								src="/images/LOGO_WITH_TEXT.png"
								alt="logo"
								width={190}
								height={100}
								priority
								className="object-contain"
							/>
						</span>
					</p>
					<p className="text-[10px] text-gray-500 xl:subtext text-center lg:text-left tracking-wider font-mono">
						It's an online platform that teaches Internet of Things (IoT)
						technology. It encourages hands-on learning, where users actively
						use technology to explore and innovate, especially within the
						Internet of Everything (IoE) field. Essentially, it's a practical
						tool for understanding and building IoE systems.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 py-5 justify-center items-center lg:justify-start font-mono">
						<Link href="#courses">
							<RainbowButton
								className={cn(
									"bg-primary-gradient text-sm rounded-full px-10 w-[260px]"
								)}
							>
								Start Learning
							</RainbowButton>
						</Link>
						<Link href="#kits">
							<RainbowButton
								className={cn(
									"bg-primary-gradient text-sm rounded-full px-10 w-[260px]"
								)}
							>
								Explore Kits
							</RainbowButton>
						</Link>
					</div>
					<div className="flex justify-center lg:justify-start items-center gap-4">
						<Socials color="text-primary border-primary" size={20} />
					</div>
				</div>
				<div className="hidden lg:flex-1 relative h-[200px] md:h-[300px] lg:h-[400px] w-[200px] md:w-[300px] lg:w-[400px] xl:h-[500px] xl:-top-5 lg:block">
					<TrioeScene />
				</div>
			</div>
		</section>
	);
};

export default Hero;
