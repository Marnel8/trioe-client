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
import { Database, ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "Stream composition",
    content: [
      {
        type: "text",
        value: "Learn advanced techniques for composing complex stream systems:",
      },
      {
        type: "list",
        items: [
          "Higher-order streams",
          "Stream composition patterns",
          "Dynamic stream creation",
          "Stream lifecycle management",
        ],
      },
    ],
  },
  {
    title: "Backpressure handling",
    content: [
      {
        type: "text",
        value: "Master strategies for handling backpressure in stream systems:",
      },
      {
        type: "list",
        items: [
          "Understanding backpressure",
          "Buffer strategies",
          "Flow control mechanisms",
          "Rate limiting techniques",
        ],
      },
    ],
  },
  {
    title: "Concurrent streams",
    content: [
      {
        type: "text",
        value: "Explore advanced concurrency patterns in stream programming:",
      },
      {
        type: "list",
        items: [
          "Parallel stream processing",
          "Thread management",
          "Synchronization strategies",
          "Resource optimization",
        ],
      },
    ],
  },
  {
    title: "Testing streams",
    content: [
      {
        type: "text",
        value: "Learn comprehensive testing strategies for stream-based systems:",
      },
      {
        type: "list",
        items: [
          "Unit testing streams",
          "Integration testing",
          "Performance testing",
          "Debugging techniques",
        ],
      },
    ],
  },
];

export default function AdvancedStreamsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" size="icon" asChild>
          <Link href="/learn/steam-learn">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-4xl font-bold">Advanced Stream Patterns</h1>
          <p className="text-muted-foreground mt-2">
            Learn advanced stream programming patterns
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
