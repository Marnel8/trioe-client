"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets } from "lucide-react";
import Link from "next/link";

const lessons = [
  {
    title: "Irrigation Systems",
    description: "Learn about different types of irrigation systems and their applications",
    href: "/agri-aqua-learn/water-management/irrigation",
    duration: "30-45 minutes",
  },
  {
    title: "Water Quality",
    description: "Understanding water quality parameters and their importance",
    href: "/agri-aqua-learn/water-management/quality",
    duration: "30-45 minutes",
  },
  {
    title: "Water Conservation",
    description: "Techniques and practices for efficient water use",
    href: "/agri-aqua-learn/water-management/conservation",
    duration: "30-45 minutes",
  },
  {
    title: "Drainage Systems",
    description: "Design and implementation of effective drainage systems",
    href: "/agri-aqua-learn/water-management/drainage",
    duration: "30-45 minutes",
  },
];

export default function WaterManagementPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Droplets className="h-8 w-8 text-blue-500" />
          <h1 className="text-4xl font-bold">Water Management</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Master the principles of agricultural water management for sustainable farming.
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
