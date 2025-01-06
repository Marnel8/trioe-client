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
  title: "Early Warning Systems",
  sections: [
    {
      id: "basics",
      title: "Understanding Early Warning Systems",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Early Warning Systems (EWS) are essential tools that help communities prepare for and respond to impending disasters.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Components of Early Warning Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Risk Knowledge</strong> - Understanding potential hazards and vulnerabilities</li>
                  <li><strong>Monitoring</strong> - Technical systems to track hazards</li>
                  <li><strong>Warning Communication</strong> - Methods to disseminate alerts</li>
                  <li><strong>Response Capability</strong> - Community preparedness to act on warnings</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "warning-types",
      title: "Types of Warning Systems",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Different types of disasters require different warning systems and alert methods.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Common Warning Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Weather Warnings</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Storm alerts</li>
                      <li>Flood warnings</li>
                      <li>Tornado warnings</li>
                    </ul>
                  </li>
                  <li><strong>Geological Hazards</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Earthquake early warning</li>
                      <li>Tsunami alerts</li>
                      <li>Volcanic activity monitoring</li>
                    </ul>
                  </li>
                  <li><strong>Technological Hazards</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Industrial accident alerts</li>
                      <li>Nuclear incident warnings</li>
                      <li>Chemical spill notifications</li>
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
      id: "response",
      title: "Responding to Warnings",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Knowing how to interpret and respond to early warnings is crucial for safety during emergencies.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Warning Response Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Understanding Alerts</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Know warning levels and meanings</li>
                      <li>Identify official warning sources</li>
                      <li>Understand local alert systems</li>
                    </ul>
                  </li>
                  <li><strong>Immediate Actions</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Follow evacuation orders</li>
                      <li>Activate emergency plans</li>
                      <li>Contact family members</li>
                    </ul>
                  </li>
                  <li><strong>Communication</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Monitor official channels</li>
                      <li>Share information responsibly</li>
                      <li>Stay connected with community</li>
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
            <Link href="/learn/drm-learn/disaster-preparedness/quiz">
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
