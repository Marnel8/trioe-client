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
  title: "Introduction to Electronics",
  sections: [
    {
      id: "overview",
      title: "What is Electronics?",
      content: (
        <div className="space-y-4">
          <p>
            Electronics is the study and application of devices that control the
            flow of electrons. It forms the foundation of modern technology,
            from smartphones to satellites.
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Key Concepts
            </h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Electronics vs Electricity</li>
              <li>Basic Circuit Components</li>
              <li>Electronic Signals</li>
              <li>Applications in Modern Technology</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "basic-concepts",
      title: "Basic Electrical Concepts",
      content: (
        <div className="space-y-4">
          <p>
            Before diving into electronics, it&apos;s essential to understand basic
            electrical concepts that govern how electronic devices work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Electricity</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Flow of electrical charge</li>
                  <li>Measured in Coulombs</li>
                  <li>Creates magnetic fields</li>
                  <li>Powers electronic devices</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Electronics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Control of electrical flow</li>
                  <li>Uses semiconductor devices</li>
                  <li>Processes signals</li>
                  <li>Creates functionality</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "circuit-fundamentals",
      title: "Circuit Fundamentals",
      content: (
        <div className="space-y-4">
          <p>
            A circuit is a complete path through which electricity can flow. Let&apos;s
            explore the basic components and concepts of electrical circuits.
          </p>
          <div className="relative h-48 mb-4">
            <Image
              src="/images/basic-circuit.png"
              alt="Basic Circuit Diagram"
              fill
              className="object-contain"
            />
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Circuit Elements:</h4>
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Power Source
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Conductors
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Load/Component
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Switch
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "safety",
      title: "Safety Guidelines",
      content: (
        <div className="space-y-4">
          <p>
            Safety is paramount when working with electronics. Following proper
            safety guidelines prevents accidents and protects both you and your
            equipment.
          </p>
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-yellow-800">
                Essential Safety Rules
              </CardTitle>
            </CardHeader>
            <CardContent className="text-yellow-800">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-yellow-600" />
                  <span>
                    Always disconnect power before modifying circuits
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-yellow-600" />
                  <span>
                    Use appropriate tools and protective equipment
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-yellow-600" />
                  <span>
                    Keep your workspace clean and organized
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-yellow-600" />
                  <span>
                    Never work alone with high-voltage circuits
                  </span>
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
              <Link href="/steam-learn/basic-electronics/electrical-quantities">
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
