"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
import { ArrowLeft, ArrowRight } from "lucide-react";

const lesson = {
  title: "Impact Assessment",
  sections: [
    {
      id: "basics",
      title: "Understanding Impact Assessment",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Impact assessment evaluates the potential consequences of hazards on communities, infrastructure, and systems.
            It helps in understanding the scale and scope of possible disasters.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Types of Impacts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Direct Impacts</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Loss of life</li>
                      <li>Property damage</li>
                      <li>Infrastructure destruction</li>
                    </ul>
                  </li>
                  <li><strong>Indirect Impacts</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Economic disruption</li>
                      <li>Social disruption</li>
                      <li>Environmental degradation</li>
                    </ul>
                  </li>
                  <li><strong>Long-term Impacts</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Development setbacks</li>
                      <li>Psychological effects</li>
                      <li>Ecosystem changes</li>
                    </ul>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "methods",
      title: "Assessment Methods",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Various methods are used to assess potential impacts and their magnitude.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Assessment Techniques</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Quantitative Methods</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Economic loss modeling</li>
                      <li>Casualty estimation</li>
                      <li>Infrastructure damage assessment</li>
                    </ul>
                  </li>
                  <li><strong>Qualitative Methods</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Expert judgment</li>
                      <li>Historical analysis</li>
                      <li>Scenario planning</li>
                    </ul>
                  </li>
                  <li><strong>Social Impact Assessment</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Community surveys</li>
                      <li>Stakeholder analysis</li>
                      <li>Cultural impact studies</li>
                    </ul>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "mitigation",
      title: "Impact Mitigation Strategies",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Based on impact assessments, various strategies can be implemented to reduce potential impacts.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Mitigation Approaches</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Structural Measures</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Building reinforcement</li>
                      <li>Infrastructure protection</li>
                      <li>Physical barriers</li>
                    </ul>
                  </li>
                  <li><strong>Non-structural Measures</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Land use planning</li>
                      <li>Building codes</li>
                      <li>Early warning systems</li>
                    </ul>
                  </li>
                  <li><strong>Capacity Building</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Training programs</li>
                      <li>Public awareness</li>
                      <li>Emergency planning</li>
                    </ul>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
  ],
};

export default function LessonPage() {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="flex items-center justify-between">
        <Button variant="ghost" asChild>
          <Link href="/learn/drm-learn/risk-assessment">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Risk Assessment
          </Link>
        </Button>
        <div className="text-sm text-muted-foreground">
          {currentSection + 1} of {lesson.sections.length}
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
        <Progress value={(currentSection / (lesson.sections.length - 1)) * 100} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{lesson.sections[currentSection].title}</CardTitle>
        </CardHeader>
        <CardContent>
          {lesson.sections[currentSection].content}
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {lesson.sections.map((section, index) => (
            <Button
              key={section.id}
              variant={currentSection === index ? "default" : "outline"}
              className="w-8 h-8"
              onClick={() => setCurrentSection(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
        {currentSection === lesson.sections.length - 1 ? (
          <Button asChild>
            <Link href="/learn/drm-learn/risk-assessment/quiz">
              Take Quiz
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        ) : (
          <Button
            onClick={() => setCurrentSection(currentSection + 1)}
          >
            Next
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
