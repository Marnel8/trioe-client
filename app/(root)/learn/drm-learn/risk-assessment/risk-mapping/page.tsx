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
  title: "Risk Mapping",
  sections: [
    {
      id: "basics",
      title: "Understanding Risk Maps",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Risk mapping is a visual representation of hazards, vulnerabilities, and risks in a specific area.
            It helps in understanding spatial relationships and making informed decisions.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Types of Risk Maps</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Hazard Maps</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Show locations of potential hazards</li>
                      <li>Indicate hazard intensity levels</li>
                      <li>Display historical occurrences</li>
                    </ul>
                  </li>
                  <li><strong>Vulnerability Maps</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Show vulnerable populations</li>
                      <li>Identify critical infrastructure</li>
                      <li>Display socioeconomic factors</li>
                    </ul>
                  </li>
                  <li><strong>Composite Risk Maps</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Combine hazard and vulnerability data</li>
                      <li>Show overall risk levels</li>
                      <li>Identify priority areas</li>
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
      title: "Mapping Methods and Tools",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Various methods and tools are used in risk mapping to create accurate and useful visualizations.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Mapping Techniques</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Geographic Information Systems (GIS)</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Digital mapping software</li>
                      <li>Spatial analysis tools</li>
                      <li>Data integration capabilities</li>
                    </ul>
                  </li>
                  <li><strong>Remote Sensing</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Satellite imagery</li>
                      <li>Aerial photography</li>
                      <li>LIDAR data</li>
                    </ul>
                  </li>
                  <li><strong>Participatory Mapping</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Community input</li>
                      <li>Local knowledge integration</li>
                      <li>Stakeholder engagement</li>
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
      id: "applications",
      title: "Applications of Risk Maps",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Risk maps serve multiple purposes in disaster risk management and planning.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Key Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Planning and Development</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Land use planning</li>
                      <li>Infrastructure development</li>
                      <li>Building regulations</li>
                    </ul>
                  </li>
                  <li><strong>Emergency Response</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Evacuation planning</li>
                      <li>Resource allocation</li>
                      <li>Response coordination</li>
                    </ul>
                  </li>
                  <li><strong>Public Awareness</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Risk communication</li>
                      <li>Community education</li>
                      <li>Insurance planning</li>
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
            <Link href="/learn/drm-learn/risk-assessment/impact-assessment">
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
