import { notFound } from "next/navigation";
import Image from "next/image";
import { ChevronRight, Clock, User } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ProjectGallery } from "@/components/community/project/project-gallery";
import { ProjectInstructions } from "@/components/community/project/project-instructions";
import { ProjectComments } from "@/components/community/project/project-comments";

// This would typically come from your database
const project = {
	id: "1",
	title: "Arduino-Powered Smart Garden",
	category: "STEAM",
	description:
		"An automated garden system using Arduino to monitor soil moisture, light levels, and temperature, with automatic watering and lighting control.",
	author: "Jane Doe",
	dateCreated: "2023-06-15",
	components: [
		"Arduino Uno",
		"Soil Moisture Sensor",
		"Light Sensor (LDR)",
		"Temperature Sensor (DHT11)",
		"Water Pump",
		"Relay Module",
		"LED Grow Lights",
		"Jumper Wires",
		"Breadboard",
	],
	instructions: [
		{
			step: 1,
			text: "Connect the soil moisture sensor to the Arduino.",
			image: "/placeholder.svg?height=400&width=600",
		},
		{
			step: 2,
			text: "Wire up the light sensor (LDR) to the Arduino.",
			image: "/placeholder.svg?height=400&width=600",
		},
		{
			step: 3,
			text: "Connect the temperature sensor (DHT11) to the Arduino.",
			image: "/placeholder.svg?height=400&width=600",
		},
		// Add more steps as needed
	],
	images: [
		"/placeholder.svg?height=400&width=600",
		"/placeholder.svg?height=400&width=600",
		"/placeholder.svg?height=400&width=600",
	],
	video: "/placeholder-video.mp4",
};

export default function ProjectPage() {
	//   if (params.id !== project.id) {
	//     notFound();
	//   }

	return (
		<div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
			<div className="flex flex-col gap-6">
				<div className="flex items-center text-sm text-muted-foreground">
					<a href="/projects" className="hover:underline">
						Projects
					</a>
					<ChevronRight className="h-4 w-4 mx-1" />
					<span>{project.category}</span>
					<ChevronRight className="h-4 w-4 mx-1" />
					<span className="font-medium text-foreground">{project.title}</span>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2">
						<Card>
							<CardHeader>
								<div className="flex justify-between items-start">
									<div>
										<CardTitle className="text-3xl font-bold mb-2">
											{project.title}
										</CardTitle>
										<CardDescription className="text-lg">
											{project.description}
										</CardDescription>
									</div>
									<Badge variant="secondary" className="text-sm">
										{project.category}
									</Badge>
								</div>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
									<div className="flex items-center">
										<User className="h-4 w-4 mr-1" />
										{project.author}
									</div>
									<div className="flex items-center">
										<Clock className="h-4 w-4 mr-1" />
										{new Date(project.dateCreated).toLocaleDateString()}
									</div>
								</div>
								<Tabs defaultValue="gallery" className="w-full">
									<TabsList className="w-full justify-start">
										<TabsTrigger value="gallery">Gallery</TabsTrigger>
										<TabsTrigger value="instructions">Instructions</TabsTrigger>
										<TabsTrigger value="comments">Comments</TabsTrigger>
									</TabsList>
									<TabsContent value="gallery">
										<ProjectGallery
											images={project.images}
											video={project.video}
										/>
									</TabsContent>
									<TabsContent value="instructions">
										<ProjectInstructions instructions={project.instructions} />
									</TabsContent>
									<TabsContent value="comments">
										<ProjectComments projectId={project.id} />
									</TabsContent>
								</Tabs>
							</CardContent>
						</Card>
					</div>

					<div>
						<Card>
							<CardHeader>
								<CardTitle>Components Used</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="list-disc pl-5 space-y-2">
									{project.components.map((component, index) => (
										<li key={index}>{component}</li>
									))}
								</ul>
							</CardContent>
						</Card>
						<div className="mt-6">
							<Button className="w-full">Try This Project</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
