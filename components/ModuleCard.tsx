"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import ShinyButton from "./ui/shiny-button";
import { useRouter } from "next/navigation";

const ModuleCard = ({
	title,
	description,
	imageSrc,
	route,
}: {
	title: string;
	description: string;
	imageSrc: string;
	route: string;
}) => {
	const router = useRouter();
	const getGlowColor = () => {
		if (title.includes("STEAM")) return "hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] hover:border-red-400/50";
		if (title.includes("Agri-Aqua")) return "hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] hover:border-green-400/50";
		return "hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] hover:border-yellow-400/50";
	};

	const getTitleColor = () => {
		if (title.includes("STEAM")) return "group-hover:text-red-500";
		if (title.includes("Agri-Aqua")) return "group-hover:text-green-500";
		return "group-hover:text-yellow-500";
	};

	const getGradientBackground = () => {
		if (title.includes("STEAM")) {
			return "bg-gradient-to-br from-red-400/30 to-red-600/30";
		}
		if (title.includes("Agri-Aqua")) {
			return "bg-gradient-to-br from-green-400/30 to-green-600/30";
		}
		return "bg-gradient-to-br from-yellow-300/30 to-yellow-500/30";
	};

	return (
		<div className={`rounded-xl p-6 z-10 w-full max-w-[350px] max-h-[480px] lg:max-h-[600px] bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] overflow-hidden transition-all duration-500 ease-in-out hover:-translate-y-2 group ${getGlowColor()}`}>
			<div className={`w-full h-[200px] sm:h-[240px] md:h-[170px] rounded-xl relative transition-transform duration-500 group-hover:scale-[1.02] ${getGradientBackground()}`}>
				<div className="absolute bg-white w-full h-[220px] sm:h-[260px] md:h-[200px] rounded-xl max-w-[93%] left-1/2 top-3 sm:top-5 -translate-x-1/2 shadow-md transition-transform duration-500 group-hover:scale-[1.01]">
					<Image
						src={imageSrc}
						alt="module-card"
						fill
						className="object-cover rounded-xl m-auto shadow-md transition-transform duration-500 group-hover:scale-[1.01]"
					/>
				</div>
			</div>
			<div className="flex flex-col gap-2 mt-[40px] sm:mt-[50px] md:mt-[60px]">
				<h3 className={`text-2xl sm:text-3xl font-bold transition-colors duration-500 ${getTitleColor()}`}>{title}</h3>
				<p className="text-xs sm:text-sm text-gray-500 transition-colors duration-500 group-hover:text-gray-700">{description}</p>
			</div>
			<ShinyButton
				className={`w-full mt-4 sm:mt-5 p-4 rounded-full text-sm sm:text-base transition-all duration-500 ${
					title.includes("STEAM")
						? "hover:bg-red-500/10"
						: title.includes("Agri-Aqua")
						? "hover:bg-green-500/10"
						: "hover:bg-yellow-500/10"
				}`}
				onClick={() => router.push(route)}
			>
				Start Learning
			</ShinyButton>
		</div>
	);
};

export default ModuleCard;
