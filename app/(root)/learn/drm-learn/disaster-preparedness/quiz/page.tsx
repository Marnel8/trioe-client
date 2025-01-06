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
    question: "What are the main phases of the disaster management cycle?",
    options: [
      "Planning, Response, Recovery, Mitigation",
      "Prevention, Preparedness, Response, Recovery, Mitigation",
      "Warning, Action, Recovery, Planning",
      "Preparation, Alert, Response, Cleanup"
    ],
    correctAnswer: "Prevention, Preparedness, Response, Recovery, Mitigation",
    explanation: "The disaster management cycle consists of five main phases: Prevention, Preparedness, Response, Recovery, and Mitigation, forming a continuous process of disaster risk management.",
  },
  {
    id: 2,
    question: "Which of the following is NOT a key element of a family emergency plan?",
    options: [
      "Emergency contacts list",
      "Designated meeting points",
      "Social media accounts",
      "Evacuation routes"
    ],
    correctAnswer: "Social media accounts",
    explanation: "While social media can be useful during emergencies, it's not a key element of a family emergency plan. The essential elements include emergency contacts, meeting points, communication plans, and evacuation routes.",
  },
  {
    id: 3,
    question: "How much water should be included in a basic survival kit per person per day?",
    options: [
      "Half gallon",
      "One gallon",
      "Two gallons",
      "Three gallons"
    ],
    correctAnswer: "One gallon",
    explanation: "The recommended amount of water in a survival kit is one gallon per person per day, which covers both drinking and sanitation needs.",
  },
  {
    id: 4,
    question: "What is the minimum duration for which a basic survival kit should be prepared?",
    options: [
      "24 hours",
      "48 hours",
      "72 hours",
      "96 hours"
    ],
    correctAnswer: "72 hours",
    explanation: "A basic survival kit should be prepared to sustain you and your family for at least 72 hours (3 days) following a disaster.",
  },
  {
    id: 5,
    question: "Which documents should NOT be included in your emergency documentation kit?",
    options: [
      "Insurance policies",
      "Old utility bills",
      "Medical prescriptions",
      "Property deeds"
    ],
    correctAnswer: "Old utility bills",
    explanation: "While important documents like insurance policies, medical prescriptions, and property deeds are crucial, old utility bills are not essential for emergency documentation.",
  },
  {
    id: 6,
    question: "What is a key component of Early Warning Systems (EWS)?",
    options: [
      "Social media monitoring",
      "Risk knowledge",
      "Weather forecasting only",
      "Emergency response teams"
    ],
    correctAnswer: "Risk knowledge",
    explanation: "Risk knowledge is a key component of Early Warning Systems, involving understanding potential hazards and vulnerabilities in the area.",
  },
  {
    id: 7,
    question: "How often should survival kit supplies be checked and updated?",
    options: [
      "Every month",
      "Every six months",
      "Once a year",
      "Every two years"
    ],
    correctAnswer: "Every month",
    explanation: "Survival kit supplies should be checked monthly to ensure items haven't expired, batteries are working, and everything is in good condition.",
  },
  {
    id: 8,
    question: "What is the best backup communication method during disasters?",
    options: [
      "Email",
      "Social media",
      "Two-way radio",
      "Video calls"
    ],
    correctAnswer: "Two-way radio",
    explanation: "Two-way radios are the most reliable backup communication method during disasters as they can function when cellular and internet services are down.",
  },
  {
    id: 9,
    question: "Which type of disaster requires the most immediate evacuation response?",
    options: [
      "Drought",
      "Flash flood",
      "Slow-rising flood",
      "Heat wave"
    ],
    correctAnswer: "Flash flood",
    explanation: "Flash floods require the most immediate evacuation response due to their sudden onset and highly destructive nature.",
  },
  {
    id: 10,
    question: "What should be the first priority when responding to an early warning alert?",
    options: [
      "Post on social media",
      "Call all friends",
      "Follow official instructions",
      "Take photos of the event"
    ],
    correctAnswer: "Follow official instructions",
    explanation: "The first priority when receiving an early warning alert should be to follow official instructions to ensure safety and proper response.",
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
            <CardDescription>Disaster Preparedness Quiz</CardDescription>
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
            <Link href="/learn/drm-learn/disaster-preparedness" className="w-full">
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
          <CardTitle>Disaster Preparedness Quiz</CardTitle>
          <CardDescription>
            Test your knowledge of disaster preparedness concepts
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
          <Link href="/learn/drm-learn/disaster-preparedness">
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
