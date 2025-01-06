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
  title: "pH and Nutrients",
  sections: [
    {
      id: "soil-ph",
      title: "Understanding Soil pH",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Soil pH is a measure of soil acidity or alkalinity, which affects nutrient availability and plant growth.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>The pH Scale in Soil</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Acidic Soil (pH &lt; 7)</strong> - Common in high rainfall areas, affects nutrient availability</li>
                  <li><strong>Neutral Soil (pH 7)</strong> - Optimal for most plants, balanced nutrient availability</li>
                  <li><strong>Alkaline Soil (pH &gt; 7)</strong> - Common in arid regions, can limit certain nutrients</li>
                  <li><strong>Optimal Range</strong> - Most crops prefer pH between 6.0 and 7.5</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "primary-nutrients",
      title: "Primary Plant Nutrients",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Primary nutrients are required in large amounts for plant growth and development.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Essential Macronutrients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Nitrogen (N)</strong> - Essential for leaf growth and chlorophyll production</li>
                  <li><strong>Phosphorus (P)</strong> - Important for root development and energy transfer</li>
                  <li><strong>Potassium (K)</strong> - Helps with water regulation and disease resistance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "secondary-nutrients",
      title: "Secondary and Micronutrients",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Secondary nutrients and micronutrients are also essential but required in smaller quantities.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Other Essential Nutrients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Secondary Nutrients</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Calcium (Ca) - Cell wall development</li>
                      <li>Magnesium (Mg) - Chlorophyll component</li>
                      <li>Sulfur (S) - Protein formation</li>
                    </ul>
                  </li>
                  <li><strong>Micronutrients</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Iron (Fe) - Chlorophyll synthesis</li>
                      <li>Zinc (Zn) - Enzyme activation</li>
                      <li>Manganese (Mn) - Photosynthesis</li>
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
            <Link href="/learn/agri-aqua-learn/soil-science/testing">
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
