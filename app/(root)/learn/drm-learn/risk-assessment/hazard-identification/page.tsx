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
  title: "Hazard Identification",
  sections: [
    {
      id: "types",
      title: "Types of Hazards",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Understanding different types of hazards is the first step in effective risk assessment.
            Hazards can be categorized based on their origin and characteristics.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Natural Hazards</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Geological</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Earthquakes</li>
                      <li>Volcanic eruptions</li>
                      <li>Landslides</li>
                      <li>Tsunamis</li>
                    </ul>
                  </li>
                  <li><strong>Hydrometeorological</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Floods</li>
                      <li>Tropical cyclones</li>
                      <li>Droughts</li>
                      <li>Storm surges</li>
                    </ul>
                  </li>
                  <li><strong>Biological</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Disease outbreaks</li>
                      <li>Pest infestations</li>
                      <li>Animal attacks</li>
                    </ul>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Human-Made Hazards</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Technological</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Industrial accidents</li>
                      <li>Transportation accidents</li>
                      <li>Infrastructure failures</li>
                    </ul>
                  </li>
                  <li><strong>Environmental</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Pollution incidents</li>
                      <li>Deforestation</li>
                      <li>Chemical spills</li>
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
      id: "characteristics",
      title: "Hazard Characteristics",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Each hazard has specific characteristics that affect its potential impact and the way we prepare for it.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Key Characteristics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Intensity/Magnitude</strong> - How severe the hazard can be</li>
                  <li><strong>Duration</strong> - How long the hazard typically lasts</li>
                  <li><strong>Speed of Onset</strong> - How quickly the hazard develops</li>
                  <li><strong>Spatial Extent</strong> - Area affected by the hazard</li>
                  <li><strong>Frequency</strong> - How often the hazard occurs</li>
                  <li><strong>Predictability</strong> - How accurately we can forecast the hazard</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "identification",
      title: "Hazard Identification Process",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            The process of identifying hazards involves systematic steps to ensure comprehensive assessment.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Steps in Hazard Identification</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Historical Analysis</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Review past events</li>
                      <li>Analyze frequency patterns</li>
                      <li>Study impact records</li>
                    </ul>
                  </li>
                  <li><strong>Scientific Assessment</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Technical studies</li>
                      <li>Expert consultations</li>
                      <li>Field surveys</li>
                    </ul>
                  </li>
                  <li><strong>Community Input</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Local knowledge</li>
                      <li>Community mapping</li>
                      <li>Stakeholder interviews</li>
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
            <Link href="/learn/drm-learn/risk-assessment/vulnerability-analysis">
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
