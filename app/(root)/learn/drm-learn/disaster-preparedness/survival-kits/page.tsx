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
  title: "Survival Kits",
  sections: [
    {
      id: "basics",
      title: "Essential Survival Kit Components",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            A well-prepared survival kit is crucial for sustaining yourself and your family during the first 72 hours of a disaster.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Basic Survival Kit Items</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Water</strong> - One gallon per person per day</li>
                  <li><strong>Food</strong> - Non-perishable items for 3 days</li>
                  <li><strong>First Aid Kit</strong> - Basic medical supplies</li>
                  <li><strong>Flashlight</strong> - With extra batteries</li>
                  <li><strong>Radio</strong> - Battery-powered or hand-crank</li>
                  <li><strong>Basic Tools</strong> - Multi-tool, manual can opener</li>
                  <li><strong>Sanitation Items</strong> - Personal hygiene supplies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "specialized",
      title: "Specialized Kit Components",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Different situations and family needs may require additional specialized items in your survival kit.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Special Considerations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Medical Needs</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Prescription medications</li>
                      <li>Medical devices and supplies</li>
                      <li>Spare glasses or contact lenses</li>
                    </ul>
                  </li>
                  <li><strong>Infant Care</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Formula and baby food</li>
                      <li>Diapers and wipes</li>
                      <li>Baby medications</li>
                    </ul>
                  </li>
                  <li><strong>Pet Supplies</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Pet food and water</li>
                      <li>Medications</li>
                      <li>Leash and carrier</li>
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
      id: "maintenance",
      title: "Kit Maintenance and Storage",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Regular maintenance and proper storage of your survival kit ensures it will be ready when needed.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Maintenance Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Regular Checks</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Check expiration dates monthly</li>
                      <li>Replace expired items</li>
                      <li>Test batteries and equipment</li>
                    </ul>
                  </li>
                  <li><strong>Storage Location</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Cool, dry place</li>
                      <li>Easily accessible</li>
                      <li>Protected from pests</li>
                    </ul>
                  </li>
                  <li><strong>Multiple Kits</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Home kit</li>
                      <li>Vehicle kit</li>
                      <li>Work/school kit</li>
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
            <Link href="/learn/drm-learn/disaster-preparedness/early-warning">
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
