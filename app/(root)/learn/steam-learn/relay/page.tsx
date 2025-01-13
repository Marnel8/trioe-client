"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const lessons = [
  {
    title: "Relay Fundamentals",
    content: [
      "Understanding relay operation",
      "Types of relays",
      "Relay specifications",
      "Safety considerations",
    ],
    code: `
// Basic relay control setup
const int relayPin = 7;

void setup() {
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, LOW);  // Relay starts OFF
}
    `,
  },
  {
    title: "Switching Circuits",
    content: [
      "Basic ON/OFF control",
      "Timing-based switching",
      "Multiple relay control",
      "Power management",
    ],
    code: `
// Basic switching functions
void turnOn() {
  digitalWrite(relayPin, HIGH);
  Serial.println("Relay ON");
}

void turnOff() {
  digitalWrite(relayPin, LOW);
  Serial.println("Relay OFF");
}

void timedSwitch(unsigned long duration) {
  turnOn();
  delay(duration);
  turnOff();
}
    `,
  },
  {
    title: "Safety Considerations",
    content: [
      "Working with high voltage",
      "Isolation principles",
      "Surge protection",
      "Emergency shutdown",
    ],
    code: `
// Safety implementation example
const int emergencyStopPin = 2;
volatile bool emergencyStop = false;

void setup() {
  pinMode(emergencyStopPin, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(emergencyStopPin), 
                 emergencyStopHandler, FALLING);
}

void emergencyStopHandler() {
  emergencyStop = true;
  turnOff();  // Immediately turn off relay
}

void loop() {
  if (emergencyStop) {
    // System in emergency stop mode
    digitalWrite(LED_BUILTIN, HIGH);
    return;
  }
  // Normal operation continues...
}
    `,
  },
  {
    title: "Home Automation Projects",
    content: [
      "Automated lighting control",
      "Time-based scheduling",
      "Temperature-controlled switching",
      "Smart appliance control",
    ],
    code: `
// Example automated lighting system
#include <TimeLib.h>

const int LIGHT_RELAY = 7;
const int LIGHT_SENSOR = A0;

void automateLight() {
  int lightLevel = analogRead(LIGHT_SENSOR);
  time_t t = now();
  int currentHour = hour(t);
  
  // Turn on lights if dark and between 6 PM and 11 PM
  if (lightLevel < 300 && currentHour >= 18 && currentHour < 23) {
    digitalWrite(LIGHT_RELAY, HIGH);
  } else {
    digitalWrite(LIGHT_RELAY, LOW);
  }
}

void loop() {
  automateLight();
  delay(1000);
}
    `,
  }
];

export default function RelayPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center mb-6">
        <Link href="/learn/steam-learn">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Learning
          </Button>
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Relay Control</h1>
        <p className="text-gray-600">
          Learn to control high-power devices safely with relays
        </p>
      </div>

      <div className="grid gap-6">
        {lessons.map((lesson, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{lesson.title}</CardTitle>
                <Badge variant="secondary">Lesson {index + 1}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Key Concepts:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {lesson.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Example Code:</h3>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{lesson.code}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
