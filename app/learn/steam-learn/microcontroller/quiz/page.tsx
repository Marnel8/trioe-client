"use client";

import React, { useState } from "react";
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
import { ArrowLeft, CheckCircle2, RefreshCcw } from "lucide-react";

const quizQuestions = [
	{
		id: 1,
		question:
			"What is the main difference between a microcontroller and a microprocessor?",
		options: [
			"Clock speed",
			"Programming language used",
			"Integrated peripherals",
			"Physical size",
		],
		correctAnswer: "Integrated peripherals",
		explanation:
			"Microcontrollers include integrated peripherals (memory, I/O, timers) on a single chip, while microprocessors require external components for these functions.",
	},
	{
		id: 2,
		question:
			"Which statement correctly describes the volatile keyword in embedded C programming?",
		options: [
			"It makes variables faster to access",
			"It prevents variables from being modified",
			"It tells the compiler the variable can change unexpectedly",
			"It stores variables in program memory",
		],
		correctAnswer: "It tells the compiler the variable can change unexpectedly",
		explanation:
			"The volatile keyword indicates that a variable's value may change without direct code action, important for hardware registers and ISRs.",
	},
	{
		id: 3,
		question: "What is the purpose of an Interrupt Service Routine (ISR)?",
		options: [
			"To initialize the microcontroller",
			"To handle asynchronous events",
			"To store program variables",
			"To configure clock speed",
		],
		correctAnswer: "To handle asynchronous events",
		explanation:
			"ISRs are special functions that handle asynchronous events (interrupts) that require immediate attention from the microcontroller.",
	},
	{
		id: 4,
		question: "In I2C communication, what are SDA and SCL?",
		options: [
			"Power supply pins",
			"Data and Clock lines",
			"Reset pins",
			"Analog inputs",
		],
		correctAnswer: "Data and Clock lines",
		explanation:
			"In I2C protocol, SDA (Serial Data) carries data and SCL (Serial Clock) provides timing synchronization between devices.",
	},
	{
		id: 5,
		question: "What is the main advantage of using PWM?",
		options: [
			"Reduced power consumption",
			"Faster processing speed",
			"Digital signal control",
			"Analog signal simulation",
		],
		correctAnswer: "Analog signal simulation",
		explanation:
			"PWM (Pulse Width Modulation) can simulate analog signals using digital pulses, useful for controlling motors, LEDs, and other analog devices.",
	},
	{
		id: 6,
		question:
			"Which memory type is typically used to store the program code in a microcontroller?",
		options: ["RAM", "Flash", "EEPROM", "Cache"],
		correctAnswer: "Flash",
		explanation:
			"Flash memory is non-volatile and can be electrically erased and reprogrammed, making it ideal for storing program code in microcontrollers.",
	},
	{
		id: 7,
		question: "What is the purpose of a watchdog timer?",
		options: [
			"To measure execution time",
			"To generate precise delays",
			"To reset the system if it hangs",
			"To count external events",
		],
		correctAnswer: "To reset the system if it hangs",
		explanation:
			"A watchdog timer resets the microcontroller if the program fails to clear it periodically, preventing system lockups.",
	},
	{
		id: 8,
		question:
			"Which communication protocol is best suited for long-distance communication?",
		options: ["SPI", "I2C", "UART", "Parallel"],
		correctAnswer: "UART",
		explanation:
			"UART (Universal Asynchronous Receiver/Transmitter) is better suited for longer distances due to its simple two-wire interface and noise resistance.",
	},
	{
		id: 9,
		question: "What is the purpose of the ADC in a microcontroller?",
		options: [
			"To convert digital to analog signals",
			"To convert analog to digital signals",
			"To amplify signals",
			"To filter signals",
		],
		correctAnswer: "To convert analog to digital signals",
		explanation:
			"The Analog-to-Digital Converter (ADC) converts analog voltage levels into digital values that the microcontroller can process.",
	},
	{
		id: 10,
		question:
			"Which power-saving technique halts the CPU but keeps peripherals running?",
		options: ["Sleep mode", "Deep sleep mode", "Idle mode", "Power-down mode"],
		correctAnswer: "Idle mode",
		explanation:
			"Idle mode stops the CPU clock while keeping peripheral clocks running, allowing interrupts to wake the system while saving power.",
	},
];

export default function QuizPage() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState("");
	const [showResult, setShowResult] = useState(false);
	const [score, setScore] = useState(0);
	const [answeredQuestions, setAnsweredQuestions] = useState(new Set());

	const handleAnswer = (value: string) => {
		setSelectedAnswer(value);
		const newAnsweredQuestions = new Set(answeredQuestions);
		newAnsweredQuestions.add(currentQuestion);
		setAnsweredQuestions(newAnsweredQuestions);

		if (value === quizQuestions[currentQuestion].correctAnswer) {
			setScore(score + 1);
		}
	};

	const nextQuestion = () => {
		if (currentQuestion < quizQuestions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
			setSelectedAnswer("");
		} else {
			setShowResult(true);
		}
	};

	const resetQuiz = () => {
		setCurrentQuestion(0);
		setSelectedAnswer("");
		setShowResult(false);
		setScore(0);
		setAnsweredQuestions(new Set());
	};

	const progress = (answeredQuestions.size / quizQuestions.length) * 100;

	if (showResult) {
		return (
			<div className="container mx-auto max-w-4xl p-4 space-y-4">
				<Card>
					<CardHeader>
						<CardTitle>Quiz Results</CardTitle>
						<CardDescription>Microcontroller Programming Quiz</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 p-4 rounded-lg">
							<div className="flex items-center gap-2 text-green-800 dark:text-green-300 font-semibold">
								<CheckCircle2 className="h-5 w-5" />
								<h5>Quiz Completed!</h5>
							</div>
							<p className="mt-2 text-green-700 dark:text-green-400">
								You scored {score} out of {quizQuestions.length} questions
								correctly.
							</p>
						</div>
						<Button onClick={resetQuiz} className="w-full">
							<RefreshCcw className="mr-2 h-4 w-4" /> Retake Quiz
						</Button>
					</CardContent>
					<CardFooter>
						<Link href="/steam-learn/microcontroller" className="w-full">
							<Button variant="outline" className="w-full">
								<ArrowLeft className="mr-2 h-4 w-4" /> Back to Module
							</Button>
						</Link>
					</CardFooter>
				</Card>
			</div>
		);
	}

	return (
		<div className="container mx-auto max-w-4xl p-4 space-y-4">
			<Card>
				<CardHeader>
					<CardTitle>Microcontroller Programming Quiz</CardTitle>
					<CardDescription>
						Test your knowledge of microcontroller concepts, programming, and
						applications
					</CardDescription>
					<Progress value={progress} className="w-full" />
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="text-lg font-medium">
						Question {currentQuestion + 1} of {quizQuestions.length}
					</div>
					<div className="text-xl mb-4">
						{quizQuestions[currentQuestion].question}
					</div>
					<div className="space-y-2">
						{quizQuestions[currentQuestion].options.map((option) => (
							<button
								key={option}
								onClick={() => handleAnswer(option)}
								className={`w-full flex items-center space-x-2 border p-4 rounded-lg hover:bg-muted transition-colors
                  ${
										selectedAnswer === option
											? "bg-primary/10 border-primary"
											: "hover:bg-muted"
									}
                `}
							>
								<div
									className={`w-4 h-4 rounded-full border ${
										selectedAnswer === option
											? "border-primary bg-primary"
											: "border-gray-400"
									}`}
								>
									{selectedAnswer === option && (
										<div className="w-2 h-2 bg-white rounded-full m-0.5" />
									)}
								</div>
								<span>{option}</span>
							</button>
						))}
					</div>
					{selectedAnswer && (
						<div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900 p-4 rounded-lg mt-4">
							<h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-1">
								Explanation
							</h5>
							<p className="text-blue-700 dark:text-blue-400">
								{quizQuestions[currentQuestion].explanation}
							</p>
						</div>
					)}
				</CardContent>
				<CardFooter className="flex justify-between">
					<Link href="/steam-learn/microcontroller">
						<Button variant="outline">
							<ArrowLeft className="mr-2 h-4 w-4" /> Back to Module
						</Button>
					</Link>
					<Button onClick={nextQuestion} disabled={!selectedAnswer}>
						{currentQuestion === quizQuestions.length - 1
							? "Finish Quiz"
							: "Next Question"}
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
