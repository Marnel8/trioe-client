"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

const lessons = [
  {
    title: "Hazard Identification",
    description: "Learn to identify and classify potential hazards",
    href: "/learn/drm-learn/risk-assessment/hazard-identification",
    duration: "30-45 minutes",
  },
  {
    title: "Vulnerability Analysis",
    description: "Assess community and infrastructure vulnerabilities",
    href: "/learn/drm-learn/risk-assessment/vulnerability-analysis",
    duration: "30-45 minutes",
  },
  {
    title: "Risk Mapping",
    description: "Create and interpret risk maps",
    href: "/learn/drm-learn/risk-assessment/risk-mapping",
    duration: "30-45 minutes",
  },
  {
    title: "Impact Assessment",
    description: "Evaluate potential impacts of disasters",
    href: "/learn/drm-learn/risk-assessment/impact-assessment",
    duration: "30-45 minutes",
  },
];

export default function RiskAssessmentPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="h-8 w-8 text-yellow-500" />
          <h1 className="text-4xl font-bold">Risk Assessment</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Learn how to identify, analyze, and evaluate disaster risks in your community.
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
