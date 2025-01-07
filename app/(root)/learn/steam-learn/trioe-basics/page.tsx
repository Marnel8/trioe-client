"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "Setting up your environment",
    content: [
      {
        type: "text",
        value: "Before you start programming with TRIOE, you'll need to set up your development environment. Follow these steps:",
      },
      {
        type: "list",
        items: [
          "Download and install the TRIOE IDE",
          "Connect your microcontroller to your computer",
          "Install required drivers",
          "Verify the connection in the IDE",
        ],
      },
    ],
  },
  {
    title: "Basic syntax and data types",
    content: [
      {
        type: "text",
        value: "Learn the fundamental building blocks of TRIOE programming:",
      },
      {
        type: "list",
        items: [
          "Variables and constants",
          "Numbers, strings, and booleans",
          "Arrays and objects",
          "Type checking and conversion",
        ],
      },
    ],
  },
  {
    title: "Control structures",
    content: [
      {
        type: "text",
        value: "Master the flow control in TRIOE programming:",
      },
      {
        type: "list",
        items: [
          "If statements and conditions",
          "Loops (for, while)",
          "Switch statements",
          "Error handling with try/catch",
        ],
      },
    ],
  },
  {
    title: "Functions and modules",
    content: [
      {
        type: "text",
        value: "Organize your code efficiently:",
      },
      {
        type: "list",
        items: [
          "Function declaration and parameters",
          "Return values and scope",
          "Module imports and exports",
          "Code organization best practices",
        ],
      },
    ],
  },
];

export default function TrioeBasicsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" size="icon" asChild>
          <Link href="/learn/steam-learn">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-4xl font-bold">Getting Started with TRIOE</h1>
          <p className="text-muted-foreground mt-2">
            Learn the basics of programming with TRIOE
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        {sections.map((section, index) => (
          <Card key={section.title}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{`Section ${index + 1}`}</Badge>
                <CardTitle>{section.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {section.content.map((item, i) => (
                <div key={i} className="mb-4">
                  {item.type === "text" && (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                  {item.type === "list" && (
                    <ul className="list-disc list-inside space-y-2 mt-2">
                      {item.items.map((listItem, j) => (
                        <li key={j}>{listItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
