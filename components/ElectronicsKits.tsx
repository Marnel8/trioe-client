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
			<PageHeader title="ELECTRONICS KITS" />
			<div className="py-5 flex flex-wrap justify-center lg:flex-nowrap gap-5">
				{kits.map((kit) => (
					<Card
						key={kit.id}
						className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
					>
						<CardHeader className="p-0">
							<div className="relative h-48 md:h-[300px] w-full">
								<Image
									src={kit.thumbnail}
									alt={kit.name}
									layout="fill"
									className="object-cover"
								/>
							</div>
						</CardHeader>
						<CardContent className="flex-grow p-4">
							<div className="flex justify-between items-start mb-2">
								<h3 className="text-xl font-semibold">{kit.name}</h3>
								<Badge variant={"secondary"}>{kit.difficulty}</Badge>
							</div>
							<p className="text-sm text-muted-foreground">{kit.description}</p>
						</CardContent>
						<CardFooter className="p-4">
							<div className="flex space-x-4">
								<Button
									variant="ghost"
									asChild
									size="sm"
									className="pointer-events-auto"
								>
									<Link href={kit.route}>
										Learn More
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
