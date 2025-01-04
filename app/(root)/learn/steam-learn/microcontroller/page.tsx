"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ArrowRight,
	Cpu,
	Code,
	Timer,
	Wifi,
	Zap,
	CheckCircle2,
} from "lucide-react";

const topics = [
	{
		title: "Introduction to Microcontrollers",
		description: "Learn about microcontroller architecture and basic concepts",
		icon: Cpu,
		href: "/learn/steam-learn/microcontroller/introduction",
		lessons: [
			"What is a Microcontroller?",
			"Architecture Overview",
			"Common Applications",
			"Development Environment Setup",
		],
	},
	{
		title: "Basic Programming",
		description: "Master fundamental programming concepts for microcontrollers",
		icon: Code,
		href: "/learn/steam-learn/microcontroller/programming",
		lessons: [
			"Digital I/O Operations",
			"Variables and Data Types",
			"Control Structures",
			"Functions and Libraries",
		],
	},
	{
		title: "Timers and Interrupts",
		description: "Understand timing control and interrupt handling",
		icon: Timer,
		href: "/learn/steam-learn/microcontroller/timers",
		lessons: [
			"Timer Configurations",
			"Interrupt Types",
			"Interrupt Service Routines",
			"Real-time Applications",
		],
	},
	{
		title: "Communication Protocols",
		description: "Learn various communication methods between devices",
		icon: Wifi,
		href: "/learn/steam-learn/microcontroller/communication",
		lessons: [
			"UART Communication",
			"SPI Protocol",
			"I2C Interface",
			"Network Connectivity",
		],
	},
	{
		title: "Advanced Topics",
		description: "Explore advanced microcontroller features and applications",
		icon: Zap,
		href: "/learn/steam-learn/microcontroller/advanced",
		lessons: [
			"ADC and DAC",
			"PWM Control",
			"Low Power Modes",
			"Project Implementation",
		],
	},
];

export default function MicrocontrollerPage() {
	return (
		<div className="container mx-auto py-8">
			<div className="max-w-4xl mx-auto">
				<div className="mb-8">
					<h1 className="text-3xl font-bold mb-2">
						Microcontroller Programming
					</h1>
					<p className="text-muted-foreground">
						Learn to program and control microcontrollers for embedded systems
						and IoT applications.
					</p>
				</div>

				<div className="grid gap-6">
					{topics.map((topic, index) => (
						<Card key={index}>
							<CardHeader>
								<div className="flex items-center gap-4">
									<div className="p-2 bg-primary/10 rounded-lg">
										<topic.icon className="h-6 w-6 text-primary" />
									</div>
									<div>
										<CardTitle>{topic.title}</CardTitle>
										<CardDescription>{topic.description}</CardDescription>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2">
									{topic.lessons.map((lesson, lessonIndex) => (
										<li key={lessonIndex} className="flex items-center gap-2">
											<CheckCircle2 className="h-4 w-4 text-green-500" />
											<span>{lesson}</span>
										</li>
									))}
								</ul>
							</CardContent>
							<CardFooter>
								<Link href={topic.href} className="w-full">
									<Button className="w-full">
										Start Learning
										<ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</Link>
							</CardFooter>
						</Card>
					))}

					{/* Module Quiz */}
					<Card>
						<CardHeader>
							<div className="flex items-center gap-4">
								<div className="p-2 bg-primary/10 rounded-lg">
									<CheckCircle2 className="h-6 w-6 text-primary" />
								</div>
								<div>
									<CardTitle>Module Quiz</CardTitle>
									<CardDescription>
										Test your knowledge of microcontroller programming
									</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardFooter>
							<Link href="/learn/steam-learn/microcontroller/quiz" className="w-full">
								<Button className="w-full">
									Take Quiz
									<ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</Link>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	);
}
