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
  title: "Sequential Logic",
  sections: [
    {
      id: "overview",
      title: "Introduction to Sequential Logic",
      content: (
        <div className="space-y-4">
          <p>
            Sequential logic circuits are digital circuits whose outputs depend not only
            on the current inputs but also on the history of inputs. They form the basis
            of computer memory and control systems.
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Key Concepts
            </h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Memory Elements</li>
              <li>State Machines</li>
              <li>Timing Diagrams</li>
              <li>Clock Signals</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "latches-flipflops",
      title: "Latches and Flip-flops",
      content: (
        <div className="space-y-4">
          <p>
            Latches and flip-flops are basic memory elements that can store one bit
            of information.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">SR Latch</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Set-Reset Latch</li>
                  <li>Two inputs: S and R</li>
                  <li>Level-triggered</li>
                  <li>Basic memory element</li>
                  <li>Can have invalid states</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">D Flip-flop</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Data/Delay Flip-flop</li>
                  <li>Single data input</li>
                  <li>Edge-triggered</li>
                  <li>Most common type</li>
                  <li>No invalid states</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "registers-counters",
      title: "Registers and Counters",
      content: (
        <div className="space-y-4">
          <p>
            Registers and counters are sequential circuits built from multiple flip-flops
            to store and manipulate multiple bits of data.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Registers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Store multiple bits</li>
                  <li>Parallel or serial load</li>
                  <li>Types:</li>
                  <li>- SIPO (Serial In, Parallel Out)</li>
                  <li>- PISO (Parallel In, Serial Out)</li>
                  <li>- SISO (Serial In, Serial Out)</li>
                  <li>- PIPO (Parallel In, Parallel Out)</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Counters</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Count clock pulses</li>
                  <li>Types:</li>
                  <li>- Asynchronous (Ripple)</li>
                  <li>- Synchronous</li>
                  <li>- Up/Down</li>
                  <li>- Ring Counter</li>
                  <li>- Johnson Counter</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "state-machines",
      title: "State Machines",
      content: (
        <div className="space-y-4">
          <p>
            State machines are sequential circuits that can be in one of several states
            and transition between them based on inputs and current state.
          </p>
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">
                Finite State Machine Types
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-800">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600" />
                  <span>Moore Machines (Output depends on state only)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600" />
                  <span>Mealy Machines (Output depends on state and input)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600" />
                  <span>Applications: Control Systems, Protocol Implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600" />
                  <span>Design Process: State Diagram → State Table → Circuit</span>
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
              <Link href="/steam-learn/digital-logic/quiz">
                Start Quiz
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
