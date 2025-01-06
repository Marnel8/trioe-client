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
import { Badge } from "@/components/ui/badge";
import {
  CircuitBoard,
  Code,
  Cpu,
  Database,
  Lightbulb,
  Radio,
  Ruler,
  Waves,
} from "lucide-react";

const modules = [
  {
    title: "Basic Electronics",
    description: "Learn fundamental electronics concepts and components",
    difficulty: "Beginner",
    duration: "2-3 hours",
    icon: CircuitBoard,
    color: "text-blue-500",
    lessons: [
      "Introduction to Electronics",
      "Voltage, Current, and Resistance",
      "Basic Components",
      "Circuit Analysis",
    ],
    href: "/learn/steam-learn/basic-electronics",
  },
  {
    title: "Digital Logic",
    description: "Understand digital circuits and logic gates",
    difficulty: "Intermediate",
    duration: "3-4 hours",
    icon: Cpu,
    color: "text-green-500",
    lessons: [
      "Boolean Logic",
      "Logic Gates",
      "Digital Circuits",
      "Sequential Logic",
    ],
    href: "/learn/steam-learn/digital-logic",
  },
  {
    title: "Microcontroller Programming",
    description: "Program microcontrollers using Arduino",
    difficulty: "Intermediate",
    duration: "4-5 hours",
    icon: Code,
    color: "text-purple-500",
    lessons: [
      "Introduction to Arduino",
      "Digital I/O",
      "Analog Sensors",
      "Serial Communication",
    ],
    href: "/learn/steam-learn/microcontroller",
  },
  {
    title: "Sensors and Actuators",
    description: "Work with various sensors and control systems",
    difficulty: "Intermediate",
    duration: "3-4 hours",
    icon: Radio,
    color: "text-orange-500",
    lessons: [
      "Sensor Types",
      "Signal Processing",
      "Actuator Control",
      "Feedback Systems",
    ],
    href: "/learn/steam-learn/sensors",
  },
  // {
  //   title: "IoT and Connectivity",
  //   description: "Connect your projects to the internet",
  //   difficulty: "Advanced",
  //   duration: "4-5 hours",
  //   icon: Waves,
  //   color: "text-cyan-500",
  //   lessons: [
  //     "IoT Fundamentals",
  //     "WiFi Communication",
  //     "Cloud Integration",
  //     "Data Visualization",
  //   ],
  //   href: "/learn/steam-learn/iot",
  // },
  // {
  //   title: "Data Analysis",
  //   description: "Analyze and visualize sensor data",
  //   difficulty: "Advanced",
  //   duration: "3-4 hours",
  //   icon: Database,
  //   color: "text-yellow-500",
  //   lessons: [
  //     "Data Collection",
  //     "Statistical Analysis",
  //     "Data Visualization",
  //     "Machine Learning Basics",
  //   ],
  //   href: "/learn/steam-learn/data-analysis",
  // },
  // {
  //   title: "Engineering Design",
  //   description: "Learn the engineering design process",
  //   difficulty: "Intermediate",
  //   duration: "4-5 hours",
  //   icon: Ruler,
  //   color: "text-red-500",
  //   lessons: [
  //     "Design Thinking",
  //     "Project Planning",
  //     "Prototyping",
  //     "Testing and Iteration",
  //   ],
  //   href: "/learn/steam-learn/engineering-design",
  // },
  // {
  //   title: "Project Integration",
  //   description: "Build complete STEAM projects",
  //   difficulty: "Advanced",
  //   duration: "5-6 hours",
  //   icon: Lightbulb,
  //   color: "text-indigo-500",
  //   lessons: [
  //     "Project Selection",
  //     "System Integration",
  //     "Testing and Debugging",
  //     "Documentation",
  //   ],
  //   href: "/learn/steam-learn/project-integration",
  // },
];

export default function SteamLearnPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">STEAM Learning Modules</h1>
        <p className="text-muted-foreground text-lg">
          Explore our comprehensive STEAM learning modules designed to help you
          master electronics and programming concepts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {modules.map((module) => (
          <Card key={module.title} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <module.icon className={`h-6 w-6 ${module.color}`} />
                <Badge
                  variant={
                    module.difficulty === "Beginner"
                      ? "default"
                      : module.difficulty === "Intermediate"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {module.difficulty}
                </Badge>
              </div>
              <CardTitle>{module.title}</CardTitle>
              <CardDescription>{module.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-sm text-muted-foreground mb-4">
                Duration: {module.duration}
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {module.lessons.map((lesson) => (
                  <li key={lesson}>{lesson}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={module.href}>Start Learning</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
