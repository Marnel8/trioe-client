"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Link from "next/link";

const lessons = [
  {
    title: "Basic First Aid Principles",
    description: "Learn the fundamental principles of first aid and emergency response",
    href: "/learn/drm-learn/first-aid/basic-principles",
    duration: "30-45 minutes",
  },
  {
    title: "Common Injuries",
    description: "Handle cuts, burns, fractures, and other common injuries",
    href: "/learn/drm-learn/first-aid/common-injuries",
    duration: "30-45 minutes",
  },
  {
    title: "Medical Emergencies",
    description: "Respond to heart attacks, strokes, and other medical emergencies",
    href: "/learn/drm-learn/first-aid/medical-emergencies",
    duration: "30-45 minutes",
  },
  {
    title: "CPR and Resuscitation",
    description: "Learn life-saving CPR and resuscitation techniques",
    href: "/learn/drm-learn/first-aid/cpr-resuscitation",
    duration: "30-45 minutes",
  },
];

export default function FirstAidPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="h-8 w-8 text-red-500" />
          <h1 className="text-4xl font-bold">First Aid</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Learn essential first aid skills to help others during emergencies.
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
