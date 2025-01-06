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
    question: "Which of the following is NOT a type of natural hazard?",
    options: [
      "Earthquakes",
      "Industrial accidents",
      "Volcanic eruptions",
      "Tsunamis"
    ],
    correctAnswer: "Industrial accidents",
    explanation: "Industrial accidents are human-made hazards, while earthquakes, volcanic eruptions, and tsunamis are natural hazards caused by geological processes.",
  },
  {
    id: 2,
    question: "What is the primary purpose of hazard identification?",
    options: [
      "To predict exact disaster timings",
      "To understand potential threats and their characteristics",
      "To eliminate all risks",
      "To assign blame for disasters"
    ],
    correctAnswer: "To understand potential threats and their characteristics",
    explanation: "Hazard identification aims to understand potential threats and their characteristics to better prepare for and mitigate their impacts.",
  },
  {
    id: 3,
    question: "Which type of vulnerability refers to the susceptibility of physical structures to damage?",
    options: [
      "Social vulnerability",
      "Economic vulnerability",
      "Physical vulnerability",
      "Cultural vulnerability"
    ],
    correctAnswer: "Physical vulnerability",
    explanation: "Physical vulnerability refers to how susceptible buildings, infrastructure, and other physical structures are to damage from hazards.",
  },
  {
    id: 4,
    question: "What is a key component of vulnerability assessment?",
    options: [
      "Weather forecasting",
      "Political campaigning",
      "Market analysis",
      "Community surveys"
    ],
    correctAnswer: "Community surveys",
    explanation: "Community surveys are a key component of vulnerability assessment as they help gather information about local conditions, capacities, and needs.",
  },
  {
    id: 5,
    question: "Which tool is commonly used in risk mapping?",
    options: [
      "Social media",
      "Geographic Information Systems (GIS)",
      "Word processors",
      "Email clients"
    ],
    correctAnswer: "Geographic Information Systems (GIS)",
    explanation: "GIS is a crucial tool in risk mapping as it allows for the creation, analysis, and visualization of spatial data related to hazards and vulnerabilities.",
  },
  {
    id: 6,
    question: "What is the purpose of participatory mapping in risk assessment?",
    options: [
      "To reduce costs",
      "To save time",
      "To integrate local knowledge",
      "To replace technical analysis"
    ],
    correctAnswer: "To integrate local knowledge",
    explanation: "Participatory mapping involves community members to integrate local knowledge and experiences into risk assessment processes.",
  },
  {
    id: 7,
    question: "Which of these is an indirect impact of a disaster?",
    options: [
      "Building collapse",
      "Economic disruption",
      "Immediate casualties",
      "Physical injuries"
    ],
    correctAnswer: "Economic disruption",
    explanation: "Economic disruption is an indirect impact that occurs as a consequence of the direct impacts like building damage or casualties.",
  },
  {
    id: 8,
    question: "What is a key characteristic of effective risk maps?",
    options: [
      "They only show hazards",
      "They are difficult to understand",
      "They combine multiple types of information",
      "They focus on one time period"
    ],
    correctAnswer: "They combine multiple types of information",
    explanation: "Effective risk maps combine multiple types of information, including hazards, vulnerabilities, and capacities, to provide a comprehensive view of risk.",
  },
  {
    id: 9,
    question: "Which assessment method is best for measuring economic losses?",
    options: [
      "Focus groups",
      "Quantitative modeling",
      "Historical narratives",
      "Cultural studies"
    ],
    correctAnswer: "Quantitative modeling",
    explanation: "Quantitative modeling is most appropriate for measuring economic losses as it can provide numerical estimates based on data and mathematical models.",
  },
  {
    id: 10,
    question: "What is the primary goal of impact mitigation strategies?",
    options: [
      "To eliminate all hazards",
      "To reduce potential negative effects",
      "To increase economic growth",
      "To replace emergency response"
    ],
    correctAnswer: "To reduce potential negative effects",
    explanation: "Impact mitigation strategies aim to reduce the potential negative effects of hazards through various structural and non-structural measures.",
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
            <CardDescription>Risk Assessment Quiz</CardDescription>
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
            <Link href="/learn/drm-learn/risk-assessment" className="w-full">
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
          <CardTitle>Risk Assessment Quiz</CardTitle>
          <CardDescription>
            Test your knowledge of risk assessment concepts
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
          <Link href="/learn/drm-learn/risk-assessment">
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
