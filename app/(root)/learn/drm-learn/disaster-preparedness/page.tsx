"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";
import Link from "next/link";

const lessons = [
  {
    title: "Understanding Disasters",
    description: "Learn about different types of disasters and their characteristics",
    href: "/learn/drm-learn/disaster-preparedness/understanding-disasters",
    duration: "30-45 minutes",
  },
  {
    title: "Emergency Planning",
    description: "Create effective emergency response plans",
    href: "/learn/drm-learn/disaster-preparedness/emergency-planning",
    duration: "30-45 minutes",
  },
  {
    title: "Survival Kits",
    description: "Essential items and supplies for emergency situations",
    href: "/learn/drm-learn/disaster-preparedness/survival-kits",
    duration: "30-45 minutes",
  },
  {
    title: "Early Warning Systems",
    description: "Understanding and implementing early warning systems",
    href: "/learn/drm-learn/disaster-preparedness/early-warning",
    duration: "30-45 minutes",
  },
];

export default function DisasterPreparednessPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="h-8 w-8 text-blue-500" />
          <h1 className="text-4xl font-bold">Disaster Preparedness</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Learn essential skills and knowledge for preparing for and responding to disasters.
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
