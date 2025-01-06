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
    question: "What percentage of soil is typically composed of minerals?",
    options: ["20-30%", "1-5%", "45-49%", "70-80%"],
    correctAnswer: "45-49%",
    explanation: "Minerals typically make up 45-49% of soil composition, with the rest being water, air, and organic matter.",
  },
  {
    id: 2,
    question: "Which soil particle type has the highest nutrient retention capacity?",
    options: ["Sand", "Silt", "Clay", "Gravel"],
    correctAnswer: "Clay",
    explanation: "Clay particles are the smallest and have the highest surface area, giving them the best ability to retain nutrients.",
  },
  {
    id: 3,
    question: "What is the optimal pH range for most crops?",
    options: ["3.0-4.5", "4.5-5.5", "6.0-7.5", "8.0-9.0"],
    correctAnswer: "6.0-7.5",
    explanation: "Most crops grow best in soil with a pH between 6.0 and 7.5, as this range provides optimal nutrient availability.",
  },
  {
    id: 4,
    question: "Which nutrient is essential for leaf growth and chlorophyll production?",
    options: ["Phosphorus", "Potassium", "Nitrogen", "Calcium"],
    correctAnswer: "Nitrogen",
    explanation: "Nitrogen is crucial for leaf growth and chlorophyll production, which is essential for photosynthesis.",
  },
  {
    id: 5,
    question: "What is the purpose of soil testing?",
    options: [
      "To measure rainfall",
      "To determine crop prices",
      "To assess nutrient levels and pH",
      "To predict weather patterns"
    ],
    correctAnswer: "To assess nutrient levels and pH",
    explanation: "Soil testing helps determine nutrient levels, pH, and other properties to guide proper soil management.",
  },
  {
    id: 6,
    question: "Which conservation practice involves planting along the natural contours of the land?",
    options: ["Strip cropping", "Contour farming", "Vertical farming", "Crop rotation"],
    correctAnswer: "Contour farming",
    explanation: "Contour farming involves planting along the natural contours of the land to reduce soil erosion.",
  },
  {
    id: 7,
    question: "What is the primary function of organic matter in soil?",
    options: [
      "To increase soil temperature",
      "To improve soil structure and fertility",
      "To reduce water content",
      "To increase soil acidity"
    ],
    correctAnswer: "To improve soil structure and fertility",
    explanation: "Organic matter improves soil structure, water retention, and provides nutrients for plants.",
  },
  {
    id: 8,
    question: "Which secondary nutrient is essential for cell wall development in plants?",
    options: ["Magnesium", "Sulfur", "Calcium", "Iron"],
    correctAnswer: "Calcium",
    explanation: "Calcium is a secondary nutrient that plays a crucial role in cell wall development and structure.",
  },
  {
    id: 9,
    question: "What type of erosion is primarily caused by rainfall and runoff?",
    options: ["Wind erosion", "Water erosion", "Tillage erosion", "Glacial erosion"],
    correctAnswer: "Water erosion",
    explanation: "Water erosion occurs when rainfall and runoff carry away soil particles, especially on sloped land.",
  },
  {
    id: 10,
    question: "Which practice helps prevent soil erosion?",
    options: ["Deep tilling", "Burning crop residue", "Cover cropping", "Overgrazing"],
    correctAnswer: "Cover cropping",
    explanation: "Cover cropping protects soil from erosion by maintaining plant cover during off-seasons.",
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
            <CardDescription>Soil Science Quiz</CardDescription>
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
            <Link href="/learn/agri-aqua-learn/soil-science" className="w-full">
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
          <CardTitle>Soil Science Quiz</CardTitle>
          <CardDescription>
            Test your knowledge of soil science concepts
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
          <Link href="/learn/agri-aqua-learn/soil-science">
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
