"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function UnderstandingDisastersPage() {
  return (
    <div className="container mx-auto py-8">
      <Button
        variant="ghost"
        className="mb-8"
        asChild
      >
        <Link href="/drm-learn/disaster-preparedness">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Disaster Preparedness
        </Link>
      </Button>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="h-8 w-8 text-blue-500" />
          <h1 className="text-4xl font-bold">Understanding Disasters</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Learn about different types of disasters, their characteristics, and potential impacts.
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardContent className="prose prose-slate dark:prose-invert max-w-none p-6">
            <h2>Types of Disasters</h2>
            <p>
              Disasters can be categorized into several types, each requiring different preparedness and response strategies.
            </p>

            <h3>Natural Disasters</h3>
            <ul>
              <li>
                <strong>Geological Disasters</strong>
                <ul>
                  <li>Earthquakes</li>
                  <li>Volcanic eruptions</li>
                  <li>Landslides</li>
                  <li>Tsunamis</li>
                </ul>
              </li>
              <li>
                <strong>Meteorological Disasters</strong>
                <ul>
                  <li>Typhoons/Hurricanes</li>
                  <li>Floods</li>
                  <li>Droughts</li>
                  <li>Extreme temperatures</li>
                </ul>
              </li>
            </ul>

            <h3>Human-Made Disasters</h3>
            <ul>
              <li>
                <strong>Technological Disasters</strong>
                <ul>
                  <li>Industrial accidents</li>
                  <li>Chemical spills</li>
                  <li>Nuclear incidents</li>
                </ul>
              </li>
              <li>
                <strong>Social Disasters</strong>
                <ul>
                  <li>Civil unrest</li>
                  <li>Terrorism</li>
                  <li>War and conflict</li>
                </ul>
              </li>
            </ul>

            <h3>Disaster Characteristics</h3>
            <p>
              Key aspects to consider when analyzing disasters:
            </p>
            <ul>
              <li>Onset speed (sudden vs. slow)</li>
              <li>Duration</li>
              <li>Geographic scope</li>
              <li>Predictability</li>
              <li>Frequency</li>
              <li>Impact severity</li>
            </ul>

            <h3>Impact Assessment</h3>
            <p>
              Disasters can affect communities in multiple ways:
            </p>
            <ul>
              <li>Loss of life and injuries</li>
              <li>Property damage</li>
              <li>Infrastructure disruption</li>
              <li>Economic losses</li>
              <li>Environmental damage</li>
              <li>Social and psychological impacts</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/drm-learn/disaster-preparedness">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Module
            </Link>
          </Button>
          <Button asChild>
            <Link href="/drm-learn/disaster-preparedness/planning">
              Next Lesson: Emergency Planning
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
