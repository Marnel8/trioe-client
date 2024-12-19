"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sprout, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SoilCompositionPage() {
  return (
    <div className="container mx-auto py-8">
      <Button
        variant="ghost"
        className="mb-8"
        asChild
      >
        <Link href="/agri-aqua-learn/soil-science">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Soil Science
        </Link>
      </Button>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Sprout className="h-8 w-8 text-green-500" />
          <h1 className="text-4xl font-bold">Soil Composition</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Learn about the different components that make up soil and their importance in agriculture.
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardContent className="prose prose-slate dark:prose-invert max-w-none p-6">
            <h2>Introduction to Soil Composition</h2>
            <p>
              Soil is a complex mixture of minerals, organic matter, water, and air. Understanding these components
              is crucial for successful agriculture and plant growth.
            </p>

            <h3>Major Components of Soil</h3>
            <ul>
              <li>
                <strong>Minerals (45-49%)</strong>
                <ul>
                  <li>Sand (0.05 to 2mm)</li>
                  <li>Silt (0.002 to 0.05mm)</li>
                  <li>Clay (smaller than 0.002mm)</li>
                </ul>
              </li>
              <li>
                <strong>Water (20-30%)</strong>
                <ul>
                  <li>Essential for nutrient transport</li>
                  <li>Supports plant growth</li>
                  <li>Maintains soil structure</li>
                </ul>
              </li>
              <li>
                <strong>Air (20-30%)</strong>
                <ul>
                  <li>Necessary for root respiration</li>
                  <li>Supports beneficial microorganisms</li>
                  <li>Affects soil chemistry</li>
                </ul>
              </li>
              <li>
                <strong>Organic Matter (1-5%)</strong>
                <ul>
                  <li>Improves soil structure</li>
                  <li>Provides nutrients</li>
                  <li>Supports beneficial organisms</li>
                </ul>
              </li>
            </ul>

            <h3>Soil Texture</h3>
            <p>
              Soil texture refers to the proportion of sand, silt, and clay particles in soil. This affects:
            </p>
            <ul>
              <li>Water retention capacity</li>
              <li>Nutrient holding capacity</li>
              <li>Drainage characteristics</li>
              <li>Workability of the soil</li>
            </ul>

            <h3>Importance of Soil Structure</h3>
            <p>
              Good soil structure is essential for:
            </p>
            <ul>
              <li>Root growth and development</li>
              <li>Water movement and retention</li>
              <li>Air circulation</li>
              <li>Microbial activity</li>
              <li>Nutrient availability</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/agri-aqua-learn/soil-science">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Module
            </Link>
          </Button>
          <Button asChild>
            <Link href="/agri-aqua-learn/soil-science/ph-nutrients">
              Next Lesson: pH and Nutrients
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
