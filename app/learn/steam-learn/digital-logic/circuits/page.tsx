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
  title: "Digital Circuits",
  sections: [
    {
      id: "overview",
      title: "Introduction to Digital Circuits",
      content: (
        <div className="space-y-4">
          <p>
            Digital circuits are combinations of logic gates that perform specific functions.
            They form the basis of all digital systems, from simple calculators to complex computers.
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Key Concepts
            </h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Combinational Circuits</li>
              <li>Circuit Analysis</li>
              <li>Common Circuit Types</li>
              <li>Applications</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "adders",
      title: "Half and Full Adders",
      content: (
        <div className="space-y-4">
          <p>
            Adders are fundamental circuits that perform binary addition. They are the building
            blocks of arithmetic circuits in computers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Half Adder</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Two inputs (A, B)</li>
                  <li>Two outputs (Sum, Carry)</li>
                  <li>Uses XOR and AND gates</li>
                  <li>Truth Table:</li>
                  <li>0,0 → 0,0</li>
                  <li>0,1 → 1,0</li>
                  <li>1,0 → 1,0</li>
                  <li>1,1 → 0,1</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Full Adder</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Three inputs (A, B, Cin)</li>
                  <li>Two outputs (Sum, Cout)</li>
                  <li>Uses two half adders</li>
                  <li>Can add with carry</li>
                  <li>Used in multi-bit addition</li>
                  <li>More complex truth table</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "multiplexers",
      title: "Multiplexers and Decoders",
      content: (
        <div className="space-y-4">
          <p>
            Multiplexers and decoders are essential circuits for data routing and selection
            in digital systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Multiplexer (MUX)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Multiple inputs, one output</li>
                  <li>Select lines choose input</li>
                  <li>2ⁿ inputs need n select lines</li>
                  <li>Common sizes: 2:1, 4:1, 8:1</li>
                  <li>Used for data selection</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Decoder</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>n inputs, 2ⁿ outputs</li>
                  <li>One output active at a time</li>
                  <li>Common sizes: 2:4, 3:8</li>
                  <li>Used in memory addressing</li>
                  <li>Active-high or active-low</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "applications",
      title: "Circuit Applications",
      content: (
        <div className="space-y-4">
          <p>
            Digital circuits are used in various applications across different fields
            of electronics and computing.
          </p>
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">
                Real-world Applications
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-800">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600" />
                  <span>Arithmetic Logic Units (ALU)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600" />
                  <span>Memory Address Decoders</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600" />
                  <span>Data Multiplexing Systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600" />
                  <span>Digital Signal Processors</span>
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
              <Link href="/steam-learn/digital-logic/sequential">
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
