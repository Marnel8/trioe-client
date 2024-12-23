"use client";

import { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	Github,
	Youtube,
	Calendar,
	User,
	ThumbsUp,
	Code,
	Layers,
} from "lucide-react";
import { useGetProjectById } from "@/hooks/community/useGetProjectById";
import Image from "next/image";
import { getImageUrl } from "@/utils/imageUtils";
import HeroVideoDialog from "../ui/hero-video-dialog";

export default function ProjectDetails({ projectId }: { projectId: string }) {
	const { data: projectData, isPending: isProjectDetailsPending } =
		useGetProjectById(projectId);

	// const handleLike = () => {
	// 	// In a real application, you would call an API to update the likes
	// };

	return (
		<div className="container mx-auto px-4 py-8">
			<Card className="w-full max-w-4xl mx-auto">
				<CardHeader>
					<div className="flex justify-between items-start">
						<div>
							<CardTitle className="text-3xl mb-2">
								{projectData?.project?.title}
							</CardTitle>
							<CardDescription className="text-lg">
								<Badge variant="secondary" className="mr-2 uppercase">
									{projectData?.project?.category}
								</Badge>
								<span className="inline-flex items-center">
									<User className="w-4 h-4 mr-1" />
									{projectData?.project?.author?.firstName}{" "}
									{projectData?.project?.author?.lastName}
								</span>
							</CardDescription>
						</div>
						<div className="text-right">
							<p className="text-sm text-muted-foreground flex items-center justify-end">
								<Calendar className="w-4 h-4 mr-1" />
								{new Date(projectData?.project?.createdAt).toLocaleDateString()}
							</p>
							<Button
								variant="outline"
								size="sm"
								className="mt-2"
								// onClick={handleLike}
							>
								<ThumbsUp className="w-4 h-4 mr-1" />
								{projectData?.project?.likes.length} Likes
							</Button>
						</div>
					</div>
				</CardHeader>
				<CardContent className="space-y-6">
					<div>
						<h3 className="text-lg font-semibold mb-2">Description</h3>
						<p>{projectData?.project?.description}</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-2 flex items-center">
							<Code className="w-5 h-5 mr-2" />
							Components Used
						</h3>
						<p>{projectData?.project?.componentsUsed}</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-2">Instructions</h3>
						<Accordion type="single" collapsible className="w-full">
							{projectData?.project?.instructions.map(
								(instruction: any, index: number) => (
									<AccordionItem
										key={instruction.id}
										value={`step-${index + 1}`}
									>
										<AccordionTrigger>Step {index + 1}</AccordionTrigger>
										<AccordionContent>
											{instruction.text}
											{instruction.imagePath && (
												<Image
													src={getImageUrl(instruction.imagePath)}
													alt={`Step ${index + 1}`}
													className="mt-2"
													width={300}
													height={300}
												/>
											)}
										</AccordionContent>
									</AccordionItem>
								)
							)}
						</Accordion>
					</div>
				</CardContent>
				<CardFooter className="flex justify-between">
					{projectData?.project?.githubLink && (
						<Button variant="outline" asChild>
							<a
								href={projectData?.project.githubLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github className="w-4 h-4 mr-2" />
								View on GitHub
							</a>
						</Button>
					)}
					{projectData?.project?.demoVideo && (
						<div className="relative">
							<HeroVideoDialog
								className="dark:hidden block"
								animationStyle="from-center"
								videoSrc={getImageUrl(projectData?.project?.demoVideo)}
								thumbnailSrc="/images/video_thumbnail.png"
								thumbnailAlt="Hero Video"
							/>
							{/* <HeroVideoDialog    
								className="hidden dark:block"
								animationStyle="from-center"
								videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
								thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
								thumbnailAlt="Hero Video"
							/> */}
						</div>
					)}
				</CardFooter>
			</Card>
		</div>
	);
}
