"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Fish, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function FishSpeciesPage() {
  return (
    <div className="container mx-auto py-8">
      <Button
        variant="ghost"
        className="mb-8"
        asChild
      >
        <Link href="/agri-aqua-learn/aquaculture">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Aquaculture Basics
        </Link>
      </Button>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Fish className="h-8 w-8 text-cyan-500" />
          <h1 className="text-4xl font-bold">Fish Species Selection</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Learn about different fish species suitable for aquaculture and their specific requirements.
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardContent className="prose prose-slate dark:prose-invert max-w-none p-6">
            <h2>Common Aquaculture Species</h2>
            <p>
              Selecting the right fish species is crucial for successful aquaculture operations.
              Different species have varying requirements and market potential.
            </p>

            <h3>Freshwater Species</h3>
            <ul>
              <li>
                <strong>Tilapia</strong>
                <ul>
                  <li>Fast growth rate</li>
                  <li>Adaptable to various conditions</li>
                  <li>High market demand</li>
                  <li>Disease resistant</li>
                </ul>
              </li>
              <li>
                <strong>Catfish</strong>
                <ul>
                  <li>Tolerant of poor water quality</li>
                  <li>High stocking density possible</li>
                  <li>Good feed conversion ratio</li>
                </ul>
              </li>
              <li>
                <strong>Carp</strong>
                <ul>
                  <li>Hardy species</li>
                  <li>Omnivorous feeding habits</li>
                  <li>Popular in Asian markets</li>
                </ul>
              </li>
            </ul>

            <h3>Marine Species</h3>
            <ul>
              <li>
                <strong>Sea Bass</strong>
                <ul>
                  <li>High value product</li>
                  <li>Good growth in brackish water</li>
                  <li>Strong market demand</li>
                </ul>
              </li>
              <li>
                <strong>Grouper</strong>
                <ul>
                  <li>Premium market price</li>
                  <li>Suitable for cage culture</li>
                  <li>High export potential</li>
                </ul>
              </li>
            </ul>

            <h3>Selection Criteria</h3>
            <p>
              Consider these factors when choosing fish species:
            </p>
            <ul>
              <li>Water quality requirements</li>
              <li>Growth rate and time to market</li>
              <li>Feed requirements and costs</li>
              <li>Market demand and price</li>
              <li>Disease resistance</li>
              <li>Local climate suitability</li>
              <li>Available technology and expertise</li>
            </ul>

            <h3>Polyculture Considerations</h3>
            <p>
              Benefits of raising multiple species together:
            </p>
            <ul>
              <li>Better resource utilization</li>
              <li>Improved water quality</li>
              <li>Risk diversification</li>
              <li>Increased profitability</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/agri-aqua-learn/aquaculture">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Module
            </Link>
          </Button>
          <Button asChild>
            <Link href="/agri-aqua-learn/aquaculture/water-quality">
              Next Lesson: Water Quality Management
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
