"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
	ArrowLeft,
	ArrowRight,
	BookOpen,
	CheckCircle2,
	PlayCircle,
	FileText,
	Lightbulb,
	Cpu,
	Microwave,
	Settings,
	Terminal,
} from "lucide-react";

const lesson = {
	title: "Introduction to Microcontrollers",
	sections: [
		{
			id: "overview",
			title: "What is a Microcontroller?",
			content: (
				<div className="space-y-4">
					<p>
						A microcontroller is a compact integrated circuit designed to govern
						the operation of embedded systems. Think of it as a small computer
						on a single chip that includes:
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<Card>
							<CardHeader>
								<CardTitle className="text-lg flex items-center gap-2">
									<Cpu className="h-5 w-5 text-blue-500" />
									Core Components
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="list-disc list-inside space-y-1">
									<li>CPU (Central Processing Unit)</li>
									<li>Memory (RAM and Flash)</li>
									<li>Input/Output Ports</li>
									<li>Timers and Counters</li>
									<li>Communication Interfaces</li>
								</ul>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle className="text-lg flex items-center gap-2">
									<Settings className="h-5 w-5 text-green-500" />
									Key Features
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="list-disc list-inside space-y-1">
									<li>Low Power Consumption</li>
									<li>Real-time Operation</li>
									<li>Integrated Peripherals</li>
									<li>Cost-Effective</li>
									<li>Programmable</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			),
		},
		{
			id: "architecture",
			title: "Architecture Overview",
			content: (
				<div className="space-y-4">
					<p>
						Microcontroller architecture follows a structured design that
						enables efficient embedded system control. The main components work
						together to execute programs and interact with the external world.
					</p>
					<Card className="border-blue-200 bg-blue-50/50">
						<CardHeader>
							<CardTitle className="text-lg">
								Core Architecture Components
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<h4 className="font-semibold">1. CPU Core</h4>
								<p>The brain of the microcontroller that:</p>
								<ul className="list-disc list-inside pl-4">
									<li>Fetches instructions from memory</li>
									<li>Decodes and executes instructions</li>
									<li>Performs arithmetic and logical operations</li>
									<li>Controls program flow</li>
								</ul>
							</div>
							<div className="space-y-2">
								<h4 className="font-semibold">2. Memory System</h4>
								<ul className="list-disc list-inside pl-4">
									<li>Flash Memory: Stores program code</li>
									<li>RAM: Temporary data storage</li>
									<li>EEPROM: Non-volatile data storage</li>
								</ul>
							</div>
							<div className="space-y-2">
								<h4 className="font-semibold">3. Peripheral Subsystems</h4>
								<ul className="list-disc list-inside pl-4">
									<li>Digital I/O ports</li>
									<li>Timer/Counter modules</li>
									<li>Communication interfaces (UART, SPI, I2C)</li>
									<li>Analog interfaces (ADC, DAC)</li>
								</ul>
							</div>
						</CardContent>
					</Card>
				</div>
			),
		},
		{
			id: "applications",
			title: "Common Applications",
			content: (
				<div className="space-y-4">
					<p>
						Microcontrollers are everywhere in our daily lives, powering various
						devices and systems. Here are some common applications:
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<Card>
							<CardHeader>
								<CardTitle className="text-lg flex items-center gap-2">
									<Microwave className="h-5 w-5 text-purple-500" />
									Consumer Electronics
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="list-disc list-inside space-y-1">
									<li>Home Appliances</li>
									<li>Digital Cameras</li>
									<li>Remote Controls</li>
									<li>Smart Home Devices</li>
								</ul>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle className="text-lg flex items-center gap-2">
									<Settings className="h-5 w-5 text-orange-500" />
									Industrial Applications
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="list-disc list-inside space-y-1">
									<li>Motor Control</li>
									<li>Robotics</li>
									<li>Automation Systems</li>
									<li>Sensor Networks</li>
								</ul>
							</CardContent>
						</Card>
					</div>
					<Card className="border-green-200 bg-green-50/50">
						<CardHeader>
							<CardTitle className="text-lg">Emerging Applications</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="list-disc list-inside space-y-2">
								<li>Internet of Things (IoT) Devices</li>
								<li>Wearable Technology</li>
								<li>Smart Agriculture</li>
								<li>Medical Devices</li>
							</ul>
						</CardContent>
					</Card>
				</div>
			),
		},
		{
			id: "setup",
			title: "Development Environment Setup",
			content: (
				<div className="space-y-4">
					<p>
						To start programming microcontrollers, you'll need to set up a
						proper development environment. Here are the essential components:
					</p>
					<Card className="border-purple-200 bg-purple-50/50">
						<CardHeader>
							<CardTitle className="text-lg flex items-center gap-2">
								<Terminal className="h-5 w-5 text-purple-500" />
								Development Tools
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<h4 className="font-semibold">
									1. Integrated Development Environment (IDE)
								</h4>
								<ul className="list-disc list-inside pl-4">
									<li>Code editor with syntax highlighting</li>
									<li>Compiler and build tools</li>
									<li>Debugger interface</li>
									<li>Project management features</li>
								</ul>
							</div>
							<div className="space-y-2">
								<h4 className="font-semibold">2. Hardware Tools</h4>
								<ul className="list-disc list-inside pl-4">
									<li>Development board</li>
									<li>Programmer/Debugger</li>
									<li>USB cable</li>
									<li>Basic electronic components</li>
								</ul>
							</div>
							<div className="space-y-2">
								<h4 className="font-semibold">3. Software Components</h4>
								<ul className="list-disc list-inside pl-4">
									<li>Compiler toolchain</li>
									<li>Device drivers</li>
									<li>Libraries and SDKs</li>
									<li>Documentation and examples</li>
								</ul>
							</div>
						</CardContent>
					</Card>
				</div>
			),
		},
	],
};

export default function LessonPage() {
	const [currentSection, setCurrentSection] = React.useState(0);
	const [progress, setProgress] = React.useState(0);

	React.useEffect(() => {
		setProgress(((currentSection + 1) / lesson.sections.length) * 100);
	}, [currentSection]);

	return (
		<div className="container mx-auto py-8">
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<div className="flex items-center gap-4 mb-8">
					<Button variant="ghost" size="icon" asChild>
						<Link href="/steam-learn/microcontroller">
							<ArrowLeft className="h-6 w-6" />
						</Link>
					</Button>
					<div className="flex-1">
						<h1 className="text-3xl font-bold">{lesson.title}</h1>
						<div className="flex items-center gap-4 mt-2">
							<Progress value={progress} className="flex-1" />
							<span className="text-sm text-muted-foreground">
								{Math.round(progress)}% Complete
							</span>
						</div>
					</div>
				</div>

				{/* Content */}
				<div className="mb-8">
					<Card>
						<CardHeader>
							<div className="flex items-center gap-2">
								<BookOpen className="h-5 w-5 text-green-500" />
								<CardTitle>{lesson.sections[currentSection].title}</CardTitle>
							</div>
						</CardHeader>
						<CardContent>{lesson.sections[currentSection].content}</CardContent>
					</Card>
				</div>

				{/* Navigation */}
				<div className="flex items-center justify-between">
					<Button
						variant="outline"
						onClick={() => setCurrentSection(currentSection - 1)}
						disabled={currentSection === 0}
					>
						<ArrowLeft className="h-4 w-4 mr-2" />
						Previous
					</Button>
					<div className="flex items-center gap-2">
						{lesson.sections.map((_, index) => (
							<Button
								key={index}
								variant={currentSection === index ? "default" : "outline"}
								size="icon"
								className="w-8 h-8"
								onClick={() => setCurrentSection(index)}
							>
								{index + 1}
							</Button>
						))}
					</div>
					{currentSection === lesson.sections.length - 1 ? (
						<Button asChild>
							<Link href="/steam-learn/microcontroller/programming">
								Next Lesson
								<ArrowRight className="h-4 w-4 ml-2" />
							</Link>
						</Button>
					) : (
						<Button onClick={() => setCurrentSection(currentSection + 1)}>
							Next
							<ArrowRight className="h-4 w-4 ml-2" />
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
