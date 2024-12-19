"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Fish, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DiseasePrevention() {
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
          <h1 className="text-4xl font-bold">Disease Prevention</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Learn about common diseases and preventive measures in aquaculture.
        </p>
      </div>

      <div className="space-y-8">
        <Card>
          <CardContent className="prose prose-slate dark:prose-invert max-w-none p-6">
            <h2>Disease Management in Aquaculture</h2>
            <p>
              Prevention is key to maintaining healthy fish populations and avoiding economic losses.
            </p>

            <h3>Common Fish Diseases</h3>
            <ul>
              <li>
                <strong>Bacterial Diseases</strong>
                <ul>
                  <li>Columnaris</li>
                  <li>Furunculosis</li>
                  <li>Streptococcosis</li>
                </ul>
              </li>
              <li>
                <strong>Viral Diseases</strong>
                <ul>
                  <li>White Spot Syndrome</li>
                  <li>Viral Hemorrhagic Septicemia</li>
                  <li>Infectious Pancreatic Necrosis</li>
                </ul>
              </li>
              <li>
                <strong>Parasitic Infections</strong>
                <ul>
                  <li>Ich (White Spot Disease)</li>
                  <li>Sea Lice</li>
                  <li>Gill Flukes</li>
                </ul>
              </li>
            </ul>

            <h3>Preventive Measures</h3>
            <ul>
              <li>
                <strong>Water Quality Management</strong>
                <ul>
                  <li>Regular monitoring</li>
                  <li>Proper filtration</li>
                  <li>Adequate water exchange</li>
                </ul>
              </li>
              <li>
                <strong>Biosecurity</strong>
                <ul>
                  <li>Quarantine procedures</li>
                  <li>Equipment sanitation</li>
                  <li>Access control</li>
                </ul>
              </li>
              <li>
                <strong>Stock Management</strong>
                <ul>
                  <li>Proper stocking density</li>
                  <li>Health monitoring</li>
                  <li>Stress reduction</li>
                </ul>
              </li>
            </ul>

            <h3>Disease Recognition</h3>
            <p>Common signs of illness:</p>
            <ul>
              <li>Abnormal swimming behavior</li>
              <li>Loss of appetite</li>
              <li>Visible lesions or spots</li>
              <li>Rapid breathing</li>
              <li>Color changes</li>
            </ul>

            <h3>Treatment Approaches</h3>
            <ul>
              <li>
                <strong>Chemical Treatments</strong>
                <ul>
                  <li>Proper dosage</li>
                  <li>Safety considerations</li>
                  <li>Environmental impact</li>
                </ul>
              </li>
              <li>
                <strong>Biological Controls</strong>
                <ul>
                  <li>Probiotics</li>
                  <li>Immunostimulants</li>
                  <li>Vaccines</li>
                </ul>
              </li>
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
            <Link href="/agri-aqua-learn/aquaculture">
              Complete Module
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
