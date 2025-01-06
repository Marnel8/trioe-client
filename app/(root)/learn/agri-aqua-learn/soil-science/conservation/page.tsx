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
  title: "Soil Conservation",
  sections: [
    {
      id: "erosion",
      title: "Soil Erosion and Its Impact",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Soil erosion is a major threat to agricultural sustainability and food security.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Types and Causes of Erosion</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Water Erosion</strong> - Caused by rainfall and runoff</li>
                  <li><strong>Wind Erosion</strong> - Common in dry, exposed areas</li>
                  <li><strong>Tillage Erosion</strong> - From farming practices</li>
                  <li><strong>Impact</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Loss of topsoil and nutrients</li>
                      <li>Reduced soil fertility</li>
                      <li>Decreased crop yields</li>
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
      id: "conservation-practices",
      title: "Conservation Practices",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Various practices can be implemented to protect and conserve soil.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Soil Conservation Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Cover Cropping</strong> - Planting crops to protect soil</li>
                  <li><strong>Contour Farming</strong> - Following land contours</li>
                  <li><strong>Terracing</strong> - Creating level platforms</li>
                  <li><strong>No-Till Farming</strong> - Minimal soil disturbance</li>
                  <li><strong>Crop Rotation</strong> - Alternating different crops</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "sustainable-management",
      title: "Sustainable Soil Management",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Long-term approaches to maintain soil health and productivity.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Management Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Organic Matter Management</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Adding compost and manure</li>
                      <li>Incorporating crop residues</li>
                      <li>Using green manures</li>
                    </ul>
                  </li>
                  <li><strong>Water Management</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Efficient irrigation systems</li>
                      <li>Water harvesting techniques</li>
                      <li>Drainage management</li>
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
            <Link href="/learn/agri-aqua-learn/soil-science/quiz">
              Take the Quiz
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
