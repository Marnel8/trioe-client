"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fish } from "lucide-react";
import Link from "next/link";

const lessons = [
	{
		title: "Fish Species Selection",
		description: "Learn about different fish species suitable for aquaculture",
		href: "/agri-aqua-learn/aquaculture/species",
		duration: "30-45 minutes",
	},
	{
		title: "Water Quality Management",
		description: "Essential parameters and maintenance for aquaculture systems",
		href: "/agri-aqua-learn/aquaculture/water-quality",
		duration: "30-45 minutes",
	},
	{
		title: "Feeding Systems",
		description: "Understanding fish nutrition and feeding practices",
		href: "/agri-aqua-learn/aquaculture/feeding",
		duration: "30-45 minutes",
	},
	{
		title: "Disease Prevention",
		description: "Common diseases and preventive measures in aquaculture",
		href: "/agri-aqua-learn/aquaculture/disease-prevention",
		duration: "30-45 minutes",
	},
];

export default function AquaculturePage() {
	return (
		<div className="container mx-auto py-8">
			<div className="mb-8">
				<div className="flex items-center gap-2 mb-4">
					<Fish className="h-8 w-8 text-cyan-500" />
					<h2 className="text-4xl font-bold">Aquaculture Basics</h2>
				</div>
				<p className="text-muted-foreground text-lg">
					Master the fundamentals of fish farming and aquaculture systems.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{lessons.map((lesson) => (
					<Card key={lesson.title}>
						<CardHeader>
							<CardTitle>{lesson.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground mb-4">{lesson.description}</p>
							<p className="text-sm text-muted-foreground mb-4">
								Duration: {lesson.duration}
							</p>
							<Button asChild className="w-full">
								<Link href={lesson.href}>Start Lesson</Link>
							</Button>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
