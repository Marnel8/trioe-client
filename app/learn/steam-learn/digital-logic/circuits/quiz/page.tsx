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
    question: "What is the main difference between combinational and sequential circuits?",
    options: [
      "Power consumption",
      "Number of gates used",
      "Dependency on previous states",
      "Physical size"
    ],
    correctAnswer: "Dependency on previous states",
    explanation: "Combinational circuits' outputs depend only on current inputs, while sequential circuits' outputs depend on both current inputs and previous states.",
  },
  {
    id: 2,
    question: "In a half adder circuit, what logic gate is used to generate the Sum output?",
    options: ["AND", "OR", "XOR", "NAND"],
    correctAnswer: "XOR",
    explanation: "The XOR gate is used for the Sum output in a half adder as it produces a 1 output only when inputs are different.",
  },
  {
    id: 3,
    question: "What is the main difference between a half adder and a full adder?",
    options: [
      "Number of outputs",
      "Carry input capability",
      "Operating speed",
      "Power requirements"
    ],
    correctAnswer: "Carry input capability",
    explanation: "A full adder has a carry input in addition to the two input bits, while a half adder only adds two input bits.",
  },
  {
    id: 4,
    question: "What is the purpose of a multiplexer (MUX)?",
    options: [
      "To store data",
      "To select one of many inputs",
      "To add binary numbers",
      "To generate clock signals"
    ],
    correctAnswer: "To select one of many inputs",
    explanation: "A multiplexer selects one of several input signals and forwards it to a single output line based on select inputs.",
  },
  {
    id: 5,
    question: "How many select lines are needed for an 8-to-1 multiplexer?",
    options: ["2", "3", "4", "8"],
    correctAnswer: "3",
    explanation: "An 8-to-1 multiplexer needs 3 select lines because 2³ = 8, allowing selection among 8 input lines.",
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
            <CardDescription>Digital Circuits Quiz</CardDescription>
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
            <Link href="/steam-learn/digital-logic/circuits" className="w-full">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Lesson
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
          <CardTitle>Digital Circuits Quiz</CardTitle>
          <CardDescription>
            Test your knowledge of digital circuits and their applications
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
          <Link href="/steam-learn/digital-logic/circuits">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Lesson
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
