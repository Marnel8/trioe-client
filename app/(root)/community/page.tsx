import React from "react";
import ProjectGallery from "@/components/ProjectGallery";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { RainbowButton } from "@/components/ui/rainbow-button";
import TypingAnimation from "@/components/ui/typing-animation";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Community",
	description:
		"Join the TRIOE community to advance STEM education through collaboration, innovation, and shared knowledge.",
	openGraph: {
		title: "TRIOE Community | Advancing STEM Education Together",
		description:
			"Join a vibrant community of innovators and educators advancing STEM education through collaboration, shared knowledge, and hands-on learning experiences.",
		type: "website",
		url: "https://trioe.dev/community",
	},
};

const CommunityPage = () => {
	return (
		<section className="container mx-auto">
			<div className="min-h-screen flex items-center justify-center">
				<AnimatedGridPattern
					numSquares={300}
					maxOpacity={0.1}
					duration={3}
					repeatDelay={1}
					className={cn(
						"[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
						"inset-x-0 inset-y-[-50%] h-[200%] z-[-1] absolute pointer-events-none"
					)}
				/>
				<div className="flex flex-col items-center justify-center">
					<div className="hero-content w-full text-white">
						<TypingAnimation
							duration={50}
							className="text-[14px] md:max-w-[600px] text-gray-500 xl:text-lg text-center lg:text-left tracking-wider font-geist font-medium"
							as={"h2"}
						>
							Welcome to
						</TypingAnimation>
						<TypingAnimation
							duration={100}
							delay={1000}
							className="text-4xl md:text-8xl tracking-wider text-black text-center  font-geist font-bold "
							as="h1"
						>
							TRIOE COMMUNITY
						</TypingAnimation>
						<TypingAnimation
							duration={50}
							delay={2200}
							className="text-[14px] md:max-w-[900px] text-gray-500 xl:text-lg text-center tracking-wider font-geist font-medium"
						>
							Join a vibrant community advancing STEM education through
							collaboration, innovation, and shared knowledge.
						</TypingAnimation>
						<div className="font-geistMono ">
							<Link href="/sign-in">
								<RainbowButton
									className={cn(
										"bg-primary-gradient text-sm rounded-full px-5 w-[200px] tracking-wide mt-5"
									)}
								>
									Join Community
								</RainbowButton>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="container mx-auto p-4">
				<ProjectGallery />
			</div>
		</section>
	);
};

export default CommunityPage;
