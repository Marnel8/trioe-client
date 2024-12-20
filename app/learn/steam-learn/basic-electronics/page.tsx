"use client";

import React from "react";
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
import { CircuitBoard, ArrowLeft, CheckCircle2, Info } from "lucide-react";

const lessons = [
  {
    title: "Introduction to Electronics",
    description: "Learn the basics of electronics and electrical concepts",
    duration: "30 mins",
    topics: [
      "What is Electronics?",
      "Basic Electrical Concepts",
      "Circuit Fundamentals",
      "Safety Guidelines",
    ],
    progress: 0,
    href: "/steam-learn/basic-electronics/introduction",
  },
  {
    title: "Voltage, Current, and Resistance",
    description: "Understand the fundamental electrical quantities",
    duration: "45 mins",
    topics: [
      "Understanding Voltage",
      "Current Flow",
      "Resistance in Circuits",
      "Ohm's Law",
    ],
    progress: 0,
    href: "/steam-learn/basic-electronics/electrical-quantities",
  },
  {
    title: "Basic Components",
    description: "Explore common electronic components and their functions",
    duration: "45 mins",
    topics: [
      "Resistors and Capacitors",
      "Inductors and Transformers",
      "Diodes and LEDs",
      "Transistors",
    ],
    progress: 0,
    href: "/steam-learn/basic-electronics/components",
  },
  {
    title: "Circuit Analysis",
    description: "Learn to analyze and understand electronic circuits",
    duration: "1 hour",
    topics: [
      "Series and Parallel Circuits",
      "Kirchhoff's Laws",
      "Circuit Analysis Techniques",
      "Troubleshooting Basics",
    ],
    progress: 0,
    href: "/steam-learn/basic-electronics/circuit-analysis",
  },
];

export default function BasicElectronicsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/steam-learn">
            <ArrowLeft className="h-6 w-6" />
          </Link>
        </Button>
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <CircuitBoard className="h-8 w-8 text-blue-500" />
            Basic Electronics
          </h1>
          <p className="text-muted-foreground mt-2">
            Master the fundamentals of electronics through hands-on learning
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        {lessons.map((lesson, index) => (
          <Card key={lesson.title}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                    {index + 1}
                  </div>
                  <div>
                    <CardTitle>{lesson.title}</CardTitle>
                    <CardDescription>{lesson.description}</CardDescription>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {lesson.duration}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Topics Covered</h4>
                  <ul className="space-y-1">
                    {lesson.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Progress</h4>
                  <Progress value={lesson.progress} className="mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {lesson.progress}% Complete
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={lesson.href}>Start Lesson</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p className="flex items-center justify-center gap-2">
          <Info className="h-4 w-4" />
          Need help? Contact our support team for assistance.
        </p>
      </footer>
    </div>
  );
}
