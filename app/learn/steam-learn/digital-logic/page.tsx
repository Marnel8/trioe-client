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
import { Cpu, ArrowLeft, CheckCircle2, Info } from "lucide-react";

const lessons = [
  {
    title: "Boolean Logic",
    description: "Learn about Boolean algebra and logic operations",
    duration: "30 mins",
    topics: [
      "Basic Boolean Values",
      "Boolean Operations",
      "Boolean Laws",
      "Applications",
    ],
    progress: 0,
    href: "/steam-learn/digital-logic/boolean",
  },
  {
    title: "Logic Gates",
    description: "Understanding basic logic gates and their operations",
    duration: "45 mins",
    topics: [
      "NOT and AND Gates",
      "OR and XOR Gates",
      "NAND and NOR Gates",
      "Universal Gates",
    ],
    progress: 0,
    href: "/steam-learn/digital-logic/gates",
  },
  {
    title: "Digital Circuits",
    description: "Building and analyzing digital circuits",
    duration: "45 mins",
    topics: [
      "Combinational Circuits",
      "Half and Full Adders",
      "Multiplexers",
      "Decoders",
    ],
    progress: 0,
    href: "/steam-learn/digital-logic/circuits",
  },
  {
    title: "Sequential Logic",
    description: "Understanding flip-flops and sequential circuits",
    duration: "1 hour",
    topics: [
      "Latches and Flip-flops",
      "Registers",
      "Counters",
      "State Machines",
    ],
    progress: 0,
    href: "/steam-learn/digital-logic/sequential",
  },
];

export default function DigitalLogicPage() {
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
            <Cpu className="h-8 w-8 text-green-500" />
            Digital Logic
          </h1>
          <p className="text-muted-foreground mt-2">
            Master the fundamentals of digital logic and circuit design
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        {lessons.map((lesson, index) => (
          <Card key={lesson.title}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-500">
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
