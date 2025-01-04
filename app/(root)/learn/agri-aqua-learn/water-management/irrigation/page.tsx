"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function IrrigationSystemsPage() {
  return (
    <div className="container mx-auto py-8">
      <Button
        variant="ghost"
        className="mb-8"
        asChild
      >
        <Link href="/agri-aqua-learn/water-management">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Water Management
        </Link>
      </Button>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Droplets className="h-8 w-8 text-blue-500" />
          <h1 className="text-4xl font-bold">Irrigation Systems</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Learn about different types of irrigation systems and their applications in agriculture.
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardContent className="prose prose-slate dark:prose-invert max-w-none p-6">
            <h2>Types of Irrigation Systems</h2>
            <p>
              Choosing the right irrigation system is crucial for efficient water use and optimal crop growth.
              Here are the main types of irrigation systems used in modern agriculture:
            </p>

            <h3>Surface Irrigation</h3>
            <ul>
              <li>
                <strong>Flood Irrigation</strong>
                <ul>
                  <li>Water is applied to the field by flooding</li>
                  <li>Simple but less water-efficient</li>
                  <li>Suitable for level fields</li>
                </ul>
              </li>
              <li>
                <strong>Furrow Irrigation</strong>
                <ul>
                  <li>Water flows through small channels between crop rows</li>
                  <li>Good for row crops</li>
                  <li>Moderate water efficiency</li>
                </ul>
              </li>
            </ul>

            <h3>Sprinkler Irrigation</h3>
            <ul>
              <li>
                <strong>Center Pivot</strong>
                <ul>
                  <li>Rotating sprinkler system</li>
                  <li>Covers large circular areas</li>
                  <li>Highly automated</li>
                </ul>
              </li>
              <li>
                <strong>Fixed Sprinkler</strong>
                <ul>
                  <li>Permanent or portable systems</li>
                  <li>Good for small to medium fields</li>
                  <li>Uniform water distribution</li>
                </ul>
              </li>
            </ul>

            <h3>Drip Irrigation</h3>
            <ul>
              <li>
                <strong>Surface Drip</strong>
                <ul>
                  <li>Water applied directly to soil surface</li>
                  <li>Highest water efficiency</li>
                  <li>Ideal for row crops and orchards</li>
                </ul>
              </li>
              <li>
                <strong>Subsurface Drip</strong>
                <ul>
                  <li>Buried drip lines</li>
                  <li>Minimal evaporation loss</li>
                  <li>Long-term installation</li>
                </ul>
              </li>
            </ul>

            <h3>Choosing the Right System</h3>
            <p>
              Consider these factors when selecting an irrigation system:
            </p>
            <ul>
              <li>Crop type and water requirements</li>
              <li>Field size and topography</li>
              <li>Water availability and quality</li>
              <li>Energy costs and labor availability</li>
              <li>Initial investment and maintenance costs</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/agri-aqua-learn/water-management">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Module
            </Link>
          </Button>
          <Button asChild>
            <Link href="/agri-aqua-learn/water-management/quality">
              Next Lesson: Water Quality
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
