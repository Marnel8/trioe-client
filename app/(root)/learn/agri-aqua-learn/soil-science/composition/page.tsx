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
  title: "Soil Composition",
  sections: [
    {
      id: "introduction",
      title: "Introduction to Soil Composition",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Soil is a complex mixture of minerals, organic matter, water, and air. Understanding these components
            is crucial for successful agriculture and plant growth.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>What is Soil Made Of?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Minerals (45-49%)</strong> - The inorganic component including sand, silt, and clay</li>
                  <li><strong>Water (20-30%)</strong> - Essential for nutrient transport and plant growth</li>
                  <li><strong>Air (20-30%)</strong> - Necessary for root respiration and soil organisms</li>
                  <li><strong>Organic Matter (1-5%)</strong> - Decomposed plant and animal materials</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "soil-particles",
      title: "Soil Particles and Texture",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            The mineral portion of soil consists of particles of different sizes, which determine soil texture.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Types of Soil Particles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Sand (0.05 to 2mm)</strong> - Largest particles, good drainage but poor nutrient retention</li>
                  <li><strong>Silt (0.002 to 0.05mm)</strong> - Medium-sized particles, balanced properties</li>
                  <li><strong>Clay (smaller than 0.002mm)</strong> - Smallest particles, high nutrient retention but poor drainage</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "soil-structure",
      title: "Soil Structure",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Soil structure refers to how soil particles group together to form aggregates.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Importance of Soil Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Determines pore space for air and water movement</li>
                  <li>Affects root growth and development</li>
                  <li>Influences soil's ability to store nutrients</li>
                  <li>Impacts soil's resistance to erosion</li>
                  <li>Affects water infiltration and drainage</li>
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
            <Link href="/learn/agri-aqua-learn/soil-science/ph-nutrients">
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
