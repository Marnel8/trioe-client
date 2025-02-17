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
    question: "What is the unit of electrical current?",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    correctAnswer: "Ampere",
    explanation: "Current is measured in Amperes (A), which represents the flow of electric charge per unit time.",
  },
  {
    id: 2,
    question: "Which component restricts the flow of electric current in a circuit?",
    options: ["Capacitor", "Resistor", "Inductor", "Battery"],
    correctAnswer: "Resistor",
    explanation: "Resistors are components that provide electrical resistance, limiting current flow in a circuit.",
  },
  {
    id: 3,
    question: "What does V = IR represent?",
    options: ["Newton's Law", "Ohm's Law", "Kirchhoff's Law", "Faraday's Law"],
    correctAnswer: "Ohm's Law",
    explanation: "Ohm's Law states that voltage (V) equals current (I) multiplied by resistance (R).",
  },
  {
    id: 4,
    question: "Which of these is a source of electrical energy?",
    options: ["LED", "Battery", "Resistor", "Switch"],
    correctAnswer: "Battery",
    explanation: "A battery converts chemical energy into electrical energy, providing power to circuits.",
  },
  {
    id: 5,
    question: "What is the purpose of a ground connection in a circuit?",
    options: [
      "To increase voltage",
      "To provide a reference point for voltage measurement",
      "To increase current flow",
      "To store energy"
    ],
    correctAnswer: "To provide a reference point for voltage measurement",
    explanation: "Ground serves as a common reference point for voltage measurements in circuits.",
  },
  {
    id: 6,
    question: "What happens to the total resistance in a series circuit when you add more resistors?",
    options: ["Decreases", "Stays the same", "Increases", "Becomes zero"],
    correctAnswer: "Increases",
    explanation: "In a series circuit, total resistance is the sum of all individual resistances. Adding more resistors increases the total resistance.",
  },
  {
    id: 7,
    question: "What component is used to store electrical charge?",
    options: ["Resistor", "Inductor", "Capacitor", "Diode"],
    correctAnswer: "Capacitor",
    explanation: "Capacitors store electrical energy in an electric field between two conductive plates separated by an insulator.",
  },
  {
    id: 8,
    question: "Which component allows current to flow in only one direction?",
    options: ["Resistor", "Capacitor", "Transistor", "Diode"],
    correctAnswer: "Diode",
    explanation: "Diodes are semiconductor devices that allow current to flow in one direction while blocking it in the opposite direction.",
  },
  {
    id: 9,
    question: "What is the unit of electrical resistance?",
    options: ["Volt", "Ampere", "Watt", "Ohm"],
    correctAnswer: "Ohm",
    explanation: "Resistance is measured in Ohms (Ω), which represents how much a material opposes the flow of electric current.",
  },
  {
    id: 10,
    question: "In a parallel circuit, what happens to the voltage across each branch?",
    options: ["Increases", "Decreases", "Remains the same", "Becomes zero"],
    correctAnswer: "Remains the same",
    explanation: "In a parallel circuit, the voltage across each parallel branch is equal to the source voltage.",
  },
  {
    id: 11,
    question: "What does LED stand for?",
    options: ["Light Emitting Device", "Light Enabling Diode", "Light Emitting Diode", "Light Energy Device"],
    correctAnswer: "Light Emitting Diode",
    explanation: "LED (Light Emitting Diode) is a semiconductor device that emits light when current flows through it.",
  },
  {
    id: 12,
    question: "Which law states that the sum of all currents entering a node equals the sum of currents leaving it?",
    options: ["Ohm's Law", "Faraday's Law", "Kirchhoff's Current Law", "Newton's Law"],
    correctAnswer: "Kirchhoff's Current Law",
    explanation: "Kirchhoff's Current Law (KCL) states that the algebraic sum of currents entering and leaving a node must equal zero.",
  }
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

  const progress = ((answeredQuestions.size) / quizQuestions.length) * 100;

  if (showResult) {
    return (
      <div className="container mx-auto max-w-4xl p-4 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Quiz Results</CardTitle>
            <CardDescription>Basic Electronics Quiz</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-green-800 dark:text-green-300 font-semibold">
                <CheckCircle2 className="h-5 w-5" />
                <h5>Quiz Completed!</h5>
              </div>
              <p className="mt-2 text-green-700 dark:text-green-400">
                You scored {score} out of {quizQuestions.length} questions correctly.
              </p>
            </div>
            <Button onClick={resetQuiz} className="w-full">
              <RefreshCcw className="mr-2 h-4 w-4" /> Retake Quiz
            </Button>
          </CardContent>
          <CardFooter>
            <Link href="/learn/steam-learn/basic-electronics" className="w-full">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Lessons
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
          <CardTitle>Basic Electronics Quiz</CardTitle>
          <CardDescription>
            Test your knowledge of basic electronics concepts
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
                  ${selectedAnswer === option ? 'bg-primary/10 border-primary' : 'hover:bg-muted'}
                `}
              >
                <div className={`w-4 h-4 rounded-full border ${
                  selectedAnswer === option ? 'border-primary bg-primary' : 'border-gray-400'
                }`}>
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
              <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-1">Explanation</h5>
              <p className="text-blue-700 dark:text-blue-400">
                {quizQuestions[currentQuestion].explanation}
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/learn/steam-learn/basic-electronics">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Lessons
            </Button>
          </Link>
          <Button
            onClick={nextQuestion}
            disabled={!selectedAnswer}
          >
            {currentQuestion === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
