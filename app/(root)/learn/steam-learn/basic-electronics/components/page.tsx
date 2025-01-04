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
  Battery,
  Lightbulb,
  Radio,
  Cpu,
  Gauge,
} from "lucide-react";

const lesson = {
  title: "Basic Components",
  sections: [
    {
      id: "resistors-capacitors",
      title: "Resistors and Capacitors",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-orange-200">
              <CardHeader className="bg-orange-50">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-orange-500" />
                  Resistors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <p>
                  Resistors limit current flow and divide voltage in circuits.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Measured in Ohms (Ω)</li>
                    <li>Color bands indicate resistance value</li>
                    <li>Common in current limiting</li>
                    <li>Available in fixed and variable types</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg text-sm">
                  <strong>Common Values:</strong> 100Ω, 1kΩ, 10kΩ, 100kΩ
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Battery className="h-5 w-5 text-blue-500" />
                  Capacitors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <p>
                  Capacitors store and release electrical energy in circuits.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Measured in Farads (F)</li>
                    <li>Polarized and non-polarized types</li>
                    <li>Used for filtering and timing</li>
                    <li>Various dielectric materials</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-sm">
                  <strong>Common Values:</strong> 100pF, 1µF, 10µF, 100µF
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "inductors-transformers",
      title: "Inductors and Transformers",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-purple-200">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Radio className="h-5 w-5 text-purple-500" />
                  Inductors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <p>
                  Inductors store energy in magnetic fields and resist changes in current.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Measured in Henries (H)</li>
                    <li>Made of coiled wire</li>
                    <li>Used in filters and power supplies</li>
                    <li>Various core materials available</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg text-sm">
                  <strong>Common Values:</strong> 1µH, 10µH, 100µH, 1mH
                </div>
              </CardContent>
            </Card>

            <Card className="border-indigo-200">
              <CardHeader className="bg-indigo-50">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Radio className="h-5 w-5 text-indigo-500" />
                  Transformers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <p>
                  Transformers transfer electrical energy between circuits through magnetic coupling.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Steps voltage up or down</li>
                    <li>Provides isolation</li>
                    <li>AC operation only</li>
                    <li>Various power ratings</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg text-sm">
                  <strong>Common Types:</strong> Power, Audio, RF, Pulse
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "diodes-leds",
      title: "Diodes and LEDs",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Radio className="h-5 w-5 text-red-500" />
                  Diodes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <p>
                  Diodes allow current to flow in one direction while blocking reverse flow.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Forward and reverse bias</li>
                    <li>Voltage drop (~0.7V silicon)</li>
                    <li>Used in rectification</li>
                    <li>Various specialized types</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-3 rounded-lg text-sm">
                  <strong>Common Types:</strong> Rectifier, Zener, Schottky
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-green-500" />
                  LEDs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <p>
                  Light Emitting Diodes convert electrical energy into light.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Various colors available</li>
                    <li>Low power consumption</li>
                    <li>Long lifespan</li>
                    <li>Requires current limiting</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-sm">
                  <strong>Common Uses:</strong> Indicators, Displays, Lighting
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "transistors",
      title: "Transistors",
      content: (
        <div className="space-y-4">
          <Card className="border-cyan-200">
            <CardHeader className="bg-cyan-50">
              <CardTitle className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-cyan-500" />
                Understanding Transistors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Transistors are semiconductor devices used to amplify or switch electronic signals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Bipolar (BJT)</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>NPN and PNP types</li>
                    <li>Current controlled</li>
                    <li>Used in amplification</li>
                    <li>Three terminals: Base, Emitter, Collector</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Field Effect (FET)</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>N-channel and P-channel</li>
                    <li>Voltage controlled</li>
                    <li>Used in switching</li>
                    <li>Three terminals: Gate, Source, Drain</li>
                  </ul>
                </div>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Common Applications:</h4>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li>• Amplifiers</li>
                  <li>• Digital Logic</li>
                  <li>• Power Control</li>
                  <li>• Signal Processing</li>
                </ul>
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
            <Link href="/learn/steam-learn/basic-electronics">
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
              <Link href="/learn/steam-learn/basic-electronics/circuit-analysis">
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
