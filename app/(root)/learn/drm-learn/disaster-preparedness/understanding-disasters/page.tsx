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
  title: "Understanding Disasters",
  sections: [
    {
      id: "introduction",
      title: "Introduction to Disasters",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Disasters are events that seriously disrupt the functioning of a community and cause widespread losses.
            Understanding their nature is crucial for effective preparation and response.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Types of Disasters</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Natural Disasters</strong> - Events caused by natural processes (earthquakes, typhoons)</li>
                  <li><strong>Human-Made Disasters</strong> - Events caused by human activities (industrial accidents)</li>
                  <li><strong>Complex Emergencies</strong> - Combination of natural and human-made factors</li>
                  <li><strong>Technological Disasters</strong> - Failures of technological systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "disaster-cycle",
      title: "The Disaster Management Cycle",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            The disaster management cycle is a continuous process through which communities prepare for and reduce the impact of disasters.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Phases of Disaster Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Prevention</strong> - Actions to prevent disasters or reduce their severity</li>
                  <li><strong>Preparedness</strong> - Planning and organizing before a disaster</li>
                  <li><strong>Response</strong> - Immediate actions during and after a disaster</li>
                  <li><strong>Recovery</strong> - Rebuilding and restoration after a disaster</li>
                  <li><strong>Mitigation</strong> - Long-term measures to reduce disaster risks</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "impact-assessment",
      title: "Understanding Disaster Impact",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Disasters can have various impacts on communities, affecting different aspects of society.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Types of Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Physical Impact</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Damage to infrastructure</li>
                      <li>Loss of life and injuries</li>
                      <li>Environmental damage</li>
                    </ul>
                  </li>
                  <li><strong>Social Impact</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Displacement of communities</li>
                      <li>Disruption of services</li>
                      <li>Psychological effects</li>
                    </ul>
                  </li>
                  <li><strong>Economic Impact</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Loss of livelihoods</li>
                      <li>Business interruption</li>
                      <li>Recovery costs</li>
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
          <Link href="/learn/drm-learn/disaster-preparedness">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Disaster Preparedness
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
            <Link href="/learn/drm-learn/disaster-preparedness/emergency-planning">
              Next Lesson
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
