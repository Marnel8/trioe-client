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
    question: "What is the fundamental unit of information in digital logic?",
    options: ["Byte", "Bit", "Nibble", "Word"],
    correctAnswer: "Bit",
    explanation: "A bit (binary digit) is the most basic unit of information in digital logic, representing either 0 or 1.",
  },
  {
    id: 2,
    question: "Which Boolean operation outputs true only when both inputs are true?",
    options: ["OR", "AND", "NOT", "XOR"],
    correctAnswer: "AND",
    explanation: "The AND operation (∧) only outputs true (1) when both inputs are true (1), making it useful for checking multiple conditions.",
  },
  {
    id: 3,
    question: "What is the main advantage of NAND and NOR gates?",
    options: [
      "They are faster",
      "They use less power",
      "They are universal gates",
      "They are easier to build"
    ],
    correctAnswer: "They are universal gates",
    explanation: "NAND and NOR are called universal gates because any other logic gate can be constructed using only NAND gates or only NOR gates.",
  },
  {
    id: 4,
    question: "In a full adder circuit, how many inputs are there?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "3",
    explanation: "A full adder has three inputs: two bits to be added (A and B) and a carry-in bit from the previous addition.",
  },
  {
    id: 5,
    question: "What distinguishes sequential circuits from combinational circuits?",
    options: [
      "Number of gates used",
      "Power consumption",
      "Memory elements",
      "Operating speed"
    ],
    correctAnswer: "Memory elements",
    explanation: "Sequential circuits contain memory elements (like flip-flops) that store state information, while combinational circuits only depend on current inputs.",
  },
  {
    id: 6,
    question: "What is De Morgan's theorem used for?",
    options: [
      "Simplifying Boolean expressions",
      "Building flip-flops",
      "Creating truth tables",
      "Measuring circuit delay"
    ],
    correctAnswer: "Simplifying Boolean expressions",
    explanation: "De Morgan's theorem is a powerful tool for simplifying Boolean expressions by showing the relationship between AND, OR, and NOT operations.",
  },
  {
    id: 7,
    question: "Which type of flip-flop changes state on every clock pulse when enabled?",
    options: ["D Flip-flop", "T Flip-flop", "SR Flip-flop", "JK Flip-flop"],
    correctAnswer: "T Flip-flop",
    explanation: "The Toggle (T) flip-flop changes its state (toggles between 0 and 1) whenever it receives a clock pulse while the T input is 1.",
  },
  {
    id: 8,
    question: "What is the purpose of a multiplexer in digital circuits?",
    options: [
      "To store data",
      "To perform arithmetic",
      "To select one of many inputs",
      "To generate clock signals"
    ],
    correctAnswer: "To select one of many inputs",
    explanation: "A multiplexer (MUX) selects one of several input signals and forwards it to a single output based on select line values.",
  },
  {
    id: 9,
    question: "Which Boolean law states that A + 1 = 1?",
    options: [
      "Identity law",
      "Complement law",
      "Null law",
      "Maximum law"
    ],
    correctAnswer: "Maximum law",
    explanation: "The maximum law states that any value OR 1 equals 1, just as any value AND 0 equals 0 (minimum law).",
  },
  {
    id: 10,
    question: "What type of circuit is a binary counter?",
    options: [
      "Combinational",
      "Sequential",
      "Analog",
      "Asynchronous only"
    ],
    correctAnswer: "Sequential",
    explanation: "A binary counter is a sequential circuit because it needs to remember its current count value to determine the next count value.",
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

  const progress = ((answeredQuestions.size) / quizQuestions.length) * 100;

  if (showResult) {
    return (
      <div className="container mx-auto max-w-4xl p-4 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Quiz Results</CardTitle>
            <CardDescription>Digital Logic Module Quiz</CardDescription>
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
            <Link href="/steam-learn/digital-logic" className="w-full">
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
          <CardTitle>Digital Logic Module Quiz</CardTitle>
          <CardDescription>
            Test your knowledge of Boolean logic, gates, circuits, and sequential logic
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
          <Link href="/steam-learn/digital-logic">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Module
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
