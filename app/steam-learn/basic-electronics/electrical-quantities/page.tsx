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
  Zap,
  Activity,
  Cable,
  Calculator,
} from "lucide-react";

const lesson = {
  title: "Voltage, Current, and Resistance",
  sections: [
    {
      id: "voltage",
      title: "Understanding Voltage",
      content: (
        <div className="space-y-4">
          <p>
            Voltage is the electrical pressure or potential difference that drives
            current through a circuit. Think of it like water pressure in a pipe.
          </p>
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-500" />
                Voltage Key Points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-500" />
                  <span>Measured in Volts (V)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-500" />
                  <span>Represents electrical potential energy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-500" />
                  <span>Common values: 1.5V (batteries), 5V (USB), 220V (mains)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-500" />
                  <span>Symbol: V or U</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "current",
      title: "Current Flow",
      content: (
        <div className="space-y-4">
          <p>
            Current is the flow rate of electric charge through a conductor.
            It&apos;s similar to the flow rate of water in a pipe.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Activity className="h-5 w-5 text-green-500" />
                  DC Current
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-green-800">
                  <li>Flows in one direction</li>
                  <li>Used in batteries</li>
                  <li>Common in electronics</li>
                  <li>Symbol: I (⎓)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Activity className="h-5 w-5 text-green-500" />
                  AC Current
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-green-800">
                  <li>Changes direction periodically</li>
                  <li>Used in power lines</li>
                  <li>More efficient for power transmission</li>
                  <li>Symbol: I (∿)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "resistance",
      title: "Resistance in Circuits",
      content: (
        <div className="space-y-4">
          <p>
            Resistance is the opposition to current flow in an electrical circuit.
            It&apos;s like friction in a water pipe that reduces flow.
          </p>
          <Card className="bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cable className="h-5 w-5 text-orange-500" />
                Understanding Resistance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-orange-500" />
                    <span>Measured in Ohms (Ω)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-orange-500" />
                    <span>Controls current flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-orange-500" />
                    <span>Used for current limiting and voltage division</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-orange-500" />
                    <span>Symbol: R</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "ohms-law",
      title: "Ohm's Law",
      content: (
        <div className="space-y-4">
          <p>
            Ohm&apos;s Law describes the relationship between voltage, current, and
            resistance in an electrical circuit.
          </p>
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-purple-500" />
                Ohm&apos;s Law Formula
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center text-2xl font-bold text-purple-800">
                  V = I × R
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-semibold text-purple-800">V (Voltage)</div>
                    <div className="text-sm text-purple-600">Volts</div>
                  </div>
                  <div>
                    <div className="font-semibold text-purple-800">I (Current)</div>
                    <div className="text-sm text-purple-600">Amperes</div>
                  </div>
                  <div>
                    <div className="font-semibold text-purple-800">R (Resistance)</div>
                    <div className="text-sm text-purple-600">Ohms</div>
                  </div>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Example:</h4>
                  <p>
                    If a circuit has 12V and 6Ω resistance, the current would be:
                    <br />
                    I = V/R = 12V/6Ω = 2A
                  </p>
                </div>
              </div>
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
            <Link href="/steam-learn/basic-electronics">
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
                <BookOpen className="h-5 w-5 text-blue-500" />
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
              <Link href="/steam-learn/basic-electronics/components">
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
