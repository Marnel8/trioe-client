"use client";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PageHeader from "./PageHeader";

import { ArrowRightIcon } from "lucide-react";
import { kits } from "@/constants";
import Link from "next/link";

const ElectronicsKits = () => {
	return (
		<section className="flex flex-col items-center">
			<PageHeader
				title="TRIOE KITS"
				description="Innovative kits designed to spark curiosity and enable creative tinkering."
			/>
			<div className="py-5 flex flex-wrap justify-center lg:flex-nowrap gap-5">
				{kits.map((kit) => (
					<Card
						key={kit.id}
						className={`rounded-xl flex flex-col justify-between p-6 z-10 max-w-[350px] max-h-[480px] bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] overflow-hidden transition-all duration-500 ease-in-out hover:-translate-y-2 group ${
							kit.name.includes("AGRI-AQUA")
								? "hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] hover:border-green-400/50"
								: kit.name.includes("STEAM")
								? "hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] hover:border-red-400/50"
								: "hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] hover:border-yellow-400/50"
						}`}
					>
						<CardHeader className="p-0">
							<div className="relative h-48 md:h-[200px] w-full">
								<Image
									src={kit.thumbnail}
									alt={kit.name}
									fill
									className="object-contain rounded-xl"
								/>
							</div>
						</CardHeader>
						<CardContent
							className="flex-grow p-2"
						>
							<div className="flex justify-between items-start mb-2">
								<h3 className={`text-xl font-semibold transition-colors duration-500 ${
									kit.name.includes("AGRI-AQUA")
										? "group-hover:text-green-500"
										: kit.name.includes("STEAM")
										? "group-hover:text-red-500"
										: "group-hover:text-yellow-500"
								}`}>{kit.name}</h3>
								<Badge variant={"secondary"}>{kit.difficulty}</Badge>
							</div>
							<p className="text-sm text-muted-foreground">{kit.description}</p>
						</CardContent>
						<CardFooter className="p-2 flex ">
							<div className="flex space-x-4">
								<Button
									variant="ghost"
									asChild
									size="sm"
									className={`pointer-events-auto transition-all duration-500 ${
										kit.name.includes("AGRI-AQUA")
											? "hover:text-green-500"
											: kit.name.includes("STEAM")
											? "hover:text-red-500"
											: "hover:text-yellow-500"
									}`}
								>
									<Link href={kit.route}>
										View Details
										<ArrowRightIcon className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
			<div className="text-center mt-8">
				<Button variant="outline" size="lg">
					View All Kits
				</Button>
			</div>
		</section>
	);
};

export default ElectronicsKits;
