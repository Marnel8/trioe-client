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
} from "lucide-react";

const lesson = {
  title: "Logic Gates",
  sections: [
    {
      id: "overview",
      title: "Introduction to Logic Gates",
      content: (
        <div className="space-y-4">
          <p>
            Logic gates are the fundamental building blocks of digital circuits. They perform basic logical
            operations on binary inputs to produce binary outputs.
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Key Concepts
            </h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Basic Gate Types</li>
              <li>Truth Tables</li>
              <li>Gate Symbols</li>
              <li>Combinations</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "basic-gates",
      title: "Basic Logic Gates",
      content: (
        <div className="space-y-4">
          <p>
            The three fundamental logic gates form the basis for all digital logic operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">NOT Gate</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Single input</li>
                  <li>Inverts input</li>
                  <li>Symbol: Triangle with circle</li>
                  <li>Truth Table:</li>
                  <li>0 → 1</li>
                  <li>1 → 0</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AND Gate</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Two or more inputs</li>
                  <li>All inputs must be 1</li>
                  <li>Symbol: D-shaped</li>
                  <li>Truth Table:</li>
                  <li>0,0 → 0</li>
                  <li>0,1 → 0</li>
                  <li>1,0 → 0</li>
                  <li>1,1 → 1</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">OR Gate</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Two or more inputs</li>
                  <li>Any input can be 1</li>
                  <li>Symbol: Shield-shaped</li>
                  <li>Truth Table:</li>
                  <li>0,0 → 0</li>
                  <li>0,1 → 1</li>
                  <li>1,0 → 1</li>
                  <li>1,1 → 1</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "universal-gates",
      title: "Universal Gates",
      content: (
        <div className="space-y-4">
          <p>
            NAND and NOR gates are called universal gates because they can be used to create
            any other logic gate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">NAND Gate</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>AND followed by NOT</li>
                  <li>Universal gate</li>
                  <li>Symbol: AND with circle</li>
                  <li>Truth Table:</li>
                  <li>0,0 → 1</li>
                  <li>0,1 → 1</li>
                  <li>1,0 → 1</li>
                  <li>1,1 → 0</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">NOR Gate</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>OR followed by NOT</li>
                  <li>Universal gate</li>
                  <li>Symbol: OR with circle</li>
                  <li>Truth Table:</li>
                  <li>0,0 → 1</li>
                  <li>0,1 → 0</li>
                  <li>1,0 → 0</li>
                  <li>1,1 → 0</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "applications",
      title: "Gate Applications",
      content: (
        <div className="space-y-4">
          <p>
            Logic gates are used to build more complex digital circuits and systems.
          </p>
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">
                Common Applications
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-800">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600" />
                  <span>Arithmetic Circuits (Adders, Multipliers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600" />
                  <span>Memory Elements (Flip-flops, Latches)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600" />
                  <span>Multiplexers and Decoders</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600" />
                  <span>Digital Processors</span>
                </li>
              </ul>
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
            <Link href="/steam-learn/digital-logic">
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
            <CardContent>
              {lesson.sections[currentSection].content}
            </CardContent>
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
              <Link href="/steam-learn/digital-logic/circuits">
                Next Lesson
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          ) : (
            <Button
              onClick={() => setCurrentSection(currentSection + 1)}
            >
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
