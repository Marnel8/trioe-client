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
import {
  Thermometer,
  Gauge,
  Radio,
  Eye,
  Waves,
  Lightbulb,
  Compass,
  Binary,
} from "lucide-react";

const topics = [
  {
    title: "Introduction to Sensors",
    description: "Learn about sensor basics, types, and characteristics",
    icon: <Gauge className="w-6 h-6" />,
    href: "/steam-learn/sensors/introduction",
    lessons: [
      "What are Sensors?",
      "Sensor Characteristics",
      "Signal Conditioning",
      "Sensor Calibration",
    ],
  },
  {
    title: "Temperature and Humidity",
    description: "Explore temperature and humidity sensing technologies",
    icon: <Thermometer className="w-6 h-6" />,
    href: "/steam-learn/sensors/temperature",
    lessons: [
      "Temperature Sensors",
      "Humidity Sensors",
      "Environmental Monitoring",
      "Data Logging",
    ],
  },
  {
    title: "Motion and Position",
    description: "Understand motion detection and position sensing",
    icon: <Compass className="w-6 h-6" />,
    href: "/steam-learn/sensors/motion",
    lessons: [
      "Accelerometers",
      "Gyroscopes",
      "Position Sensors",
      "Motion Detection",
    ],
  },
  {
    title: "Light and Optical",
    description: "Learn about light sensors and optical measurement",
    icon: <Eye className="w-6 h-6" />,
    href: "/steam-learn/sensors/optical",
    lessons: [
      "Photodiodes",
      "Image Sensors",
      "Color Detection",
      "Optical Measurement",
    ],
  },
  {
    title: "Sound and Vibration",
    description: "Discover acoustic and vibration sensing principles",
    icon: <Waves className="w-6 h-6" />,
    href: "/steam-learn/sensors/acoustic",
    lessons: [
      "Microphones",
      "Vibration Sensors",
      "Acoustic Measurement",
      "Noise Analysis",
    ],
  },
  {
    title: "Advanced Applications",
    description: "Explore advanced sensor applications and fusion",
    icon: <Binary className="w-6 h-6" />,
    href: "/steam-learn/sensors/advanced",
    lessons: [
      "Sensor Fusion",
      "IoT Applications",
      "Smart Systems",
      "Future Trends",
    ],
  },
];

export default function SensorsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Sensors and Sensing Technology</h1>
          <p className="text-xl text-muted-foreground">
            Explore the world of sensors, from basic principles to advanced applications
            in modern technology.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {topics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {topic.icon}
                  <div>
                    <CardTitle>{topic.title}</CardTitle>
                    <CardDescription>{topic.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {topic.lessons.map((lesson, lessonIndex) => (
                    <li key={lessonIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={topic.href}>Start Learning</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Quiz Section */}
        <Card className="bg-primary/5 border-primary/10">
          <CardHeader>
            <CardTitle className="text-center">Test Your Knowledge</CardTitle>
            <CardDescription className="text-center">
              Take a quiz to assess your understanding of sensors and sensing technology
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link href="/steam-learn/sensors/quiz">Take Quiz</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
