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
import { Progress } from "@/components/ui/progress";
import {
	ArrowLeft,
	ArrowRight,
	BookOpen,
	Code,
	FileCode,
	Binary,
} from "lucide-react";

const lesson = {
	title: "Basic Programming",
	sections: [
		{
			id: "digital-io",
			title: "Digital I/O Operations",
			content: (
				<div className="space-y-4">
					<p>
						Digital Input/Output (I/O) operations are fundamental to
						microcontroller programming. They allow the microcontroller to
						interact with the external world through pins that can be set as
						either inputs or outputs.
					</p>
					<Card className="border-blue-200 bg-blue-50/50">
						<CardHeader>
							<CardTitle className="text-lg">Digital I/O Basics</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<h4 className="font-semibold">1. Pin Configuration</h4>
								<div className="bg-white/50 p-4 rounded-md">
									<pre className="text-sm overflow-x-auto">
										{`// Set pin as output
pinMode(LED_PIN, OUTPUT);

// Set pin as input
pinMode(BUTTON_PIN, INPUT);`}
									</pre>
								</div>
							</div>
							<div className="space-y-2">
								<h4 className="font-semibold">2. Digital Output</h4>
								<div className="bg-white/50 p-4 rounded-md">
									<pre className="text-sm overflow-x-auto">
										{`// Turn LED on
digitalWrite(LED_PIN, HIGH);

// Turn LED off
digitalWrite(LED_PIN, LOW);`}
									</pre>
								</div>
							</div>
							<div className="space-y-2">
								<h4 className="font-semibold">3. Digital Input</h4>
								<div className="bg-white/50 p-4 rounded-md">
									<pre className="text-sm overflow-x-auto">
										{`// Read button state
int buttonState = digitalRead(BUTTON_PIN);

if (buttonState == HIGH) {
    // Button is pressed
    digitalWrite(LED_PIN, HIGH);
}`}
									</pre>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			),
		},
		{
			id: "variables",
			title: "Variables and Data Types",
			content: (
				<div className="space-y-4">
					<p>
						Understanding variables and data types is crucial for efficient
						microcontroller programming. Different data types use different
						amounts of memory and are suitable for different purposes.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">Basic Data Types</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2">
									<li>
										<code>bool</code>: 1 byte (true/false)
									</li>
									<li>
										<code>byte</code>: 1 byte (0-255)
									</li>
									<li>
										<code>int</code>: 2 bytes (-32,768 to 32,767)
									</li>
									<li>
										<code>long</code>: 4 bytes (±2,147,483,647)
									</li>
									<li>
										<code>float</code>: 4 bytes (decimal numbers)
									</li>
								</ul>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">Special Modifiers</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2">
									<li>
										<code>volatile</code>: For ISR variables
									</li>
									<li>
										<code>const</code>: For constants
									</li>
									<li>
										<code>static</code>: Preserve value
									</li>
									<li>
										<code>unsigned</code>: Positive only
									</li>
								</ul>
							</CardContent>
						</Card>
					</div>
					<div className="bg-white/50 p-4 rounded-md">
						<pre className="text-sm overflow-x-auto">
							{`// Variable declarations
const int LED_PIN = 13;
volatile int sensorValue = 0;
unsigned long lastTime = 0;
static int counter = 0;`}
						</pre>
					</div>
				</div>
			),
		},
		{
			id: "control",
			title: "Control Structures",
			content: (
				<div className="space-y-4">
					<p>
						Control structures determine the flow of program execution. They
						allow you to make decisions and repeat actions based on conditions.
					</p>
					<Card className="border-green-200 bg-green-50/50">
						<CardHeader>
							<CardTitle className="text-lg">
								Common Control Structures
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<h4 className="font-semibold">1. Conditional Statements</h4>
								<div className="bg-white/50 p-4 rounded-md">
									<pre className="text-sm overflow-x-auto">
										{`// If-else statement
if (sensorValue > threshold) {
    digitalWrite(LED_PIN, HIGH);
} else {
    digitalWrite(LED_PIN, LOW);
}

// Switch statement
switch (mode) {
    case 1:
        // Mode 1 operations
        break;
    case 2:
        // Mode 2 operations
        break;
    default:
        // Default operations
}`}
									</pre>
								</div>
							</div>
							<div className="space-y-2">
								<h4 className="font-semibold">2. Loops</h4>
								<div className="bg-white/50 p-4 rounded-md">
									<pre className="text-sm overflow-x-auto">
										{`// For loop
for (int i = 0; i < 5; i++) {
    digitalWrite(LED_PIN, HIGH);
    delay(100);
    digitalWrite(LED_PIN, LOW);
    delay(100);
}

// While loop
while (buttonPressed) {
    // Repeat actions
    checkSensors();
}

// Do-while loop
do {
    readSensor();
} while (sensorValue < threshold);`}
									</pre>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			),
		},
		{
			id: "functions",
			title: "Functions and Libraries",
			content: (
				<div className="space-y-4">
					<p>
						Functions help organize code into reusable blocks, while libraries
						provide pre-written code for common tasks. Understanding both is
						essential for efficient programming.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">Function Basics</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="bg-white/50 p-4 rounded-md">
									<pre className="text-sm overflow-x-auto">
										{`// Function declaration
void blinkLED(int times) {
    for (int i = 0; i < times; i++) {
        digitalWrite(LED_PIN, HIGH);
        delay(100);
        digitalWrite(LED_PIN, LOW);
        delay(100);
    }
}

// Function with return value
int readSensorAverage() {
    int sum = 0;
    for (int i = 0; i < 10; i++) {
        sum += analogRead(SENSOR_PIN);
        delay(10);
    }
    return sum / 10;
}`}
									</pre>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">Using Libraries</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="bg-white/50 p-4 rounded-md">
									<pre className="text-sm overflow-x-auto">
										{`// Include libraries
#include <Wire.h>
#include <SPI.h>

// Initialize objects
Wire.begin();
SPI.begin();

// Use library functions
Wire.beginTransmission(address);
Wire.write(data);
Wire.endTransmission();`}
									</pre>
								</div>
							</CardContent>
						</Card>
					</div>
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
							<Link href="/steam-learn/microcontroller/timers">
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
