"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout } from "lucide-react";
import Link from "next/link";

const lessons = [
  {
    title: "Soil Composition",
    description: "Learn about the different components that make up soil",
    href: "/learn/agri-aqua-learn/soil-science/composition",
    duration: "30-45 minutes",
  },
  {
    title: "pH and Nutrients",
    description: "Understanding soil pH and essential plant nutrients",
    href: "/learn/agri-aqua-learn/soil-science/ph-nutrients",
    duration: "30-45 minutes",
  },
  {
    title: "Soil Testing",
    description: "Methods and techniques for testing soil properties",
    href: "/learn/agri-aqua-learn/soil-science/testing",
    duration: "30-45 minutes",
  },
  {
    title: "Soil Conservation",
    description: "Practices for maintaining soil health and preventing erosion",
    href: "/learn/agri-aqua-learn/soil-science/conservation",
    duration: "30-45 minutes",
  },
];

export default function SoilSciencePage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Sprout className="h-8 w-8 text-green-500" />
          <h1 className="text-4xl font-bold">Soil Science</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Learn about soil properties and management techniques for optimal crop growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lessons.map((lesson) => (
          <Card key={lesson.title}>
            <CardHeader>
              <CardTitle>{lesson.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{lesson.description}</p>
              <p className="text-sm text-muted-foreground mb-4">
                Duration: {lesson.duration}
              </p>
              <Button asChild className="w-full">
                <Link href={lesson.href}>Start Lesson</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
