"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Fish, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WaterQualityPage() {
  return (
    <div className="container mx-auto py-8">
      <Button
        variant="ghost"
        className="mb-8"
        asChild
      >
        <Link href="/learn/agri-aqua-learn/aquaculture">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Aquaculture Basics
        </Link>
      </Button>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Fish className="h-8 w-8 text-cyan-500" />
          <h1 className="text-4xl font-bold">Water Quality Management</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Learn about essential water quality parameters and their management in aquaculture systems.
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardContent className="prose prose-slate dark:prose-invert max-w-none p-6">
            <h2>Key Water Quality Parameters</h2>
            <p>
              Maintaining optimal water quality is crucial for fish health and growth.
            </p>

            <h3>Dissolved Oxygen (DO)</h3>
            <ul>
              <li>Optimal range: 5-8 mg/L</li>
              <li>Critical for fish respiration</li>
              <li>Affected by temperature and stocking density</li>
              <li>Management methods:
                <ul>
                  <li>Aeration systems</li>
                  <li>Water exchange</li>
                  <li>Proper stocking rates</li>
                </ul>
              </li>
            </ul>

            <h3>Temperature</h3>
            <ul>
              <li>Species-specific requirements</li>
              <li>Affects metabolism and growth</li>
              <li>Influences oxygen solubility</li>
              <li>Control methods:
                <ul>
                  <li>Shade structures</li>
                  <li>Deep water systems</li>
                  <li>Water exchange</li>
                </ul>
              </li>
            </ul>

            <h3>pH Levels</h3>
            <ul>
              <li>Optimal range: 6.5-8.5</li>
              <li>Affects fish stress levels</li>
              <li>Influences ammonia toxicity</li>
              <li>Management:
                <ul>
                  <li>Liming</li>
                  <li>Buffer systems</li>
                  <li>Regular monitoring</li>
                </ul>
              </li>
            </ul>

            <h3>Ammonia and Nitrites</h3>
            <ul>
              <li>Toxic to fish</li>
              <li>Products of fish waste</li>
              <li>Control methods:
                <ul>
                  <li>Biofilters</li>
                  <li>Water exchange</li>
                  <li>Proper feeding</li>
                </ul>
              </li>
            </ul>

            <h3>Monitoring and Management</h3>
            <p>Essential practices for water quality maintenance:</p>
            <ul>
              <li>Regular testing schedule</li>
              <li>Record keeping</li>
              <li>Emergency response plans</li>
              <li>Equipment maintenance</li>
              <li>Staff training</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/learn/agri-aqua-learn/aquaculture">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Module
            </Link>
          </Button>
          <Button asChild>
            <Link href="/learn/agri-aqua-learn/aquaculture/feeding">
              Next Lesson: Feeding Systems
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
