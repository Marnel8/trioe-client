"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut } from "lucide-react";
import Link from "next/link";

const lessons = [
  {
    title: "Evacuation Basics",
    description: "Learn the fundamentals of evacuation planning and procedures",
    href: "/learn/drm-learn/evacuation-planning/evacuation-basics",
    duration: "30-45 minutes",
  },
  {
    title: "Route Planning",
    description: "Identify and plan safe evacuation routes",
    href: "/learn/drm-learn/evacuation-planning/route-planning",
    duration: "30-45 minutes",
  },
  {
    title: "Assembly Points",
    description: "Establish and manage evacuation assembly points",
    href: "/learn/drm-learn/evacuation-planning/assembly-points",
    duration: "30-45 minutes",
  },
  {
    title: "Special Considerations",
    description: "Plan for vulnerable populations and special needs",
    href: "/learn/drm-learn/evacuation-planning/special-considerations",
    duration: "30-45 minutes",
  },
];

export default function EvacuationPlanningPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <LogOut className="h-8 w-8 text-green-500" />
          <h1 className="text-4xl font-bold">Evacuation Planning</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Learn how to develop and implement effective evacuation plans.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lessons.map((lesson) => (
          <Card key={lesson.title}>
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <span>{lesson.title}</span>
                <span className="text-sm text-muted-foreground">
                  {lesson.duration}
                </span>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                <p className="text-muted-foreground">{lesson.description}</p>
                <Link href={lesson.href}>
                  <Button className="mt-4 w-full">Start Lesson</Button>
                </Link>
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
