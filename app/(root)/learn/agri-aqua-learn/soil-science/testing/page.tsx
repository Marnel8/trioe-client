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
  title: "Soil Testing",
  sections: [
    {
      id: "importance",
      title: "Importance of Soil Testing",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Soil testing is crucial for understanding soil health and making informed decisions about soil management.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Why Test Your Soil?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Determine nutrient levels and deficiencies</li>
                  <li>Measure soil pH and need for amendments</li>
                  <li>Assess organic matter content</li>
                  <li>Guide fertilizer application rates</li>
                  <li>Monitor soil health over time</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "testing-methods",
      title: "Soil Testing Methods",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Various methods are used to test different soil properties and characteristics.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Common Testing Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>pH Testing</strong> - Using pH meters or test strips</li>
                  <li><strong>Nutrient Analysis</strong> - Laboratory chemical tests</li>
                  <li><strong>Texture Analysis</strong> - Jar test or feel method</li>
                  <li><strong>Organic Matter</strong> - Loss on ignition test</li>
                  <li><strong>Compaction</strong> - Penetrometer measurements</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "interpretation",
      title: "Interpreting Test Results",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Understanding soil test results is crucial for making appropriate management decisions.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Reading Test Results</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Nutrient Levels</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Low - Below optimal range</li>
                      <li>Medium - Adequate range</li>
                      <li>High - Above optimal range</li>
                    </ul>
                  </li>
                  <li><strong>Making Recommendations</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Fertilizer requirements</li>
                      <li>Lime or sulfur needs</li>
                      <li>Organic matter amendments</li>
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
          <Link href="/learn/agri-aqua-learn/soil-science">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Soil Science
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
            <Link href="/learn/agri-aqua-learn/soil-science/conservation">
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
