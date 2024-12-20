"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HazardIdentificationPage() {
  return (
    <div className="container mx-auto py-8">
      <Button
        variant="ghost"
        className="mb-8"
        asChild
      >
        <Link href="/drm-learn/risk-assessment">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Risk Assessment
        </Link>
      </Button>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="h-8 w-8 text-yellow-500" />
          <h1 className="text-4xl font-bold">Hazard Identification</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Learn how to identify and classify potential hazards in your community.
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardContent className="prose prose-slate dark:prose-invert max-w-none p-6">
            <h2>Understanding Hazards</h2>
            <p>
              Hazard identification is the first step in risk assessment. It involves recognizing and
              documenting potential sources of harm or adverse effects in a community.
            </p>

            <h3>Types of Hazards</h3>
            <ul>
              <li>
                <strong>Natural Hazards</strong>
                <ul>
                  <li>Geological (earthquakes, landslides)</li>
                  <li>Hydrometeorological (floods, storms)</li>
                  <li>Climatological (droughts, extreme temperatures)</li>
                  <li>Biological (epidemics, infestations)</li>
                </ul>
              </li>
              <li>
                <strong>Technological Hazards</strong>
                <ul>
                  <li>Industrial accidents</li>
                  <li>Infrastructure failures</li>
                  <li>Transportation accidents</li>
                  <li>Hazardous materials</li>
                </ul>
              </li>
              <li>
                <strong>Human-Induced Hazards</strong>
                <ul>
                  <li>Civil unrest</li>
                  <li>Terrorism</li>
                  <li>Armed conflict</li>
                  <li>Mass gatherings</li>
                </ul>
              </li>
            </ul>

            <h3>Hazard Assessment Process</h3>
            <ol>
              <li>
                <strong>Historical Analysis</strong>
                <ul>
                  <li>Review past events</li>
                  <li>Analyze frequency and patterns</li>
                  <li>Document impacts and losses</li>
                </ul>
              </li>
              <li>
                <strong>Current Assessment</strong>
                <ul>
                  <li>Identify existing hazards</li>
                  <li>Map hazard locations</li>
                  <li>Assess severity potential</li>
                </ul>
              </li>
              <li>
                <strong>Future Projection</strong>
                <ul>
                  <li>Consider climate change impacts</li>
                  <li>Evaluate development plans</li>
                  <li>Assess emerging risks</li>
                </ul>
              </li>
            </ol>

            <h3>Hazard Characteristics</h3>
            <p>
              Key aspects to document for each hazard:
            </p>
            <ul>
              <li>Frequency or probability</li>
              <li>Magnitude or intensity</li>
              <li>Duration</li>
              <li>Speed of onset</li>
              <li>Spatial extent</li>
              <li>Predictability</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/drm-learn/risk-assessment">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Module
            </Link>
          </Button>
          <Button asChild>
            <Link href="/drm-learn/risk-assessment/vulnerability">
              Next Lesson: Vulnerability Analysis
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
