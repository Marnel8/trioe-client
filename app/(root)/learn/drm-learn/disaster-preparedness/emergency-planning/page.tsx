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
  title: "Emergency Planning",
  sections: [
    {
      id: "family-plan",
      title: "Creating a Family Emergency Plan",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            A family emergency plan is crucial for ensuring everyone knows what to do during a disaster.
            It helps coordinate actions and maintain communication when normal systems may be disrupted.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Key Elements of a Family Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Emergency Contacts</strong> - List of important phone numbers and contact information</li>
                  <li><strong>Meeting Points</strong> - Designated locations to reunite if separated</li>
                  <li><strong>Communication Plan</strong> - How to stay in touch during emergencies</li>
                  <li><strong>Evacuation Routes</strong> - Multiple paths to reach safe locations</li>
                  <li><strong>Special Needs</strong> - Plans for family members with specific requirements</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "communication",
      title: "Emergency Communication",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Establishing reliable communication methods is essential during emergencies when normal channels might be unavailable.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Communication Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Primary Methods</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Mobile phones and text messages</li>
                      <li>Landline phones</li>
                      <li>Social media platforms</li>
                    </ul>
                  </li>
                  <li><strong>Backup Methods</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Two-way radios</li>
                      <li>Written messages at meeting points</li>
                      <li>Out-of-area contact person</li>
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
      id: "documentation",
      title: "Important Documents",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Keeping important documents safe and accessible is crucial for recovery after a disaster.
          </p>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Essential Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Documents</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Identification cards and passports</li>
                      <li>Birth and marriage certificates</li>
                      <li>Social security cards</li>
                    </ul>
                  </li>
                  <li><strong>Financial Documents</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Bank account information</li>
                      <li>Insurance policies</li>
                      <li>Property deeds</li>
                    </ul>
                  </li>
                  <li><strong>Medical Information</strong>
                    <ul className="list-disc pl-6 mt-2">
                      <li>Prescriptions and medical records</li>
                      <li>Insurance cards</li>
                      <li>Emergency contacts</li>
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
            <Link href="/learn/drm-learn/disaster-preparedness/survival-kits">
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
